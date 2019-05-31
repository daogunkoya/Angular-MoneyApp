import * as fromReceivers from '../receivers/store/receiver.reducer'
import * as fromTransactions from '../transactions/store/transaction.reducer'
import * as fromUsers from '../users/store/user.reducer'
import* as fromSenders from '../senders/store/sender.reducer'
import { ActionReducerMap} from '@ngrx/store';



export interface AppState{
   receivers:fromReceivers.State,
   transactions:fromTransactions.State,
   users:fromUsers.State,
   senders:fromSenders.State
}

export const reducers:ActionReducerMap<AppState> = {
    users:fromUsers.userReduer,
    receivers:fromReceivers.receiverReducer,
    transactions:fromTransactions.transactionReducer,
    senders:fromSenders.senderReducer
}

