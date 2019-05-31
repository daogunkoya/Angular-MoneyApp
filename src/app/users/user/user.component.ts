import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {Response} from '@angular/http'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit() {
  }

  onSubmit(){
    // return this.usersService.addUser()
    //  .subscribe((response:Response)=>{
    //        console.log(response)
    //  });
 }

}
