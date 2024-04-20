import TruncateText from "../../../utils/truncateText";
import "./style.css";
import { useTonAddress } from "@tonconnect/ui-react";
import React, { useState } from "react";
import { useTonWallet } from "@tonconnect/ui-react";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const InfoUserBlock = () => {
  const wallet = useTonWallet();
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
            <div className="info_blocks_text2">23</div>
          </div>
          <div className="info_block">
            <div className="info_blocks_text1">Made deals</div>
            <div className="info_blocks_text2">3</div>
          </div>
        </div>
        <div className="info_blocks2">
          <div className="info_block">
            <div className="info_blocks_text1">HMSTR balance</div>
            <div className="info_blocks_text2">22</div>
          </div>
          <div className="info_block">
            <div className="info_blocks_text1">Wallet balance</div>
            <div className="info_blocks_text2">230</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoUserBlock;
