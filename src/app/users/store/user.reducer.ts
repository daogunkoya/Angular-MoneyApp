import  * as UserActions  from './user.actions';
import { User } from '../user.model';

export interface State {
    usersList:User[],
    fetching:boolean
}

const initialState = {
    usersList:[],
    fetching:true

}
export function userReduer(state = initialState,action:UserActions.UserActions){
    switch(action.type){
            case UserActions.SET_USERS:
                    return  {
                        ...state,
                        usersList:action.payload

                    }
            case UserActions.FETCH_USERS:{
                        return  {
                            ...state,
                            fetching:true
                          }
                    }
            
            
            default:
            return state;
    }
    
}