import { Component, OnInit, OnDestroy } from '@angular/core';
import {User} from './user.model'
import {UsersService} from './users.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
      users:User[];
      subscription:Subscription
      
      constructor(private userService:UsersService) { }

      ngOnInit() {
         this.subscription = this.userService.userChanges.subscribe((users:User[])=>{
                  if(users){
                    this.users = users
                  }
         })

         this.users = this.userService.getUsers()
       
                
              
      }

      ngOnDestroy(){
        this.subscription.unsubscribe()
      }
      

}
