import { NgModule } from '@angular/core';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { TransactionsComponent } from './transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        TransactionComponent,
        TransactionsListComponent,
        TransactionsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TransactionsRoutingModule
    ],
    exports:[
        TransactionComponent,
        TransactionsListComponent,
        TransactionsComponent
    ]
})
export class TransactionsModule {}