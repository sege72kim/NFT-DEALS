import React from "react";

function ListItem({ data }) {
  return (
    <div className="nftnameblock_p">
      <img className="avatar" src={data.image} alt={data.name} />
      <div className="nfttextblock_p">
        <div className="nfttype_p">{data.type}</div>
        <div className="nftname_p">{data.name}</div>
      </div>
    </div>
  );
}

export default ListItem;
