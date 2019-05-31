import { NgModule } from '@angular/core';
import { CurrenciesComponent } from './currencies.component';
import { CurrencyComponent } from './currency/currency.component';
import { Routes, RouterModule } from '@angular/router';

const currenciesRouting:Routes = [
    {path:'', component: CurrenciesComponent, children:[
        {path:'create', component: CurrencyComponent},
        {path:':id', component: CurrencyComponent},
      ]}
      
]

@NgModule({
    imports:[
        RouterModule.forChild(currenciesRouting)
    ],
    exports:[
            RouterModule
    ]
})
export class CurrenciesRoutingModule {}