
import * as senderActions from './sender.actions'
import { Sender } from '../sender.model';


export interface State{
    senderList:Sender[],
    fetching:boolean
}
const intialState = {
    senderList: [],
    fetching:false
}

export function  senderReducer(state = intialState,action:senderActions.SenderActions){
    switch(action.type){
        case senderActions.FETCH_SENDERS:
            return {
                    ...state,
                    fetching:true
            }
    case senderActions.ADD_SENDERS:
    
            return {
                    ...state,
                    senderList:[...state.senderList,...action.payload]
            }
    default:
            return state
    }
    
}