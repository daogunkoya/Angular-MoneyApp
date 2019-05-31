import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates.component';
import { RateComponent } from './rate/rate.component';
import { RateResolver } from './rate-resolver.service';
const ratesRouting:Routes=[
    {path:'rates', component: RatesComponent ,
    children:[
       {path:'create', component:RateComponent},
       {path:':id/edit', component:RateComponent,resolve:{rate:RateResolver}}
     ]},
]
@NgModule({
    imports:[
      RouterModule.forChild(ratesRouting)
    ],
    exports:[
        RouterModule
    ]
})
export class RatesRoutingModules {}