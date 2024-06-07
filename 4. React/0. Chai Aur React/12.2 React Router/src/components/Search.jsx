import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Search = () => {
    const {searchedPage} = useParams()
  return (
    <>
    <Navbar/>
    <div>This is {searchedPage} page</div>
    </>
  )
}

export default Search