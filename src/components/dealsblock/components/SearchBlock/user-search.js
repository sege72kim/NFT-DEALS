import React, { useState } from 'react';
import './style.css'
const UserSearch = () => {
    const [isFocused, setIsFocused] = useState(false); // Состояние для отслеживания фокуса

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
    return ( 
    <div className="search-block">
    <input type="search-text" 
    className={isFocused ? 'search-blocki active' : 'search-blocki'}
    onFocus={handleFocus}
    onBlur={handleBlur}
    placeholder="Choose user for deal"/>
    </div>
 );
}
 
export default UserSearch;