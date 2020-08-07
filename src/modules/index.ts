import {combineReducers} from 'redux';
import items from './items';


const rootReducer = combineReducers({
    items,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;