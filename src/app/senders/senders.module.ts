import { NgModule } from '@angular/core';

import { SendersRoutingModules } from './senders-routing.module';
import { SendersComponent } from './senders.component';
import { SendersListComponent } from './senders-list/senders-list.component';
import { SenderComponent } from './sender/sender.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        SendersComponent,
        SendersListComponent,
        SenderComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SendersRoutingModules,
        SharedModule
    ],
    exports:[
        SendersComponent,
        SendersListComponent,
        SenderComponent
    ]
})
export class SendersModule {}