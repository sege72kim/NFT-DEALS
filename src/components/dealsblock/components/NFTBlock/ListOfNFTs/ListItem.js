import React from 'react';

function ListItem({ data }) {
  return (
  
    <div className = "nftnameblock">
      <img className="avatar" src={data.image} alt={data.name}/>
      <div className="nfttextblock">
        <div className = "nfttype">
            {data.type}
        </div>
        <div className = "nftname">
            {data.name}
        </div>
      </div>
    </div>
  );
}

export default ListItem;