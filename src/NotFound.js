import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"

function NotFound() {
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
        <h1>Not Found</h1>
        </div>
    </div>
  );
}

export default NotFound;