import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../model/playlist';
import {PlaylistService} from '../../service/playlist/playlist.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-playlist',
  templateUrl: './update-playlist.component.html',
  styleUrls: ['./update-playlist.component.css']
})
export class UpdatePlaylistComponent implements OnInit {
  playlist: Playlist = {};
  id: number | undefined;

  constructor(private playlistService: PlaylistService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getPlayList(this.id);
    });
  }

  ngOnInit(): void {
  }

  getPlayList(id: number){
    this.playlistService.getPlayListById(id).subscribe(value => {
      this.playlist = value;
    });
  }
  updatePlayList(id: number) {
    this.playlistService.updatePlayList(id, this.playlist).subscribe(() => {
      console.log('Successfully');
    }, () => {
      console.log('Error');
    });
  }
}
