import React from 'react'

const Welcome = (props) => {
  return (
    <h1 className="text-2xl font-bold text-gray-800 text-center">Hello, {props.name}!</h1>
  )
}

export default Welcome