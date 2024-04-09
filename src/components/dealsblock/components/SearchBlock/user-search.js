import React, { useState } from "react";
import "./style.css";
import { FormattedMessage } from "react-intl";

const UserSearch = ({ textsearch, onApply, balance, balancename }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setSearchValue(inputValue);
    }
  };

  const handleApplyClick = () => {
    onApply(searchValue);
  };

  return (
    <div className="search-block">
      <input
        type="text"
        className={isFocused ? "search-blocki active" : "search-blocki"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={textsearch}
        value={searchValue}
        onChange={handleInputChange}
      />
      <p className="balance">
        {<FormattedMessage id="balance" />}
        {balance}
        {balancename}
      </p>
      <div className="buttoncr-container">
        <button
          className="applybuttoncr"
          onClick={handleApplyClick}
          disabled={
            parseFloat(searchValue) < 1 || parseFloat(searchValue) > balance
          }
        >
          <p>{<FormattedMessage id="apply" />}</p>
        </button>
      </div>
    </div>
  );
};

export default UserSearch;
