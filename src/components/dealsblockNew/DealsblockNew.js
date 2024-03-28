import React, { useState, useEffect } from 'react';
import DealsblockMobile from './DealsBlockMobile';
import DealsblockPc from './DealsBlockPc';

const DealsBlockNew = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth <= 600 ? <DealsblockMobile /> : <DealsblockPc />}
    </div>
  );
};

export default DealsBlockNew;