import { INCREMENT,DECREMENT, CHANGE, CHANGE_THEME} from "../../src/redux/types";

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
const changeTheme = type => ({
        type: CHANGE_THEME,
        payload: type
})
export {increment,decrement,changeTheme,changeValue}