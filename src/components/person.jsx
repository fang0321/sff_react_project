import React, { Component } from 'react'

export default class Person extends Component {
  add = ()=>{
    let {nameNode,ageNode} = this.refs
    let name = nameNode.value
    let age = ageNode.value
    this.props.addPerson({name,age})
    nameNode.value = ''
    ageNode.value = ''
  }
  render() {
    return (
      <div>
        <br/>
    <h2>当前总人数为：{this.props.persons.length},上方的总数为：{this.props.count}</h2>
        姓名：<input ref='nameNode' type="text"/>&nbsp;&nbsp;
        年龄：<input ref='ageNode' type="text"/>&nbsp;&nbsp;
        <button onClick={this.add}>添加</button>
        <ul>
          {
            this.props.persons.map((personObj,index)=>{
              return <li key={index}>姓名：{personObj.name}，年龄：{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
