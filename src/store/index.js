import { createStore, combineReducers } from 'redux';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceListReducer from '../reducers/serviceList';

const reducer = combineReducers({
    serviceAdd: serviceAddReducer,
    serviceList: serviceListReducer,
});

const store = createStore(reducer);

export default store;
