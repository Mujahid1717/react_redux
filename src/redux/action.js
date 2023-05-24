import { INCREMENT,DECREMENT} from "../../src/redux/types";

export function increment (data){
   
    return{
        type: INCREMENT,
        payload: data
    }
}
export function decrement (data){
    return{
        type: DECREMENT,
        payload: data
    }
}