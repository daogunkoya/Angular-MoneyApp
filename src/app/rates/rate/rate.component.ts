import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Data } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users/users.service';
import { User } from 'src/app/users/user.model';
import { Currency } from 'src/app/currencies/currency.model';
import { Subscription } from 'rxjs';
import { CurrenciesService } from 'src/app/currencies/currencies.service';
import { RatesService } from '../rates.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
    users:User[]
    currencies:Currency[]
    userSubscription:Subscription
    currenciesSubscription:Subscription
    user_id:number
    currency_id:number
  
    rateForm:FormGroup
    // @Input('users')users:User[]
    // @Input('currencies')currencies:Currency[]
  constructor(private route:ActivatedRoute,private usersService:UsersService,
              private currenciesService:CurrenciesService,
              private ratesService:RatesService) {
      
               }

  ngOnInit() {
    
      this.onLoad()
      console.log('users',this.users)

    this.rateForm = new FormGroup({
      'user_id': new FormControl(['jpe','ana'],[Validators.required]),
      'currency_id': new FormControl(null,[Validators.required]),
      'rate':new FormControl(null,[Validators.required]),
      'bou_rate':new FormControl('Bou Rate', [Validators.required]),
      'sold_rate':new FormControl('Sold Rate', [Validators.required]),
    })
    
    if(this.route.snapshot.params['id']){
        this.route.data.subscribe((data:Data) =>{
          console.log('data=',data)
          this.rateForm.patchValue({
            'rate':data.rate.rate,
            'bou_rate':data.rate.bou_rate,
            'sold_rate':data.rate.sold_rate,
            'user_id':data.rate.user_id,
            'currency_id':data.rate.currency_id
          })
      })
    }
  }

  onLoad(){
      this.userSubscription = this.usersService.userChanges
      .subscribe((users:User[])=>{
        if(users){
          this.users = users
        }      
      })

      this.currenciesSubscription = 
      this.currenciesService.currenciesChanged
        .subscribe((currencies:Currency[])=>{
          if(currencies){
            console.log('currencies',currencies)
            this.currencies= currencies
          }
            
            })
  }
  onSubmit(){
    this.rateForm['created_at'] = new Date()
    console.log('rateForm', this.rateForm.value)

    this.ratesService.addRate(this.rateForm.value)
    this.rateForm.reset()
    
  }

}
