import {INCREMENT,DECREMENT} from './action_types'

export const createIncrementAction = (value)=>{
  return {type:INCREMENT,data:value}
}
export const createDecrementAction = (value)=>{
  return {type:DECREMENT,data:value}
}