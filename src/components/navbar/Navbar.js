import "./style.css";
import React, { useState, useEffect } from "react";
import Notifications from "./notifications/notifications";
import LNG from "./notifications/lng";
import { FormattedMessage } from "react-intl";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Link } from "react-router-dom";
import { useTonWallet } from "@tonconnect/ui-react";

function Navbar({ sendDataToParent }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const sendData = () => {
    const data = "en";
    sendDataToParent(data);
  };
  const sendData2 = () => {
    const data = "ru";
    sendDataToParent(data);
  };
  const sendData3 = () => {
    const data = "chs";
    sendDataToParent(data);
  };
  const sendData4 = () => {
    const data = "es";
    sendDataToParent(data);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const wallet = useTonWallet();
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <div>
            <img
              href="./index.html"
              src="./images/logo.png"
              className="logo"
              alt="logo"
            />
            <Link to="/" className="logotxt">
              <strong>HEX</strong>{" "}
            </Link>
          </div>
          <ul className="nav-list">
            <div class="pushbutton" onClick={() => setModalActive2(true)}>
              <img
                src="./images/lng.png"
                className="push"
                alt="Noftifications"
              ></img>
            </div>
            {wallet ? (
              <div>
                <div class="pushbutton" onClick={() => setModalActive(true)}>
                  <img
                    src="./images/push.png"
                    className="push"
                    alt="Noftifications"
                  ></img>
                </div>
              </div>
            ) : (
              <span />
            )}
            {
              wallet ? (
                <TonConnectButton />
              ) : (
                <TonConnectButton />
              ) /* ВОТ ТУТ РАБОТАТЬ АЛИНА, ВОТ ЭТОТ БЛОК ТОНКОННЕКТ БУТТОН УБИРАЕШЬ И ДЕЛАЕШЬ ТУДА КАСТОМНУЮ КНОПКУ */
            }
          </ul>
        </div>
      </div>

      <Notifications active={modalActive} setActive={setModalActive}>
        <div className="nottxt">
          <FormattedMessage id="notifications" />
        </div>
        <div className="notcomp">
          <img
            className="notpng"
            src="https://i.getgems.io/NwcEYiPT588h9KkkILaZC6vR6dSaWt5WLOKYVdYu_lM/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvMy9pbWFnZS5wbmc"
          />
          <div className="notcomptxt">
            <div className="notcomptxth">
              You received NFT <a>LOLZ#4</a>
            </div>
            <div className="notcomptxtdata">03.04.2024 11:40</div>
          </div>
        </div>
        <div className="notcomp">
          <img
            className="notpng"
            src="https://i.getgems.io/pwW6Y9cX0cwfrOfv_X6YBRteBHXTffMt3Ej195rN9HE/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvNTgvaW1hZ2UucG5n"
          />
          <div className="notcomptxt">
            <div className="notcomptxth">
              You received NFT <a>LOLZ#59</a>
            </div>
            <div className="notcomptxtdata">03.04.2024 10:30</div>
          </div>
        </div>
        <div className="notcomp">
          <img
            className="notpng"
            src="https://i.getgems.io/YNV-0xHE466rpYBCuNKokNnj_sheORDXo_OU5wNQwac/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvMTAwMDA2MS9pbWFnZS5wbmc"
          />
          <div className="notcomptxt">
            <div className="notcomptxth">
              You received NFT <a>LOLZ#62</a>
            </div>
            <div className="notcomptxtdata">01.04.2024 17:20</div>
          </div>
        </div>
      </Notifications>
      <LNG active={modalActive2} setActive={setModalActive2}>
        <div className="lngcomp" onClick={sendData}>
          English
        </div>
        <div className="lngcomp2" onClick={sendData2}>
          Русский
        </div>
        <div className="lngcomp2" onClick={sendData3}>
          中国人
        </div>
        <div className="lngcomp2" onClick={sendData4}>
          Español
        </div>
      </LNG>
    </nav>
  );
}

export default Navbar;
