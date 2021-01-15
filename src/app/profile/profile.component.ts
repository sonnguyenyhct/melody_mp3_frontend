import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {Userdetail} from '../model/userdetail';
import {UserdetailService} from '../service/userdetail/userdetail.service';
import {ActivatedRoute} from '@angular/router';

// import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isUserLogin = false;
  currentUser : any;
  userDetail : Userdetail = {};
  username : any;

  constructor(private authService : AuthService, private userDetailService : UserdetailService,private activatedRoute: ActivatedRoute) {

    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
      if(this.currentUser){
        this.isUserLogin = true;
      }

    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.username = paramMap.get('username');
      this.userDetailService.getUserDetailByUserName(this.currentUser.username).subscribe(value1 => {
        this.userDetail = value1;
      })
    })
  }
}
