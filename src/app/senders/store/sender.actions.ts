import { Action } from '@ngrx/store';
import { Sender } from '../sender.model';

export const FETCH_SENDERS = 'FETCH_SENDERS'
export const ADD_SENDERS = 'ADD_SENDERS'

export class FetchSenders implements Action{
    readonly type = FETCH_SENDERS
}

export class AddSenders implements Action{
    readonly type = ADD_SENDERS

    constructor(public payload:Sender[]){

    }
}

export type SenderActions = FetchSenders | AddSenders