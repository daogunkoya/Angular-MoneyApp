import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit,OnChanges {
  @ViewChild('ngForm')ngForm:NgForm
  error:string
  token:any
  constructor(private authService:AuthService,private router:Router) { }

    ngOnChanges(){
      this.token =this.authService.getToken()
      console.log('token',this.token)
    }

    ngOnInit() {
        if(this.token){
          console.log('token',this.token)          
        }
    
    
  }

  onSignin(form:NgForm){
    const response = this.authService
                          .signIn(form.value.email,form.value.password)
                          console.log(this.authService.getToken())
          response.catch(err=>this.error=err.message)
          form.reset()
        
         

  }

}
