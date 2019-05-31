import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionResolver } from './transaction-resolver.service';

const transactionsRouting:Routes = [
    {path:'transactions', component: TransactionsComponent,
    children:[
        {path:':id/edit', component:TransactionComponent, resolve:TransactionResolver},
        {path:'create', component:TransactionComponent, resolve:TransactionResolver}
        ]
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(transactionsRouting)
    ],
    exports:[
        RouterModule
    ]
})
export class TransactionsRoutingModule {}