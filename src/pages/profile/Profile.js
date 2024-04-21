import HamsterBlock from "../../components/profile/hamsterBlock/hamsterBlock";
import HistoryBlock from "../../components/profile/historyBlock/history";
import JettonsBlock from "../../components/profile/jettonsBlock/jettonsblock";
import NotificationBlock from "../../components/profile/notificationsBlock/nofificationBlock";
import InfoUserBlock from "../../components/profile/userInfoBlock/infoblock";
import UserNftBlock from "../../components/profile/userNftBlock/userNftBlock";
import "./style.css";
import React, { useState } from "react";
const Profile = () => {
  const [Option, setOption] = useState("hmstr");

  const handleOptionChange = (newOption) => {
    setOption(newOption);
  };
  return (
    <div className="profile_container">
      <InfoUserBlock />
      <div className="profile_main">
        <div className="profile_options">
          <div
            className={
              Option === "hmstr" ? "profile_option_selected" : "profile_option"
            }
            onClick={() => handleOptionChange("hmstr")}
          >
            HMSTR
          </div>
          <div
            className={
              Option === "nfts" ? "profile_option_selected" : "profile_option"
            }
            onClick={() => handleOptionChange("nfts")}
          >
            NFTs
          </div>
          <div
            className={
              Option === "jettons"
                ? "profile_option_selected"
                : "profile_option"
            }
            onClick={() => handleOptionChange("jettons")}
          >
            Jettons
          </div>
          <div
            className={
              Option === "notification"
                ? "profile_option_selected"
                : "profile_option"
            }
            onClick={() => handleOptionChange("notification")}
          >
            Activity
          </div>

          <div
            className={
              Option === "history"
                ? "profile_option_selected"
                : "profile_option"
            }
            onClick={() => handleOptionChange("history")}
          >
            History
          </div>
        </div>
        <div className="profile_choosed_block">
          {Option === "hmstr" && <HamsterBlock />}
          {Option === "nfts" && <UserNftBlock />}
          {Option === "jettons" && <JettonsBlock />}
          {Option === "history" && <HistoryBlock />}
          {Option === "notification" && <NotificationBlock />}
        </div>
      </div>
    </div>
  );
};

export default Profile;