import React from "react";

function ListItemJetton({ data }) {
  return (
    <div className="nftnameblock_p">
      <img className="avatar_jetton" src={data.image} alt={data.type} />
      <div className="nfttextblock_p">
        <div className="jetton_type">{data.type}</div>
        <div className="jetton_ammount">{data.ammount}</div>
      </div>
    </div>
  );
}

export default ListItemJetton;
