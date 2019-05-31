import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments.component';

const paymentsRouting:Routes = [
    {path:'payments', component: PaymentsComponent}
]
@NgModule({
    imports:[
        RouterModule.forChild(paymentsRouting)
    ],
    exports:[  
        RouterModule 
    ]
})
export class PaymentsRoutingModule {}