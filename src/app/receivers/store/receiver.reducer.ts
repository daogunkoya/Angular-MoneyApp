import { Receiver } from '../receiver.model';
import * as  ReceiverActions  from './receiver.actions';

export interface State {
    receiverList:Receiver[],
    receiverEdited:Receiver,
    receiverEditedIndex:number
}

export const initialState = {
    receiverList: [
        new Receiver(1,'Thomas','Gofe',1, 2,'0987678','Zenith',
            'bank','passport','9767890987','12/02/2014'),
        new Receiver(2,'Felix','Roke',1, 2,'0987678','Zenith',
            'bank','passport','9767890987','12/02/2016'),
        
         new Receiver(3,'Herma','Lo',1, 2,'0987678','Zenith',
            'bank','passport','9767890987','9/11/2016'),
         new Receiver(4,'dema','aswa',1, 2,'0987678','Zenith',
            'bank','passport','9767890987','12/12/2015'),
             
        ],
    receiverEdited:null,
    receiverEditedIndex:null

}
export function receiverReducer(state = initialState, action:ReceiverActions.ReceiverActions){
       
    switch(action.type){
            case ReceiverActions.ADD_RECEIVERS:
            console.log('am here')
                return {...state,
                    receiverList:[...state.receiverList,...action.payload]
                        }
             case ReceiverActions.ADD_RECEIVER:
                        return {...state,
                                receivers:[...state.receiverList,action.payload]
                                }
             case ReceiverActions.UPDATE_RECEIVER:
                            let receiversList = state.receiverList
                            const receiver = receiversList[action.payload['index']]
                            const updatedReceivers = [...state.receiverList,receiver]
                                return {...state,
                                        receivers:updatedReceivers
                                    }
            default:
                return state
        }
   
}