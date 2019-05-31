import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {Transaction} from './transaction.model'
import { Injectable } from '@angular/core';

import { TransactionsService } from './transactions.service';

// interface Transaction {
//   id: number;
//   name: string;
//   status: string;
// }

@Injectable()
export class TransactionResolver implements Resolve<Transaction> {
  constructor(private transactionsService: TransactionsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Transaction> | Promise<Transaction> | Transaction {
    return this.transactionsService.getTransaction(+route.params['id']);
  }
}
