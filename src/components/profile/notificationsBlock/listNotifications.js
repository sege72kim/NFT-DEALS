import React from "react";
import { FormattedMessage } from "react-intl";
import TruncateText from "../../../utils/truncateText";

function ListItemAction({ data }) {
  return (
    <div className="nftnameblock_a">
      <img className="swap" src="./images/swap.svg" alt="" />
      <img className="avatar_actions" src={data.botavatar} alt="" />
      <div className="nfttextblock_p">
        <div className="notification_message">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <span style={{ marginRight: "5px", color: "#dee1e9" }}>
              {data.botname}
            </span>
            <span style={{ marginRight: "5px" }}>
              <FormattedMessage id="action_message1" />
            </span>
            <span
              style={{
                marginRight: "5px",
                color: "#067dc2",
                fontWeight: "500",
              }}
            >
              <TruncateText text={data.from} maxLength={7} />
            </span>
            <span style={{ marginRight: "5px" }}>
              <FormattedMessage id="action_message2" />
            </span>
            <span
              style={{
                marginRight: "5px",
                color: "#067dc2",
                fontWeight: "500",
              }}
            >
              <TruncateText text={data.to} maxLength={7} />
            </span>
          </div>
        </div>
        <div className="notification_date">{data.date}</div>
      </div>
    </div>
  );
}

export default ListItemAction;
