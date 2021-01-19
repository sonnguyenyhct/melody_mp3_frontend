import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../service/playlist/playlist.service';
import {Playlist} from '../../model/playlist';

@Component({
  selector: 'app-topview-playlists',
  templateUrl: './topview-playlists.component.html',
  styleUrls: ['./topview-playlists.component.css']
})
export class TopviewPlaylistsComponent implements OnInit {

  playlistTopView: Playlist[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getTopView().subscribe(playlists => {
      console.log(this.playlistTopView.length);
      this.playlistTopView = playlists;
    });
  }

}
