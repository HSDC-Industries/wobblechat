import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'

const SearchResults = () => {
  const location = useLocation();
  const { searchTerm } = location.state;
  const [searchResults, setSearchResults] = useState([]);
  const [searchComplete, setSearchComplete] = useState(false);

  console.log(searchResults);

  useEffect(() => {
    fetch(`/api/search/${searchTerm}`)
      .then(res => res.json())
      .then((response) => {
        setSearchResults(response);
        setSearchComplete(true);
      })
      .catch((err) => {
        console.log("Error making fetch request in search: ", err);
      });
  }, [searchComplete])

  return !searchComplete ? <div>Please wait, loading</div> : (
    <ul>
      {searchResults.map(x => <Link to={{
        pathname: `/question/${x.id}`,
        state: {
          id: x.id, 
          title: x.title, 
          description: x.description
        }
        }}><li key={x.id}>{x.title}</li></Link>)}
    </ul>
  )
}

export default SearchResults;