import React, { useState } from "react";
import { Link} from "react-router-dom";

const Search = () =>{
  const [searchTerm, setSearchTerm] = useState('');

  
  return(
    <div className="ask-search-questions">
      <h2>Search Questions:</h2>
      <input placeholder="enter keyword" onChange={e => setSearchTerm(e.target.value)}></input>
      <Link to={{
        pathname:`/searchResults`,
        state:{
          searchTerm : searchTerm
        }}}><button>Search</button></Link>
    </div>
  )    
}


export default Search;