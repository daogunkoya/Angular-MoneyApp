import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Bank} from '../bank.model'
import {BanksService} from '../banks.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.css']
})
export class BanksListComponent implements OnInit {
@Input('banks') banks:Bank [];
    private subscription:Subscription
  constructor(private bankService:BanksService) { }

  ngOnInit() {

    //this.banks =  this.bankService.getBanks()
  }

  deleteBank(id:number){
    console.log('id=',id)
    this.bankService.deleteBank(id)
    
    }

    
   
    
  

}
