import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as TransactionActions from './transaction.actions'
import { switchMap,map } from 'rxjs/operators';
import { Transaction } from '../transaction.model';
import { uri } from 'src/app/utility.service';


@Injectable()
export class TransactionEffect{
    @Effect()
    FetchTransactions = this.actions$
        .pipe(ofType(TransactionActions.FETCH_TRANSACTIONS),
        switchMap((action:TransactionActions.FetchTransactions)=>{
            return this.httpClient.get<Transaction[]>(uri+'transactions.json')
        }),
        map(transactions=>{
            console.log('transactions',transactions)
            return {
                type:TransactionActions.SET_TRANSACTIONS,
                payload:transactions
            }
        })
        )

    constructor(private actions$:Actions,private httpClient:HttpClient){}

}