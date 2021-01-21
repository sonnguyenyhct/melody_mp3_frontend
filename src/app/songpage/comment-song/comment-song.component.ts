import { Component, OnInit } from '@angular/core';
import {CommentSongService} from '../../service/comment-song/comment-song.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  userDetailOldComment : userdetail | undefined;
  userDetails : userdetail[] = [];
  avatar : any;
  commentSong : CommentSong = {};

  constructor(private route: Router, private userDetailService : UserdetailService,private commentSongService : CommentSongService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    activatedRoute.paramMap.subscribe( async paramMap => {
      // @ts-ignore
      this.idSong = +paramMap.get('id');
      await this.commentSongService.getListCommentSongBySongId(this.idSong).subscribe( async (list: CommentSong[]) => {
        this.listCommentSong = list;
        for (let i = 0; i < this.listCommentSong.length; i++) {
          // @ts-ignore
          this.userDetailOldComment = await this.getListUserDetailByUsername(this.listCommentSong[i].user.username);
          this.userDetails.push(this.userDetailOldComment);
          console.log(this.userDetailOldComment.avatar)
        }
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

  getListUserDetailByUsername(username: any){
      return this.userDetailService.getUserDetailByUserName(username).toPromise();
  }

  postComment(){
     this.commentSongService.postCommentSong(this.idSong,this.currentUser.username,this.commentSong).subscribe(async () =>{
       console.log("OK")
       await this.route.navigate(['/']);
       await this.route.navigate(['/comment/' + this.idSong]);
     })
  }

}
