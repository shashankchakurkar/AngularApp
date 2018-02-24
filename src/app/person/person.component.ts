
import { Component, OnInit, Pipe } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
   doctors = [];
  constructor(http : Http) {

    http.get('https://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.doctors.push(data);

        });

   }

  ngOnInit() {
  }

}
