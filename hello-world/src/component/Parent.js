import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
 
 constructor(props) {
   super(props)
 
   this.state = {
      message: 'hello Parent'
   }
this.eventHandler = this.eventHandler.bind(this)
 }
eventHandler()
{
   alert(`hello`)  
    }

 
    render() {
    return (
      <div>
        <Child Handler = {this.eventHandler} />
      </div>
    )
  }
}

export default Parent
