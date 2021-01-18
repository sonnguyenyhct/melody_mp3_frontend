import { Component, OnInit } from '@angular/core';
import {song} from '../../model/song';
import {SongService} from '../../service/song/song.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-listsong',
  templateUrl: './listsong.component.html',
  styleUrls: ['./listsong.component.css']
})
export class ListsongComponent implements OnInit {
  listSong : song[] = [];
  currentUser : any;
  constructor(private songService : SongService, private authService : AuthService) {
    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
    })

  }

  ngOnInit(): void {
     this.songService.getAllSong(this.currentUser.username).subscribe( list => {
       this.listSong = list;
     });
  }

}
