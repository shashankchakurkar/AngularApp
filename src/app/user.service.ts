import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
isUserLogIn:boolean;
userName:string;

  constructor() { 
    this.isUserLogIn=false;

  }

  setUserLoggedIn(){
    this.isUserLogIn=true;
  }


  getUserLoggedIn(){
     return this.isUserLogIn;
  }
}
