import {Component, OnInit} from '@angular/core';
import {SongService} from '../../service/song/song.service';
import {Track} from 'ngx-audio-player';
import {singer} from '../../model/singer';
import {song} from '../../model/song';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaylistService} from "../../service/playlist/playlist.service";
import {Playlist} from "../../model/playlist";
import {AuthService} from "../../service/auth/auth.service";

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
  idSong: any;
  idPlaylist: any;
  listPlaylist: Playlist[] = [];
  currentUser: any;

  constructor(private songService: SongService,
              private activatedRoute: ActivatedRoute,
              private playListService: PlaylistService,
              private authService: AuthService) {
    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
      this.getAllPlaylistByUsername(this.currentUser.username);
    });
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // @ts-ignore
      this.idSong = +paramMap.get('id');
      this.getTrackById(this.idSong);
    });
  }

  ngOnInit(): void {
    this.getList10SongInTopViews();
  }

  // tslint:disable-next-line:typedef
  getTrackById(id: number) {
    this.songService.getSongById(id).subscribe(value => {
      this.singleTrack[0].title = value.name + '';
      this.singleTrack[0].link = value.file + '';
      this.singleTrack[0].title = <string> value.name;
      this.singleTrack[0].link = <string> value.file;
      // @ts-ignore
      this.singers = value.singers;
      this.song = value;
      this.songService.addView(this.song).subscribe(value1 => {
        this.song = value1;
      });
    });
  }

  // tslint:disable-next-line:typedef
  getList10SongInTopViews() {
    this.songService.get10SongInTopViews().subscribe(value => {
      this.listTop10Songs = value;
    });
  }

  getAllPlaylistByUsername(username: string) {
    this.playListService.getPlaylistByUsername(username).subscribe(value => {
      this.listPlaylist = value;
    });
  }

  addSongToPlayList(idSong: any, idPlaylist: any) {
    this.playListService.addSongToPlaylist(idSong, idPlaylist).subscribe(value => {
      if (value == null) {
        alert('Đã tồn tại bài hát trong playlist');
      } else {
        alert('Đã thêm bài hát vào playlist');
        this.getAllPlaylistByUsername(this.currentUser.username);
      }
    });
  }
}
