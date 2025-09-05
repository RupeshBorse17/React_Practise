import React from 'react'
import { useParams } from 'react-router-dom'

const Names = () => {
  
    const {name} = useParams();
    return <h1>user Name {name} </h1>
}

export default Names
