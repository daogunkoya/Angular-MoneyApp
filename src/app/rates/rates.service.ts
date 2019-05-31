import {Rate} from './rate.model'
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { uri } from '../utility.service';

@Injectable()
export class RatesService{
    rateChange = new EventEmitter<Rate[]> ();
    
    constructor(private http:HttpClient){
        this.fetchRates()
    }
    rates:Rate [] = [];

    fetchRates(){
        this.http.get<Rate[]>(uri+'rates.json')
            .subscribe((rates:Rate[])=>{
                    this.rates = rates
                    this.rateChange.emit(rates)
            })
    }
    storeRates(){
        this.http.put<Rate[]>(uri+'Rate.json',this.getRates())
            .subscribe((rates:Rate[])=>{
                    this.rates = rates
                    this.rateChange.emit(rates)
            })
            
    }

    

    getRates(){
        return this.rates.slice();
    }

    getRate(id){
        return this.rates.find(bank => bank.id ===id );
       
    }

    addRate(newRate:Rate){
       const rates = this.rates.slice()
       newRate['id'] = rates.length + 1
       rates.push(newRate)
       
       this.rateChange.emit(rates)
        this.rates = rates.slice()
        this.storeRates()
       
    }
    updateRate(id,bank:{name:string,status:string}){
        const findBank = this.rates.find(b=>b.id === id)
        if(findBank){
            // findBank.name = bank.name;
            // findBank.status  = bank.status
        }
        console.log(this.rates)
    }

    deleteBank(id){
        return this.rates.splice(id,1 );
       
    }
}

