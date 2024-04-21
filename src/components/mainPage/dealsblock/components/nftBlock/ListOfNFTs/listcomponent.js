import React, { useState } from "react";
import ListItem from "./ListItem";
import "./style.css";
import { FormattedMessage } from "react-intl";

function ListComponent({ data, onClickBlocks }) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [isFullSelection] = useState(false); // Добавлено состояние для отслеживания выбора четырех элементов

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const [selectedBlocks, setSelectedBlocks] = useState([]);

  const handleClick = (blockData) => {
    if (selectedBlocks.length < 4 || selectedBlocks.includes(blockData)) {
      const index = selectedBlocks.findIndex(
        (item) => item.id === blockData.id
      );
      if (index !== -1) {
        setSelectedBlocks(
          selectedBlocks.filter((item) => item.id !== blockData.id)
        );
      } else {
        setSelectedBlocks([...selectedBlocks, blockData]);
      }
    }
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
            className={isFocused ? "nftsearchi active" : "nftsearchi"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search NFT"
          />
        </div>
        <div className="ntfndnft">
          <div className="ntfndnfttext">
            {<FormattedMessage id="notenough" />}
          </div>
          <div className="ntfndnfttext2">
            <p>{<FormattedMessage id="notenought1" />}</p>
            <p>{<FormattedMessage id="notenought2" />}</p>
          </div>
        </div>
        <button className="applybutton2">
          <p>{<FormattedMessage id="apply" />}</p>
        </button>
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
            className={isFocused ? "nftsearchi active" : "nftsearchi"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Seacrh NFT"
          />
        </div>
        <div className="scrollbar1">
          <div className="scrollbar2">
            {filteredData.map((item) => (
              <div key={item.id} onClick={() => handleClick(item)}>
                <ListItem
                  data={item}
                  isSelected={selectedBlocks.some(
                    (block) => block.id === item.id
                  )}
                  onItemClick={handleClick}
                  disabled={
                    selectedBlocks.length >= 4 && !selectedBlocks.includes(item)
                  }
                  isFullSelection={isFullSelection} // Передаем состояние выбора четырех элементов
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="applybutton"
          onClick={() => onClickBlocks(selectedBlocks)}
        >
          <p>{<FormattedMessage id="apply" />}</p>
        </button>
      </div>
    );
  } else if (searchQuery.trim() !== "") {
    // Если есть данные, но они не совпадают по поиску
    return (
      <div>
        <div className="nftsearch">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className={isFocused ? "nftsearchi active" : "nftsearchi"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search NFT"
          />
        </div>
        <div className="ntfndnft">
          <div className="ntfndnfttext">
            {<FormattedMessage id="notfound" />}
          </div>
          <div className="ntfndnfttext2">
            <p>{<FormattedMessage id="notfound1" />}</p>
            <p>{<FormattedMessage id="notfound2" />}</p>
          </div>
        </div>
        <button className="applybutton2">
          <p>{<FormattedMessage id="apply" />}</p>
        </button>
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
            className={isFocused ? "nftsearchi active" : "nftsearchi"}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search NFT"
          />
        </div>
        <div className="scrollbar1">
          <div className="scrollbar2">
            {data.map((item) => (
              <div key={item.id} onClick={() => handleClick(item)}>
                <ListItem
                  data={item}
                  isSelected={selectedBlocks.some(
                    (block) => block.id === item.id
                  )}
                  onItemClick={handleClick}
                  disabled={
                    selectedBlocks.length >= 4 && !selectedBlocks.includes(item)
                  }
                  isFullSelection={isFullSelection}
                />
              </div>
            ))}
            <div className="applybuttoncontainer">
              <button
                className="applybutton"
                onClick={() => onClickBlocks(selectedBlocks)}
              >
                <p>{<FormattedMessage id="apply" />}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListComponent;
