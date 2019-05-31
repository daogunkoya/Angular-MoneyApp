import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CurrenciesComponent } from './currencies.component';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
    declarations:[
        CurrenciesComponent,
        CurrenciesListComponent,
        CurrencyComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CurrenciesRoutingModule
    ]
})
export class CurrenciesModule {}