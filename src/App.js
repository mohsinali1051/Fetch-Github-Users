import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

function GitHubUserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      setSearchResults(response.data.items);
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Github Users</h1>
      
      <div className="form">

        <div>
        <input
          type="text"
          id="search-input"
          placeholder='Enter Username'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        </div>

      </div>
      
      <div className="users-list">
      <ul>
        {
        searchResults.map((result) => (
          <li> 
            <a href={result.html_url}>
            <div className="picture">
              <img src={result.avatar_url} alt={`Avatar not loaded yet`} /> 
            </div>
            </a>
            <p>{result.login}</p>
          </li>
        ))}
        <p>Not Found</p>
      </ul>
      </div>
    </div>
  );
}
export default GitHubUserSearch;