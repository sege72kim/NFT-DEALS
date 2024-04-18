import React, { useState, useEffect } from "react";
import DealsblockDesktop from "./containers/DealsblockDesktop";
import DealsblockMobile from "./containers/DealblockMobile";

const DealsBlock = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth <= 600 ? <DealsblockMobile /> : <DealsblockDesktop />}
    </div>
  );
};

export default DealsBlock;
