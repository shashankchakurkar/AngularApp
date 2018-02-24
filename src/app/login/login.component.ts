import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    name:string;
    password:string;
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }

  onLogin(){
    console.log('name  ',this.name ,'password ',this.password);
     if(this.name == 'admin' && this.password=='admin'){
      console.log('name is ',this.name ,'password ',this.password);
      this.userService.setUserLoggedIn();
           this.router.navigate(['person']);
     }

  }

}
