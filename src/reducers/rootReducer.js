import { combineReducers } from 'redux';
// import individual reducers here and then pass them into combineReducers()
import reducer from './reducer';

const rootReducer = combineReducers({ reducer });

export default rootReducer;
