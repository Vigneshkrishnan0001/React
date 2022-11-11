import React, { Component } from 'react'

 class BasicForm extends Component {

constructor(props) {
  super(props)

  this.state = {
     Username: '',
     message: 'Please submit the form'
  }
}

Changeusername = (event) =>{
this.setState({
    Username: event.target.value
    
})

}

handleSubmit = event => {
   alert(`Please confirm before Submitting`)
  event.preventDefault() 
}



Changebutton(){
this.setState({
    message: 'ThankYou for Submitting'
})
}


  render() {
    return (
      <div>

<form onSubmit = {this.handleSubmit}>
        <div>
        <h1>{this.state.message}</h1>
            <lable>Username </lable>
            <input type = 'text' value = {this.state.Username} onChange ={this.Changeusername}/>
        </div>
        <button  onClick = {() =>this.Changebutton()}>Sumbmit</button>
      </form>
      
      </div>
    )
  }
}

export default BasicForm
