import React, { useState } from 'react';
import ListItem from './ListItem';
import './style.css'

function ListComponent({ data }) {

  const [isFocused, setIsFocused] = useState(false); 

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div>
        <div className ="nftsearch">
          
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className={isFocused ? 'nftsearchi active' : 'nftsearchi'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search NFT"
        />

        </div>
        {filteredData.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </div>
    );
  }
  
  export default ListComponent