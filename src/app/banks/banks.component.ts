import { Component, OnInit, OnDestroy } from '@angular/core';
import {BanksService} from './banks.service'
import {Bank} from './bank.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit,OnDestroy {
banks: Bank []
subscription:Subscription
  constructor(private banksService:BanksService) { }

  ngOnInit() {
    this.subscription = this.banksService.bankChange
                      .subscribe((banks:Bank[])=>{
                          this.banks = banks
                      })
     this.banks = this.banksService.getBanks();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe
  }

}
