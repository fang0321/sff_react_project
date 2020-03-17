//store是整个redux中最核心的对象
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from './count_reducer'
export default createStore(countReducer,applyMiddleware(thunk))