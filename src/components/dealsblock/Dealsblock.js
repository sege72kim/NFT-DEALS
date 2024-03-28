import React, { useState, useEffect } from 'react';
import DealsblockMobile from './DealblockMobile';
import DealsblockDesktop from './DealsblockDesktop';

const DealsBlock = () => {
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
      {windowWidth <= 600 ? <DealsblockMobile /> : <DealsblockDesktop />}
    </div>
  );
};

export default DealsBlock;