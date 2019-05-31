import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as senderActions from './sender.actions'
import { switchMap,map } from 'rxjs/operators';
import { uri } from 'src/app/utility.service';
import { Sender } from '../sender.model';

@Injectable()
export class SenderEffects{
    @Effect()
    senderEffect = this.actions$.pipe(
        ofType(senderActions.FETCH_SENDERS),
        switchMap((actions:senderActions.FetchSenders)=>{
                return this.httpClient.get<Sender[]>(uri+'senders.json')
        }),
        map(senders=>{
                console.log('senders',senders)
            return {
                type:senderActions.ADD_SENDERS,
                payload:senders
            }
        })
        
    )

    constructor(public actions$:Actions,public httpClient:HttpClient){

    }
}