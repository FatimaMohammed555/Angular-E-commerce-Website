import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/Shared/icustomer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginFrm: FormGroup;
  registerUserData:ICustomer;

  constructor(private fb:FormBuilder , private userService: UserService , private router: Router) 
  {
    this.registerUserData = {Name:'' , Password:'' , ConfirmPassword:''}
   }

  ngOnInit(): void {
    
  }

   registerUser() {
    this.userService.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res);
        //localStorage.setItem('' , )
        this.router.navigateByUrl("/Home")
      },
      err => console.log(err)
    )      
  } 

}
