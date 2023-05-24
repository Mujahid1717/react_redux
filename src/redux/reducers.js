import {INCREMENT,DECREMENT} from "../../src/redux/types";


 let init_state ={
    num:0
 }
export function counterReducer (state = init_state,action){
   
    switch (action.type) {
        case INCREMENT:
            {
            let data = action.payload
            return {...state , num: data + 1}
            }

        case DECREMENT:
            {
            let data = action.payload
            return {...state , num: data - 1}
            }
        default:
            return{...state}
    }
}