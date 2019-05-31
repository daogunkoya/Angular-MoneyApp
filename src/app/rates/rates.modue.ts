import { NgModule } from '@angular/core';
import { RatesComponent } from './rates.component';
import { RatesListComponent } from './rates-list/rates-list.component';
import { RateComponent } from './rate/rate.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatesRoutingModules } from './rates-routing.module';

@NgModule({
    declarations:[
        RatesComponent,
        RatesListComponent,
        RateComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RatesRoutingModules
    ]
})
export class RatesModule {}