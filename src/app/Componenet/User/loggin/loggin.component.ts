import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { ICustomer } from 'src/app/Shared/icustomer';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  loginFrm: FormGroup;
  logCust:ICustomer;
  
  constructor(private fb:FormBuilder , private userService: UserService ) 
  {
    this.logCust = {Name:'' , Password:'' }
   }

  ngOnInit(): void {
  }

  login(name:string , Password:string){

    this.userService.loginUser(name,Password).subscribe(
      (res:any)  => 
      {
        this.userService.Login(res.access_token);
        console.log("Authorized");
console.log(res.access_token);
        console.log(res);
        //console.log(res.access_token);
        //localStorage.setItem("acess_token" , res.access_token)
           localStorage.setItem('id',res.Id);
      },
      error =>{console.log(error)}
    );
    //alert("You logged in Now")
  }

  Logout(){
    this.userService.logoutUser();
  } 

}
