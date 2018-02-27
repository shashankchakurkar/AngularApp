import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {Http} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    name:string;
    password:string;
    user;
    users =[];
   url='http://localhost:5000/login/';
   testurl='http://localhost:5000/contact';

  constructor(private router:Router, private userService:UserService,
  private http:Http) { }

  ngOnInit() {
  }

  onLogin(){
    console.log('name  ',this.name ,'password ',this.password);
     console.log('url = ',this.url+this.name);
     //below code is not working need to debug
     this.http.get(this.url+this.name)
     .map(response=> response.json())
     .subscribe(results=>{ this.user=results });
     console.log('user ',this.user);
 


     this.http.get(this.url)
     .map(data => data.json())
     .subscribe(data => {
       this.users.push(data);
     });
     console.log('users= ',this.users); 
      if(this.users.length==1){
      var name = this.users[1].name;
      var pass = this.users[1].password;
      
     if(this.name == name && this.password==pass){
      console.log('name is ',name ,'password ',pass);
      this.userService.setUserLoggedIn();
           this.router.navigate(['person']);
     }
    }

  }

}
