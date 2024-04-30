import TruncateText from "../../../utils/truncateText";
import "./style.css";
import { useTonAddress } from "@tonconnect/ui-react";
import React, { useState } from "react";
import data from "../../../data";
import { Link } from "react-router-dom";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const InfoUserBlock = () => {
  const userData = data.find((user) => user.username === "UserName 228");
  const userFriendlyAddress = useTonAddress();

  const handleClick = () => {
    copyToClipboard(userFriendlyAddress);
    setIcon("done");
    setTimeout(() => {
      setIcon("copy");
    }, 3000);
  };
  const [icon, setIcon] = useState("copy");

  return (
    <div>
      <div className="user_info_block">
        <div className="user_info_container">
          <div className="user_info_text">Your HEX profile Info</div>
          <div className="copy_url_block" onClick={handleClick}>
            <TruncateText text={userFriendlyAddress} maxLength={8} />
            <img src={`./images/${icon}.svg`} alt="" />
          </div>
          <div className="info_blocks1">
            <div className="info_block">
              <div className="info_blocks_text1">NFTs</div>
              <div className="info_blocks_text2">{userData.items.length}</div>
            </div>
            <div className="info_block">
              <div className="info_blocks_text1">Made deals</div>
              <div className="info_blocks_text2">
                {userData.jettons[1].ammount}
              </div>
            </div>
          </div>
          <div className="info_blocks2">
            <div className="info_block">
              <div className="info_blocks_text1">HMSTR balance</div>
              <div className="info_blocks_text2">
                {userData.jettons[0].ammount}
              </div>
            </div>
            <div className="info_block">
              <div className="info_blocks_text1">Wallet balance</div>
              <div className="info_blocks_text2">
                {userData.jettons[2].ammount}{" "}
                <div style={{ marginLeft: "5px" }}>TON</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <div className="create_trade_button">Create Trade</div>
      </Link>
    </div>
  );
};
export default InfoUserBlock;
