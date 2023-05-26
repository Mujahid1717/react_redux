import { INCREMENT,DECREMENT, CHANGE} from "../../src/redux/types";

const increment =(data)=>{
   
    return{
        type: INCREMENT,
        payload: data
    }
}
const decrement =(data)=>{
    return{
        type: DECREMENT,
        payload: data
    }
}
const changeValue =(text)=>{
    return{
        type: CHANGE,
        payload: text
    }
}
export {increment,decrement}