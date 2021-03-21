import {combineReducers} from 'redux'
import {REDUX_KEY as CartKey,reducer as CartReducer} from './CartRedux'
import {REDUX_KEY as GlobalKey,reducer as GlobalReducer} from './GlobalRedux'


export default  combineReducers({
    [CartKey]:CartReducer,
    [GlobalKey]: GlobalReducer
})