import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const param = useParams()
  return (
    <div>Hi, the user is: {param.username}</div>
  )
}

export default User