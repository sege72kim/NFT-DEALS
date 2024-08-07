import React, { useState } from "react";
import ListItem from "./listitem";
import "./style.css";
import { FormattedMessage } from "react-intl";

function NftList({ data }) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Проверяем, есть ли данные в массиве
  if (!data || data.length === 0) {
    return (
      <div className="nft_profile_search">
        <div className="nftsearch_p">
          <img src="./images/search.svg" alt="" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className={isFocused ? "nftsearchi_p active" : "nftsearchi_p"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search NFT"
          />
        </div>
        <div className="ntfndnft_p">
          <div className="ntfndnfttext_p">
            {<FormattedMessage id="notenough_p" />}
          </div>
          <div className="ntfndnfttext2_p">
            {<FormattedMessage id="notenought1_p" />}
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
      <div className="nft_profile_search">
        <div className="nftsearch_p">
          <img src="./images/search.svg" alt="" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className={isFocused ? "nftsearchi_p active" : "nftsearchi_p"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Seacrh NFT"
          />
        </div>
        <div className="scrollbar1_p">
          <div className="scrollbar2_p">
            {filteredData.map((item) => (
              <div key={item.id}>
                <ListItem data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (searchQuery.trim() !== "") {
    // Если есть данные, но они не совпадают по поиску
    return (
      <div className="nft_profile_search">
        <div className="nftsearch_p">
          <img src="./images/search.svg" alt="" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className={isFocused ? "nftsearchi_p active" : "nftsearchi_p"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search NFT"
          />
        </div>
        <div className="ntfndnft_p">
          <div className="ntfndnfttext_p">
            {<FormattedMessage id="notfound" />}
          </div>
          <div className="ntfndnfttext2_p">
            {<FormattedMessage id="notfound1_p" />}
          </div>
        </div>
      </div>
    );
  } else {
    // Если данные есть, но поиск не выполнен
    return (
      <div className="nft_profile_search">
        <div className="nftsearch_p">
          <img src="./images/search.svg" alt="" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className={isFocused ? "nftsearchi_p active" : "nftsearchi_p"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search NFT"
          />
        </div>
        <div className="scrollbar1_p">
          <div className="scrollbar2_p">
            {data.map((item) => (
              <div key={item.id}>
                <ListItem data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NftList;
