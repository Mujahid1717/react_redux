import {INCREMENT,DECREMENT, CHANGE} from "../../src/redux/types";


 let init_state ={
    num:0,
    changeValue: '1'
 }
const  counterReducer =(state = init_state,action)=>{
   
    switch (action.type) {
        case INCREMENT:
            {
            let data = action.payload
            return {...state , num: data + parseInt(state.changeValue)}
            }

        case DECREMENT:
            {
            let data = action.payload
            return {...state , num: data - parseInt(state.changeValue)}
            }
        case CHANGE:
            {
            let data = action.payload
            return {...state , changeValue: action.payload}
            }

        default:
            return{...state}
    }
}
export  {counterReducer}