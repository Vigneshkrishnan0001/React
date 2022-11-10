import React, { Component } from 'react'

 class Conditions extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: true
  }
}


  render() {

    return (this.state.isLoggedIn) && (<div>Happy Birthday</div>)

                            //return (this.state.isLoggedIn)?(<div>Happy birthday</div>):(<div>Have a nice day</div>)



                            //let message 
                            //if(this.state.isLoggedIn)
                            //{
                            //  message = <div> Happy birthday</div>
                            //}
                            //else{
                            //  message = <div>Have a nice day</div>
                            //}

                            //return <div> {message}</div>



                            //if (this.state.isLoggedIn)
                            //{ 
                            //  return (<div>Happy birthday</div>)
                            //}
                            //else {
                            //return (<div> Have a nice day </div>)
                            // } 
  }
}

export default Conditions
