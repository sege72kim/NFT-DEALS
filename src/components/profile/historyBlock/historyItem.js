import React from "react";
import { FormattedMessage } from "react-intl";
import TruncateText from "../../../utils/truncateText";

function HistoryItem({ data }) {
  return (
    <div className="nftnameblock_a">
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
      <div className="details_content"></div>
    </div>
  );
}

export default HistoryItem;
