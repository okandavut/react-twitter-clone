import React from 'react';

import './searchbox.css';

function SearchBox() {
  return (
    <div className="search">
        <input type="text" placeholder="Search" className="search-box"></input>
    </div>
  );
}

export default SearchBox;