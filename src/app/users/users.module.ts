import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import {UsersRoutingModule} from './users-routing.module'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
       UsersComponent,
       UsersListComponent,
       UserComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        UsersRoutingModule
    ],
    exports:[
        UsersComponent,
       UsersListComponent,
       UserComponent 
    ]
})
export class UsersModule {}