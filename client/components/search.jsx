import React, { useState } from "react";
import { Link} from "react-router-dom";

const Search = () =>{
  const [searchTerm, setSearchTerm] = useState('');

  
  return(
    <div>
      <input placeholder = "Search for" onChange={e => setSearchTerm(e.target.value)}></input>
      <Link to={{
        pathname:`/searchResults`,
        state:{
          searchTerm : searchTerm
        }}}><button>Search</button></Link>
    </div>
  )    
}


export default Search;