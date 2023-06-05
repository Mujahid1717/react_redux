import {API_CALL_START,API_CALL_SUCCESS,API_CALL_FAILURE} from '../../src/redux/types'

const initialState = {
    data: {},
    loader : false,
    error : "",
}
const apiCallReducer = (state = initialState , action) => {
    switch (action.type){
        case API_CALL_START:
            return {
                ...state , 
                data: {},
                loader: true
            }
        case API_CALL_SUCCESS:
            return {
                ...state, 
                loader: false , 
                data: action.payload
            }
        case API_CALL_FAILURE:
            return {
                ...state, 
                error: false, 
                error: action.payload
            }
        
        default:
            return state
    }

}
export default apiCallReducer