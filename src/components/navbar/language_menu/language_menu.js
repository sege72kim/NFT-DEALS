import MenuItem from "../menu/menuitems";
import "./style.css";
import React from "react";


function LanguageMenu({ sendDataToParent, sendDataToApp, handleClick2 }) {

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
  return (
    <div>

        <div>
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
    </div>
  );
}
export default LanguageMenu;
