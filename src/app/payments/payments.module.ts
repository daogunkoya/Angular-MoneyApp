import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsRoutingModule } from './payments-routing.module';

@NgModule({
    declarations:[
        PaymentsComponent,
        PaymentsListComponent,
        PaymentComponent
    ],
    imports:[
PaymentsRoutingModule
    ]
})
export class PaymentsModule {}