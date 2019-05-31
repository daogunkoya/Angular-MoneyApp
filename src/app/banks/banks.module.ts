import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BanksComponent } from './banks.component';
import { BankComponent } from './bank/bank.component';
import { BanksRoutingModule } from './banks-routing.module';
import { BanksListComponent } from './banks-list/banks-list.component';

@NgModule({
   declarations:[
    BanksComponent,
    BanksListComponent,
    BankComponent
   ],
   imports:[
        CommonModule,
         FormsModule,
         ReactiveFormsModule,
        BanksRoutingModule,
     
]
})
export class BanksModule {}

