import {Currency} from './currency.model'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpFactory } from '@angular/http/src/http_module';
import { uri } from '../utility.service';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';
@Injectable()
export class CurrenciesService{
    currenciesChanged = new Subject<Currency[]>()
    currencies:Currency [] = [];

    constructor(private http:HttpClient){
        this.fetchCurrencies()
    }
    fetchCurrencies(){
            this.http.get<Currency[]>(uri+'currencies.json')
                .subscribe((currencies:Currency[])=>{
                    this.currencies  = currencies
                    let active = currencies.filter(currency=>currency.status===1)
                        this.currenciesChanged.next(active)
                })
    }

    storeCurrencies(){
        this.http.put<Currency[]>(uri+'currencies.json',this.getCurrencies())
            .subscribe((currencies:Currency[])=>{
                this.currencies  = currencies
                let active = currencies.filter(currency=>currency.status===1)
                    this.currenciesChanged.next(active)
            })
}


    addCurrency(currency:Currency){
        this.currencies.slice().push(currency)
        return  this.storeCurrencies()
    }
    updateCurrency(index,newCurrency){
        let currency = this.currencies.slice().find((i,currency)=>index===1)
        let updated = {currency,...newCurrency}
        
        this.currencies[index] = updated
        this.currenciesChanged.next(this.currencies)
        this.storeCurrencies()
    }
    getCurrencies(){
        return this.currencies.slice();
    }
    deleteCurrency(index){
        let currencies = this.currencies.splice(index,1)
        this.currenciesChanged.next(currencies)
        return this.storeCurrencies()
    }
    getAll(){
        return this.currencies.slice();
    }

}