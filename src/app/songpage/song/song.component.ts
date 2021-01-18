import {Component, OnInit} from '@angular/core';
import {SongService} from '../../service/song/song.service';
import {Track} from 'ngx-audio-player';
import {singer} from '../../model/singer';
import {song} from '../../model/song';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  singleTrack: Track[] = [
    {
      link: '',
      title: ''
    }
  ];
  singers: singer[] = [];
  song: song = {
    name: '',
    file: '',
    singers: []
  };
  listTop10Songs: song[] = [];
  id: number | undefined;

  constructor(private songService: SongService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTrackById(this.id);
    });
  }

  ngOnInit(): void {
    this.getList10SongInTopViews();
  }

  // tslint:disable-next-line:typedef
  getTrackById(id: number) {
    this.songService.getSongById(id).subscribe(value => {
      this.singleTrack[0].title = value.name;
      this.singleTrack[0].link = value.file;
      this.singers = value.singers;
      this.song = value;
    });
  }

  // tslint:disable-next-line:typedef
  getList10SongInTopViews() {
    this.songService.get10SongInTopViews().subscribe(value => {
      this.listTop10Songs = value;
    });
  }
}
