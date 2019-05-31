import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommissionsComponent } from './commissions.component';
import { CommissionComponent } from './commission/commission.component';
import { CommissionResolver } from './commission-resolver.service';
const commissionsRoutes:Routes = [
    {path:'commissions', component:CommissionsComponent,
     children :[
        {path:'create', component:CommissionComponent},
        {path:':id/edit', component: CommissionComponent,resolve:{commission:CommissionResolver}},
      ]}
]
@NgModule({
    imports:[
        RouterModule.forChild(commissionsRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class CommissionRoutingModule{}