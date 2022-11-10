import React, { Component } from 'react'

class Message extends Component
{
constructor()
{
    super()
    this.state = {
        vikki: 'HI'
    }
}

Changemessage()
{
    this.setState({
        vikki: 'Bye'
    })
}

render()
{
return(
<div>
<h1> { this.state.vikki } </h1>
<button onClick = {() =>  this.Changemessage() }> Subscribe </button>
</div>

) 
}
}

export default Message 