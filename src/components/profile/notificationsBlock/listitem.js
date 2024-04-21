import React from "react";
import ListItemAction from "./listNotifications";
import "./style.css";
import { FormattedMessage } from "react-intl";

function ActionsList({ data }) {
  // Проверяем, есть ли данные в массиве
  if (!data || data.length === 0) {
    return (
      <div className="nft_profile_search">
        <div className="ntfndnft_p">
          <div className="ntfndnfttext_p">
            {<FormattedMessage id="no_actions" />}
          </div>
          <div className="ntfndnfttext2_p">
            {<FormattedMessage id="no_actions1" />}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nft_profile_search">
        <div className="scrollbar1_a">
          <div className="scrollbar2_j">
            {data.map((item) => (
              <div key={item.id}>
                <ListItemAction data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ActionsList;
