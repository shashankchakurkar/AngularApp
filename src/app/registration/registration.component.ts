import { Component, OnInit } from '@angular/core';
import { User } from '../Entity/user.component'
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model = new User('','','','');
  submitted = false;
  constructor(private fBuilder:FormBuilder) { 
  }

  
  ngOnInit() {
  }

  onSubmit(){
      if(this.model.password!=this.model.confirmPass){
        alert('password is not matching ');
      }
    console.log('name ',this.model.name,'email',this.model.email);
    console.log('submit called ');
  }

  onCancel(){
   console.log('reset form ');
   this.model.name='';
   this.model.email='';
   this.model.password='';
   this.model.confirmPass='';

  }





 

}
