import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLogin = false;
  currentUser : any;

  constructor(private authService : AuthService, private route : Router) {
    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
      if(this.currentUser){
        this.isUserLogin = true;
      }
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }
  showProfile(){
    this.route.navigate(["/profile/" + this.currentUser.username]);
  }

}
