import React from 'react'
import { Input } from './ui/input'

export const SearchBar = (props) => {
  return (
    <Input placeholder='District, town, or city' className='shadow-md rounded-xl' value={props.value} onChange={props.onChange}/>
  )
}
