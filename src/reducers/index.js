import {combineReducers} from 'redux';
import {changeTextReducer} from './changeTextReducer';

const rootReducers = combineReducers({
    changeText: changeTextReducer
})

export default rootReducers;