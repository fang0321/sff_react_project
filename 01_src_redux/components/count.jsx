import React, { Component } from 'react'
import {createIncrementAction,createDecrementAction} from '../redux/count_action'

export default class Count extends Component {
  state = {
    count:0
  }
  increment = ()=>{
    let {value} = this.refs.numberNode
    this.props.store.dispatch(createIncrementAction(+value))
  }
  decrement = ()=>{
    let {value} = this.refs.numberNode
    this.props.store.dispatch(createDecrementAction(+value))
  }
  incrementIfAdd = ()=>{
    let {value} = this.refs.numberNode
    let count = this.props.store.getState()
    if(count%2 != 0){
      this.props.store.dispatch(createIncrementAction(+value))
    }
  }
  incrementAsync = ()=>{
    let {value} = this.refs.numberNode
    setTimeout(()=>{
      this.props.store.dispatch(createIncrementAction(+value))
    },500)
  }
  render() {
    return (
      <div>
        <h2>当前总数为：{this.props.store.getState()}</h2>
        <select ref='numberNode'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfAdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>延时加</button>
      </div>
    )
  }
}
