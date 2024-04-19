import React from "react";
import "./style.css";
import { useTonConnectModal } from "@tonconnect/ui-react";
import { FormattedMessage } from "react-intl";

export const ModalControl = () => {
  const { open } = useTonConnectModal();

  return (
    <button className="modalcontrol" onClick={open}>
      Connect Wallet
    </button>
  );
};

const Registration = () => {
  return (
    <div className="registration">
      <div className="reg-avatars">
        <img className="slider-image" src="./images/rex.gif" alt="" />
      </div>
      <div className="reg-text">
        <div className="reg-text1">HAMSTER EXCHANGE</div>
        <div className="reg-text2">
          <FormattedMessage id="garant" />
        </div>
      </div>
      <div className="reg-button">
        <ModalControl />
      </div>
    </div>
  );
};
export default Registration;
