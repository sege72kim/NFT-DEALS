import React from "react";

function ListItem({ data }) {
  return (
    <div class="nft_card">
      <div className="avatar_nft">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="card_text">
        <div className="card_type">{data.type}</div>
        <div className="card_name">{data.name}</div>
      </div>
    </div>
  );
}

export default ListItem;
