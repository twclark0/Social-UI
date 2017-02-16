import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import currentData from './nuvi.js';

const rootReducer = combineReducers({ currentData, routing: routerReducer });

export default rootReducer;
