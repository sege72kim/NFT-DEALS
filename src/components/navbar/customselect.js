import React, { useState } from 'react';
import './style.css'; // Подключите файл стилей

function CustomSelect() {


  return (
    <div className="dropdown">
    <div className="dropwdown-btn">Languages</div>
    <div className="dropdown-content">
        <div className="dropdown-item">
            English
        </div>
       
    </div>
    </div>
  );
}

export default CustomSelect;