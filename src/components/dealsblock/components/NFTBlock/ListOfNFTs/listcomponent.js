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

        {filteredData.length > 0 ? (       // Проверяем, есть ли элементы в отфильтрованном массиве
        <div className="scrollbar1">
          <div className="scrollbar2">
            {filteredData.map((item) => (
              <ListItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      ) : (                                // Если массив пуст, отображаем другой блок
        <div className = "ntfndnft">
          <div className = "ntfndnfttext">
              Not enough NFTs
          </div> 
          <div className = "ntfndnfttext2">
            <p>You and the other person need to have at least one</p>
            <p>NFT to make a deal.</p>
          </div>
        </div>
      )}

      </div>
    );
  }
  
  export default ListComponent