import {Component, OnInit} from '@angular/core';
import {SongService} from "../../service/song/song.service";
import {ActivatedRoute} from "@angular/router";
import {song} from "../../model/song";

@Component({
  selector: 'app-search-song',
  templateUrl: './search-song.component.html',
  styleUrls: ['./search-song.component.css']
})
export class SearchSongComponent implements OnInit {
  keyword: string | null = '';
  songs: song[] = [];

  constructor(private songService: SongService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.keyword = paramMap.get('keyword');
      this.getListSong(this.keyword);
    });
  }

  ngOnInit(): void {
  }

  getListSong(keyword: any) {
    this.songService.findAllByNameContains(keyword).subscribe(value => {
      this.songs = value;
    });
  }

}
