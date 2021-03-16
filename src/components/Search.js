
import React,{ Component } from 'react';
import './Search.css'

class Search extends Component{
    state={
        name:'',
    }


// handleInputChange =()=>{
//     this.setState({
//         name:this.search.value
//     })

// }
    render(){

        return(
            <div className ="search-div">
        <form>

              <input id="input" placeholder =" Search for what you need"
              ref={input=> this.search=input}
               onChange={this.handleInputChange}/>
               <p>{this.state.name}</p>

        </form>
        
        
              
        
            </div>
        )

    }
}

export default Search;