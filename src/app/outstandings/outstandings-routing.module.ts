import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutstandingsComponent } from './outstandings.component';
const outstandingRouting:Routes = [
    {path:'outstandings', component: OutstandingsComponent}
]
@NgModule({
    
    imports:[
            RouterModule.forChild(outstandingRouting)
    ],
    exports:[
            RouterModule
    ]
})
export class OutstandingsRoutingModule {}