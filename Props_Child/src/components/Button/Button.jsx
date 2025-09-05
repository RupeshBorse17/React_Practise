import React from 'react'

const Button = (props) => {
  return (
    
    <button onClick={props.handleclick}>
        {props.text}
    </button>
  )
}

export default Button
