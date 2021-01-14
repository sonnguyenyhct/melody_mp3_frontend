import {Component, OnInit} from '@angular/core';
import {SongService} from "../../service/song/song.service";
import {Track} from "ngx-audio-player";
import {singer} from "../../model/singer";
import {song} from "../../model/song";

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  track: Track = {};
  singers: singer[] = [];
  song: song = {};

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
  }

  getTrackById(id){
    this.songService.getSongById(id).subscribe(value =>{
      this.track.title = value.name;
      this.track.link = value.file;
      this.singers = value.singers;
      this.song = value;
    });
  }

}
