import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksComponent } from './banks.component';
import { BankComponent } from './bank/bank.component';
import { BankResolver } from './bank-resolver.service';

const banksRoutes:Routes = [
    {path:'', component: BanksComponent,
     children:[
        {path:'create', component:BankComponent},
        {path:':id/edit', component:BankComponent,resolve:{bank:BankResolver}}
      ]}
]
@NgModule({
    imports:[
        RouterModule.forChild(banksRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class BanksRoutingModule{}