
import React, {useState} from 'react'

export default function Search() {
    const[ search,setSearch]= useState('')
    return(
        <div>
           <input 
        type="text"
        placeholder="Search Items"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}/>   
        </div>
       

    )
}