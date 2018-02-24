import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  contact: number;
  public searchString: string;

  names: any[];
  isAvailable: boolean = false;
  constructor() {

    this.firstName = "Ajinkya";
    this.lastName = "Chanshetty";
    this.email = "aajinkya@hotmail.com";
    this.contact = 9999;

    this.names = [

      {
        "firstName": "ajinkya",
        "lastName": "Chanshetty",
        "email": "aajinkya@hotmail.com",
        "contact": 9999
      },
      {
        "firstName": "Ned",
        "lastName": "Stark",
        "email": "Ned@hotmail.com",
        "contact": 555
      },
      {
        "firstName": "John",
        "lastName": "Snow",
        "email": "john@hotmail.com",
        "contact": 777
      },
      {
        "firstName": "Arya",
        "lastName": "Stark",
        "email": "arya@hotmail.com",
        "contact": 99997
      },
      {
        "firstName": "Sansa",
        "lastName": "Stark",
        "email": "sansa@hotmail.com",
        "contact": 999988
      },
      {
        "firstName": "Bran",
        "lastName": "Stark",
        "email": "bran@hotmail.com",
        "contact": 5555
      }


    ]



  }

  ngOnInit() {
  }

}
