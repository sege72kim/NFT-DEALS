import MenuItem from "./menuitems";
import "./style.css";
import React, { useState } from "react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { Link } from "react-router-dom";

function MenuProfile({ sendDataToParent, sendDataToApp, handleClick2 }) {
  const [Option, setOption] = useState("main");
  const [tonConnectUI] = useTonConnectUI();
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  const handleOptionChange = (newOption) => {
    setOption(newOption);
  };
  const sendData1 = () => {
    const data = "en";
    sendDataToParent(data);
    sendDataToApp(data);
    handleClick2();
  };
  const sendData2 = () => {
    const data = "ru";
    sendDataToParent(data);
    sendDataToApp(data);
    handleClick2();
  };
  const sendData3 = () => {
    const data = "chs";
    sendDataToParent(data);
    sendDataToApp(data);
    handleClick2();
  };
  const sendData4 = () => {
    const data = "es";
    sendDataToParent(data);
    sendDataToApp(data);
    handleClick2();
  };
  const sendData5 = () => {
    const data = "kr";
    sendDataToParent(data);
    sendDataToApp(data);
    handleClick2();
  };
  const userFriendlyAddress = useTonAddress();
  const disconnect = async () => {
    await tonConnectUI.disconnect();
    handleClick2();
  };
  const handleClick = () => {
    copyToClipboard(userFriendlyAddress);
    setIcon("done2");
    setTimeout(() => {
      setIcon("copy2");
    }, 3000);
  };
  const [icon, setIcon] = useState("copy");
  return (
    <div>
      {Option === "main" && (
        <div>
          <div onClick={handleClick}>
            <MenuItem text="Copy Link" image={`./images/${icon}.svg`} />
          </div>
          <Link to="/history" className="link_container" onClick={handleClick2}>
            <MenuItem text="Profile" image="./images/user.svg" />
          </Link>
          <div onClick={() => handleOptionChange("language")}>
            <MenuItem text="Language" image="./images/globe.svg" />
          </div>
          <div onClick={() => handleOptionChange("custom")}>
            <MenuItem text="Customization" image="./images/custom.svg" />
          </div>
          <div onClick={disconnect}>
            <MenuItem text="Log Out" image="./images/logout.svg" />
          </div>
        </div>
      )}
      {Option === "language" && (
        <div>
          <div onClick={() => handleOptionChange("main")}>
            <MenuItem text="Return" image="./images/cross.svg" />
          </div>
          <div onClick={sendData1}>
            <MenuItem text="English" image="./images/language.svg" />
          </div>
          <div onClick={sendData2}>
            <MenuItem text="Russian" image="./images/language.svg" />
          </div>
          <div onClick={sendData3}>
            <MenuItem text="中国人" image="./images/language.svg" />
          </div>
          <div onClick={sendData4}>
            <MenuItem text="Español" image="./images/language.svg" />
          </div>
          <div onClick={sendData5}>
            <MenuItem text="한국인" image="./images/language.svg" />
          </div>
        </div>
      )}
      {Option === "custom" && (
        <div>
          <div onClick={() => handleOptionChange("main")}>
            <MenuItem text="Return" image="./images/cross.svg" />
          </div>
          <div onClick={sendData1}>
            <MenuItem text="English" image="./images/language.svg" />
          </div>
          <div onClick={sendData2}>
            <MenuItem text="Russian" image="./images/language.svg" />
          </div>
          <div onClick={sendData3}>
            <MenuItem text="中国人" image="./images/language.svg" />
          </div>
          <div onClick={sendData4}>
            <MenuItem text="Español" image="./images/language.svg" />
          </div>
          <div onClick={sendData5}>
            <MenuItem text="한국인" image="./images/language.svg" />
          </div>
        </div>
      )}
    </div>
  );
}
export default MenuProfile;
