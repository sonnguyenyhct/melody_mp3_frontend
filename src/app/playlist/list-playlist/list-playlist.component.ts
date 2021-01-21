import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../model/playlist';
import {PlaylistService} from '../../service/playlist/playlist.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.css']
})
export class ListPlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  currentUser: any;

  constructor(private playlistService: PlaylistService, private authService : AuthService) {
    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
    });
  }

  ngOnInit(): void {
    this.getAllPlayList();
  }

  getAllPlayList(){
    this.playlistService.getAllPlayList(this.currentUser.username).subscribe(result => {
      this.playlists = result;
    }, error => console.log(error));
  }
}
