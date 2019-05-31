import {Action} from '@ngrx/store';
import { Receiver } from '../receiver.model';
export const ADD_RECEIVER = 'ADD_RECEIVER';
export const ADD_RECEIVERS = 'ADD_RECEIVERS';
export const UPDATE_RECEIVER = 'UPDATE_RECEIVER';
export const DELETE_RECEIVER = 'DELETE_RECEIVER';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';
export const Fetch_Receivers = 'Fetch_Receivers'

export class FetchReceivers implements Action{
    readonly type = Fetch_Receivers
}
export class AddReceivers implements Action{
    readonly type = ADD_RECEIVERS;

    constructor(public payload:Receiver[]){}
}

export class AddReceiver implements Action{
    readonly type = ADD_RECEIVER;

    constructor(public payload:Receiver){}
}

export class UpdateReceiver implements Action{
    readonly type = UPDATE_RECEIVER;

    constructor(public payload:{index:number,receiver:Receiver}){}
}

export class DeleteReceiver implements Action{
    readonly type = DELETE_RECEIVER; 
}

export class StartEdit implements Action{
    readonly type = START_EDIT;

    constructor(public payload:number){}
}

export class StopEdit implements Action{
    readonly type = STOP_EDIT
  
}

export type ReceiverActions = 
    FetchReceivers |
    AddReceivers |
    AddReceiver |
    UpdateReceiver |
    DeleteReceiver |
    StartEdit |
    StopEdit
