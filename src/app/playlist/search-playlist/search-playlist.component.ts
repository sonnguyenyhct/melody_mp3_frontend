import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../model/playlist';
import {PlaylistService} from '../../service/playlist/playlist.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-playlist',
  templateUrl: './search-playlist.component.html',
  styleUrls: ['./search-playlist.component.css']
})
export class SearchPlaylistComponent implements OnInit {
  keyword: any;
  playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.keyword = paramMap.get('keyword');
      this.getListPlayList(this.keyword);
    });
  }

  ngOnInit(): void {
  }

  getListPlayList(keyword: string){
    this.playlistService.findAllByNameContains(keyword).subscribe(value => {
      this.playlists = value;
    });
  }

}
