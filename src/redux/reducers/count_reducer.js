import {INCREMENT,DECREMENT} from '../action_types'

export default function(preState=0,action){
  let {type,data} = action
  let newState
  switch (type) {
    case INCREMENT:
      newState = preState + data
      return newState
    case DECREMENT:
      newState = preState - data
      return newState
    default:
      return preState
  }
}