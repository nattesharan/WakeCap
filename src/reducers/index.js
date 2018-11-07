import {combineReducers} from 'redux';
import navBarReducer from './NavbarReducer';
const rootReducer = combineReducers({
    options: navBarReducer
});
export default rootReducer;