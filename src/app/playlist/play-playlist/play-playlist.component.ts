import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {ActivatedRoute} from "@angular/router";
import {Track} from "ngx-audio-player";
import {Playlist} from "../../model/playlist";

@Component({
  selector: 'app-play-playlist',
  templateUrl: './play-playlist.component.html',
  styleUrls: ['./play-playlist.component.css']
})
export class PlayPlaylistComponent implements OnInit {
  playlist: Playlist = {};
  idPlaylist: number | undefined;
  trackPlaylists: Track[] = [];
  topPlaylists: Playlist[] = [];


  constructor(private playlistService: PlaylistService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.idPlaylist = +paramMap.get('id');
      this.getTrackPlaylist(this.idPlaylist);
      this.getPlaylistById(this.idPlaylist);
    })
    this.playlistService.getPlayListMostLike().subscribe(value => {
      this.topPlaylists = value;
    })
  }

  ngOnInit(): void {
  }

  getTrackPlaylist(idPlaylist: number){
    this.playlistService.getTrackPlaylist(idPlaylist).subscribe(value => {
      this.trackPlaylists = value;
    })
  }

  getPlaylistById(idPlaylist: number){
    this.playlistService.getPlayListById(idPlaylist).subscribe(value => {
      this.playlist = value;
    })
  }

}
