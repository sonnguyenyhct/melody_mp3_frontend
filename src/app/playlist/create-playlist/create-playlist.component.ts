import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../model/playlist';
import {PlaylistService} from '../../service/playlist/playlist.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  playlist: Playlist = {};

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createPlayList(){
    this.playlistService.createNewPlayList(this.playlist).subscribe(() => {
      console.log('Successfully');
    }, () => {
      console.log('Error');
    });
  }

}
