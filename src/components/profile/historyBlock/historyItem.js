import React from "react";
import { FormattedMessage } from "react-intl";
import TruncateText from "../../../utils/truncateText";

function HistoryItem({ data }) {
  return (
    <div className="history_item">
      <div className="top_content">
        <div className="top_content_left">
          <img src="./images/swap.svg" alt="" />
          <div className="top_content_text">
            <h1>Deal with</h1>
            <h2>
              <TruncateText text={data.with} maxLength={10} />
            </h2>
          </div>
        </div>
        <div className="top_content_right">
          <div
            className={
              data.status === "complete" ? "complete_status" : "awaiting_status"
            }
          >
            {data.status}
          </div>
        </div>
      </div>
      <div className="details_content">
        <div className="details_block">
          <div className="nft_history_1">
            {data.items1.map((item) => (
              <div key={item.id}>
                <img className="nft_history" src={item.image} alt="" />
              </div>
            ))}
          </div>
          <img className="plussvg" src="./images/plus2.svg" alt="" />
          <div className="jettons_history_1">
            {data.jettons1.map((item) => (
              <div key={item.id} className="jetton_history_list">
                {item.ammount} {item.type}
              </div>
            ))}
          </div>
        </div>
        <img className="arrow" src="./images/arrow.svg" alt="" />
        <div className="details_block">
          <div className="nft_history_2">
            {data.items2.map((item) => (
              <div key={item.id}>
                <img className="nft_history" src={item.image} alt="" />
              </div>
            ))}
          </div>
          <img className="plussvg" src="./images/plus2.svg" alt="" />
          <div className="jettons_history_2">
            {data.jettons2.map((item) => (
              <div key={item.id} className="jetton_history_list">
                {item.ammount} {item.type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryItem;
