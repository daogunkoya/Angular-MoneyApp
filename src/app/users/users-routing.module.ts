import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

const usersRouting:Routes = [
    {path:'users', component: UsersComponent,children:[
        {path:'create', component: UserComponent},
        {path:':id', component: UsersComponent},
        {path:':id/edit', component: UserComponent}
      ]}
]
@NgModule({
    imports:[
        RouterModule.forChild(usersRouting)
    ],
    exports:[
            RouterModule
    ]
})
export class UsersRoutingModule {}