import React, { Component } from 'react'
// import {createIncrementAction,createDecrementAction} from '../redux/count_action'

export default class Count extends Component {
  increment = ()=>{
    let {value} = this.refs.selectNode
    this.props.increment(+value)
    // this.props.store.dispatch(createIncrementAction(+value))
  }
  decrement = ()=>{
    let {value} = this.refs.selectNode
    this.props.decrement(+value)
    // this.props.store.dispatch(createDecrementAction(+value))
  }
  incrementIfOdd = ()=>{
    let {value} = this.refs.selectNode
    let count = this.props.number
    // let count = this.props.store.getState()
    if(count%2!==0){
      // this.props.store.dispatch(createIncrementAction(+value))
      this.props.increment(+value)
    }
  }
  incrementIfAsync = ()=>{
    let {value} = this.refs.selectNode
    setTimeout(()=>{
      this.props.increment(+value)
      // this.props.store.dispatch(createIncrementAction(+value))
    },1000)
  }
  render() {
    return (
      <div>
        <h2>当前总数为：{this.props.number},下方的总人数为：{this.props.persons}</h2>
        <select ref='selectNode'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfAsync}>延时加</button>&nbsp;&nbsp;
      </div>
    )
  }
}
