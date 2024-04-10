import React from "react";
import check from "./../check.png";
function ListItem({
  data,
  isSelected,
  onItemClick,
  disabled,
  isFullSelection,
}) {
  return (
    <div
      className={`nftnameblock ${isSelected ? "selected" : ""} ${disabled ? "disabled" : ""} ${isFullSelection ? "full-selection" : ""}`}
      onClick={() => onItemClick(data)}
    >
      <div className="selection-checkbox" onClick={() => onItemClick(data)}>
        {isSelected ? <img className="check" alt="✔" src={check} /> : ""}
      </div>
      <img className="avatar" src={data.image} alt={data.name} />
      <div className="nfttextblock">
        <div className="nfttype">{data.type}</div>
        <div className="nftname">{data.name}</div>
      </div>
    </div>
  );
}

export default ListItem;
