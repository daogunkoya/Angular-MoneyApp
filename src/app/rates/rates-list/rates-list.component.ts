import { Component, OnInit, OnDestroy } from '@angular/core';
import {Rate} from '../rate.model'
import {RatesService} from '../rates.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rates-list',
  templateUrl: './rates-list.component.html',
  styleUrls: ['./rates-list.component.css']
})
export class RatesListComponent implements OnInit,OnDestroy {
  rates:Rate [];
  ratesSubscription:Subscription
  constructor(private rateService:RatesService) { }

  ngOnInit() {
    this.ratesSubscription = this.rateService.rateChange
        .subscribe((rates:Rate[])=>{
          if(rates)
              {
                this.rates = rates}
               
        })
        this.rates = this.rateService.getRates()
  }

  deleteRate(index){
    
  }

  ngOnDestroy(){
    return this.ratesSubscription.unsubscribe()
  }

}
