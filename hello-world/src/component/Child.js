import React from 'react'

function Child(props) {
  return (
    <div>
      <div>REACT</div>
        <button onClick = { props.Handler}>Click</button>
    </div>
  )
}

export default Child
