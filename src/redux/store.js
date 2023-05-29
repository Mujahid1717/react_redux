import {legacy_createStore as createStore} from 'redux';
import { combineReducers } from 'redux';
import {counterReducer}  from '../../src/redux/reducers';
import { ThemeReducer } from '../../src/redux/themeReducer';

const rootReducer = combineReducers({counterReducer,ThemeReducer})
const store = createStore(rootReducer)

export default store