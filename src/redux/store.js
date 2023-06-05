import {legacy_createStore as createStore} from 'redux';
import { combineReducers } from 'redux';
import {counterReducer}  from '../../src/redux/reducers';
import { ThemeReducer } from '../../src/redux/themeReducer';
import apiCallReducer from '../../src/redux/apiCallReducer';
import thunk from 'redux-thunk';
import {applyMiddleware} from "redux";

const middleware = [thunk]

const rootReducer = combineReducers({counterReducer,ThemeReducer,apiCallReducer})
const configureStore = ()=>{
    return createStore(rootReducer,applyMiddleware(...middleware))
}


export default configureStore()