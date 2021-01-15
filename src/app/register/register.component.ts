import { Component, OnInit } from '@angular/core';
import {Userdetail} from '../model/userdetail';
import {UserdetailService} from '../service/userdetail/userdetail.service';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: Customer ={};

  constructor(private userdetailservice: UserdetailService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  register(){
     this.userdetailservice.createNewCustomer(this.customer).subscribe(() =>{
       this.router.navigate(["/login"]);
     })
  }


}
