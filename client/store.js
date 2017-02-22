import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const enhancers = compose(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
