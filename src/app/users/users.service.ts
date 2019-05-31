import {User} from './user.model'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {map} from 'rxjs/operators'
import {uri} from '../utility.service'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable()
export class UsersService{
    private users:User [] = [];
    userChanges = new Subject <User []> ()

    constructor(private http:HttpClient){
            this.fetchUsers()
    }

    getUsers(){
       return this.users.slice()
       
    }
     fetchUsers(){
       this.http.get<User[]>(uri+'users.json')
       .subscribe((users:User[])=>{
                this.users = users
                this.userChanges.next(users)
       })
   
                
    }

    storeUsers(){
        this.http.post<User[]>(uri+'users.json',this.getUsers())
        .subscribe((users:User[])=>{
        })
    }
    addUser(user:User){
         this.users.push(user)
         this.userChanges.next(this.users.slice())
         return this.storeUsers()
    }
    updateUser(index,user){
        let oldUser = this.users.slice()[index]
        let updated = {oldUser,...user}
        this.users[index] = updated
        
        this.userChanges.next(this.users.slice())
        this.storeUsers()


    }
    deleteUser(index){
        this.users.splice(index,1)
        this.userChanges.next(this.users.slice())
        this.storeUsers();
    }
}