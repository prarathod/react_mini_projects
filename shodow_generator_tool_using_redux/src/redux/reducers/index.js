import {combineReducers} from 'redux';
import hori from './hori';
import vari from './vari';

const rootReducer = combineReducers({
    hori,
    vari,
});

export default rootReducer;