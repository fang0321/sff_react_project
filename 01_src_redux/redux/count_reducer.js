import {INCREMENT,DECREMENT} from './action_types'

export default function(preState=0,action){
  const {type,data} = action
  console.log(type,data);
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