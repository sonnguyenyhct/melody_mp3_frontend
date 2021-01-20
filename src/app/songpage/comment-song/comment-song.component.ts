import { Component, OnInit } from '@angular/core';
import {CommentSongService} from '../../service/comment-song/comment-song.service';
import {ActivatedRoute} from '@angular/router';
import {CommentSong} from '../../model/comment-song';
import {userdetail} from '../../model/userdetail';
import {AuthService} from '../../service/auth/auth.service';
import {UserdetailService} from '../../service/userdetail/userdetail.service';

@Component({
  selector: 'app-comment-song',
  templateUrl: './comment-song.component.html',
  styleUrls: ['./comment-song.component.css']
})
export class CommentSongComponent implements OnInit {

  idSong : number = -1;
  listCommentSong : CommentSong[] = [];
  currentUser : any;
  userDetail : userdetail = {};
  avatar : any;


  constructor(private userDetailService : UserdetailService,private commentSongService : CommentSongService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    activatedRoute.paramMap.subscribe(async paramMap => {
      this.idSong = +paramMap.get('id');
      console.log(this.idSong)
      await this.commentSongService.getListCommentSongBySongId(this.idSong).subscribe( list => {
        this.listCommentSong = list;
        console.log(this.listCommentSong.length)
      });
    })
  }

  ngOnInit(): void {
    this.authService.currentUserSubject.subscribe(async value => {
      this.currentUser = value;
     await this.userDetailService.getUserDetailByUserName(this.currentUser.username).subscribe(value1 => {
        this.userDetail = value1;
        this.avatar = this.userDetail.avatar;
      })
    })
  }

}
