import React from 'react'

function NameList() {

const names =['kakarot','Saiyan','Vegeta']
const nameList = names.map(name =><h1 key = {name}>{name}</h1>)
  return (
    <div>
      {nameList}
    </div>
  )
}

export default NameList
