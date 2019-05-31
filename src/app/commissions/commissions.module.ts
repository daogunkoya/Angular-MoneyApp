import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommissionsComponent } from './commissions.component';
import { CommissionsListComponent } from './commissions-list/commissions-list.component';
import { CommissionComponent } from './commission/commission.component';
import { CommissionRoutingModule } from './commissions-routing.module';

@NgModule({
    declarations:[
        CommissionsComponent,
        CommissionsListComponent,
        CommissionComponent
    ],
    imports:[
       CommonModule,
       FormsModule,
       ReactiveFormsModule,
       CommissionRoutingModule
    ]
})
export class CommissionsModule{}