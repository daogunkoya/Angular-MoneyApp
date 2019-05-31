import { Effect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import * as userActions from './user.actions'
import { switchMap,map } from 'rxjs/operators';
import { User } from '../user.model';
import { uri } from 'src/app/utility.service';
import { UsersComponent } from '../users.component';
@Injectable()

export class UserEffects{
    @Effect()

    userFetch = this.action$.pipe(
        ofType(userActions.FETCH_USERS),
        switchMap((action:userActions.FetchUsers)=>{
            return this.httpClient.get<User[]>(uri+'users.json')
        }),
        map(users=>{
            console.log('users',users)
            return {
                type:userActions.SET_USERS,
                payload:users
            }
        }))
    constructor(private action$:Actions,private httpClient:HttpClient){}
}