import React from 'react';
import './Search.css'

const Search = (props)=>{
    console.log(props)
    
return(
    <div className ="search-div">

      <input id="input" placeholder =" Search for what you need" onChange={props.finder}></input>

    </div>
)
}

export default Search;