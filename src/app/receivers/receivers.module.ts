import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceiversComponent } from './receivers.component';
import { ReceiversListComponent } from './receivers-list/receivers-list.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { ReceiversRoutingModule } from './receivers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        ReceiversComponent,
        ReceiversListComponent,
        ReceiverComponent,
      
    ],
    exports:[
        ReceiversComponent,
        ReceiversListComponent,
        ReceiverComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ReceiversRoutingModule,
        SharedModule
    ]
})
export class ReceiversModules {}