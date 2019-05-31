import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app';
import  'firebase/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{
    token:string
    loggedIn:Boolean
    constructor(private router:Router){

    }
    isAuthenticated(){
        return this.token != null;
    }
    async signUp(email:string,password:string){
        let response = await firebase.auth()
                        .createUserWithEmailAndPassword(email,password)
        return response
      
    }

    async signIn(email:string,password:string){
        let response = await firebase.auth()
                        .signInWithEmailAndPassword(email,password)
            if(response){
                this.router.navigate(['/'])
            }
             return response
                    
    }

    signout(){
        this.token = null
         firebase.auth().signOut()
         return this.router.navigate(['signin'])
    }

    async getToken(){
        let response = await firebase.auth().currentUser.getIdToken()
            this.token = response
              return response
       
    }

    
    
    
}