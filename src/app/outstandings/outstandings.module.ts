import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutstandingsComponent } from './outstandings.component';
import { OutstandingsListComponent } from './outstandings-list/outstandings-list.component';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { OutstandingsRoutingModule } from './outstandings-routing.module';

@NgModule({
    declarations:[
        OutstandingsComponent,
        OutstandingsListComponent,
        OutstandingComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OutstandingsRoutingModule
    ]
})
export class OutstandingsModule {}