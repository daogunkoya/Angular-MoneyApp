import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendersComponent } from './senders.component';
import { SenderComponent } from './sender/sender.component';

const senderRouting:Routes = [
    {path:'senders', component: SendersComponent,
    children: [
      {path:'create', component: SenderComponent},
      {path:':id', component: SendersComponent},
      {path:':id/edit', component: SenderComponent}
    ]},
]
@NgModule({
imports:[
    RouterModule.forChild(senderRouting)
],
exports:[RouterModule]
})
export class SendersRoutingModules {}