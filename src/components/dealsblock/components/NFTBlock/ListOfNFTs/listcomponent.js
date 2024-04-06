import React, { useState } from 'react';
import ListItem from './ListItem';
import './style.css';
import { FormattedMessage } from 'react-intl'

function ListComponent({ data, onItemClick }) {
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
  const handleItemClick = (item) => {
    onItemClick(item);
  };
  
  // Проверяем, есть ли данные в массиве
  if (!data || data.length === 0) {
    return (
      <div>
      <div className="nftsearch">
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
      <div className="ntfndnft">
        <div className="ntfndnfttext">
        {<FormattedMessage id='notenough' />}
        </div>
        <div className="ntfndnfttext2">
        <p>{<FormattedMessage id='notenought1' />}</p>
        <p>{<FormattedMessage id='notenought2' />}</p>
        </div>
      </div>
    </div>
    );
  }
  
  // Фильтруем данные
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Проверяем, есть ли совпадения после фильтрации
  if (filteredData.length > 0) {
    return (
      <div>
        <div className="nftsearch">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className={isFocused ? 'nftsearchi active' : 'nftsearchi'}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder='Seacrh NFT'
          />

        </div>
        <div className="scrollbar1">
          <div className="scrollbar2">
          {filteredData.map((item) => (
        <div key={item.id} onClick={() => handleItemClick(item)}>
          <ListItem data={item} />
        </div>
      ))}
          </div>
        </div>
      </div>
    );
  } else if (searchQuery.trim() !== '') {
    // Если есть данные, но они не совпадают по поиску
    return (
      <div>
      <div className="nftsearch">
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
      <div className="ntfndnft">
        <div className="ntfndnfttext">
        {<FormattedMessage id='notfound' />}
        </div>
        <div className="ntfndnfttext2">
        <p>{<FormattedMessage id='notfound1' />}</p>
        <p>{<FormattedMessage id='notfound2' />}</p>
        </div>
      </div>
    </div>
    );
  } else {
    // Если данные есть, но поиск не выполнен
    return (
      <div>
        <div className="nftsearch">
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
        <div className="scrollbar1">
          <div className="scrollbar2">
            {data.map((item) => (
              <ListItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListComponent;