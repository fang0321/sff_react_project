//store是整个redux中最核心的对象
import {createStore} from 'redux'
import countReducer from './count_reducer'
export default createStore(countReducer)