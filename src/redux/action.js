import { INCREMENT,DECREMENT, 
    CHANGE, CHANGE_THEME,API_CALL_START,API_CALL_SUCCESS,API_CALL_FAILURE} from "../../src/redux/types";

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
// api call actions
 const apiCallStart = data =>{
    return{
        type : API_CALL_START,
    }
 }

 const apiCallSuccess = data =>{
    return{
        type : API_CALL_SUCCESS,
        payload : data
    }
 }

 const apiCallFailure = err =>{
    return{
        type : API_CALL_FAILURE,
        payload : err
    
    }
 }

const apiCall = ()=>{
    return dispatch => {
            dispatch(apiCallStart())
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(response => dispatch(apiCallSuccess(response)))
            .catch(err => dispatch(apiCallFailure(err)))
        }  
}

export {
    increment,
    decrement,
    changeTheme,
    changeValue,
    apiCall,
    apiCallStart,
    apiCallSuccess,
    apiCallFailure
    }