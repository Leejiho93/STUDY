import { createStore, combineReducers } from 'redux';
import colors from './colors' ;
import sort from './sort';

const rootReducer = combineReducers({ colors, sort })


export default rootReducer;