import { Component, OnInit } from '@angular/core';
import {Transaction} from '../transaction.model'
import {TransactionsService} from '../transactions.service'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import * as TransactionActions from '../store/transaction.actions'

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {
    transactions:Transaction [];
      trans_fields:string[];
      actions:boolean = false
      transactionsListState:Observable<{transactionList:any}>

  constructor(private transactionsService:TransactionsService,
      private store:Store<fromApp.AppState>) { }

  ngOnInit() {
    //this.transactions = this.transactionsService.getTransactions();
    this.store.dispatch(new TransactionActions.FetchTransactions())
    this.transactionsListState = this.store.select('transactions')
    
   
  }

}
