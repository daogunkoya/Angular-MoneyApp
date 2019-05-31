import { Injectable } from '@angular/core';
import * as ReceiverActions from './receiver.actions'
import { Actions, Effect, ofType } from '@ngrx/effects';
import {switchMap, withLatestFrom, map} from 'rxjs/operators';
import { HttpRequest, HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import { Receiver } from '../receiver.model';
import { uri } from 'src/app/utility.service';
import { receiverReducer } from './receiver.reducer';


@Injectable()
export class ReceiverEffects {
  @Effect()
  recipeFetch = this.actions$
  .pipe(ofType(ReceiverActions.Fetch_Receivers),
        switchMap((action:ReceiverActions.AddReceivers)=>{
                return this.httpClient.get<Receiver[]>(uri+'receivers.json')
        }),
        map(receivers=>
            {
                console.log('receivers=',receivers)
               return {
                    type:ReceiverActions.ADD_RECEIVERS,
                    payload:receivers}   
            })
        )
    
    constructor(private actions$: Actions,
                    private httpClient:HttpClient){}

}


