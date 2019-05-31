import * as  TransactionActions  from './transaction.actions';
import { Transaction } from '../transaction.model';

export interface State{
    transactionList:Transaction[],
    fetching:boolean,
    transactionEdited:any,
    transactionEditedIndex:number
}
export const initialState = {
    transactionList:[
        new Transaction(1,'Asdes','7656789','agent', 1, 2,
            2, 400,20, 10,340, 1,'commission',0,0,'All well',
          'pending','12/01/2019'),
        new Transaction(2,'uytyui','345','agent', 1, 2,
          2, 400,20, 10,340, 1,'commission',0,0,'All well',
        'pending','12/02/2019'),
        new Transaction(3,'dfsss','8789','agent', 1, 2,
        2, 400,20, 10,340, 1,'commission',0,0,'All well',
      'pending','12/03/2019'),
      new Transaction(4,'dfsss','8789','agent', 1, 2,
        2, 400,20, 10,340, 1,'commission',0,0,'All well',
      'pending','07/01/2019')
    ],
    fetching:false,
    transactionEdited:null,
    transactionEditedIndex:null

}
export function transactionReducer(state = initialState,action:TransactionActions.TransactionActions){
    switch(action.type){
        case TransactionActions.FETCH_TRANSACTIONS:
        return {
            ...state,
            fetching:true
        }
        case TransactionActions.SET_TRANSACTIONS:
        console.log('payload',action.payload)
        return {
            ...state,
            transactionList:[...action.payload]
        }
        default:
        return state
    }

       
}