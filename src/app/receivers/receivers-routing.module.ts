import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiversComponent } from './receivers.component';
import { ReceiverComponent } from './receiver/receiver.component';

const receiversRouting:Routes = [
    { path: 'receivers',
            // canActivate: [AuthGuard],
            //canActivateChild: [AuthGuard],
        component: ReceiversComponent,
        children: [
            { path: 'create', component: ReceiverComponent/*, canDeactivate: [CanDeactivateGuard] */},
            { path: ':id', component: ReceiverComponent },
            { path: ':id/edit', component: ReceiverComponent/*, canDeactivate: [CanDeactivateGuard] */ }
    
] }
]
@NgModule({
    imports:[
        RouterModule.forChild(receiversRouting)
    ],
    exports:[
        RouterModule
    ]
})
export class ReceiversRoutingModule {}