import React, { Component } from 'react'

export default class Count extends Component {
  increment = ()=>{
    let {value} = this.refs.numberNode
    this.props.in(+value)
  }
  decrement = ()=>{
    let {value} = this.refs.numberNode
    this.props.de(+value)
  }
  incrementIfAdd = ()=>{
    let {value} = this.refs.numberNode
    let {num} = this.props
    if(num%2 != 0){
      this.props.in(+value)
    }
  }
  incrementAsync = ()=>{
    let {value} = this.refs.numberNode
    setTimeout(()=>{
      this.props.in(+value)
    },500)
  }
  render() {
    return (
      <div>
        <h2>当前总数为：{this.props.num}</h2>
        <select ref='numberNode'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfAdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
