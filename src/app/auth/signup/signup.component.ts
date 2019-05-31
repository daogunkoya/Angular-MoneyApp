import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('ngForm')ngForm:NgForm
  error:string

  constructor(private authService:AuthService) { }

  ngOnInit() {
    //this.authService.signUp('danielbillion@yahoo.com','mostbeautiful')
  }

  onSignup(form:NgForm){
    const response = this.authService.signUp(form.value.email,form.value.password)
      console.log('signup',response)
    response.catch(err=>this.error=err.message)
    form.reset()
  }

}
