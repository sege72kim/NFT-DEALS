import React from "react";
import "./style.css";
import { useTonConnectModal } from "@tonconnect/ui-react";
import { FormattedMessage } from "react-intl";
import Slideshow from "./reg-slideshow";

export const ModalControl = () => {
  const { open } = useTonConnectModal();

  return (
    <button className="modalcontrol" onClick={open}>
      Connect Wallet
    </button>
  );
};
const images = [
  "https://i.getgems.io/NwcEYiPT588h9KkkILaZC6vR6dSaWt5WLOKYVdYu_lM/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvMy9pbWFnZS5wbmc",
  "https://i.getgems.io/pwW6Y9cX0cwfrOfv_X6YBRteBHXTffMt3Ej195rN9HE/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvNTgvaW1hZ2UucG5n",
  "https://i.getgems.io/YNV-0xHE466rpYBCuNKokNnj_sheORDXo_OU5wNQwac/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvMTAwMDA2MS9pbWFnZS5wbmc",
];
const images2 = [
  "https://i.getgems.io/pwW6Y9cX0cwfrOfv_X6YBRteBHXTffMt3Ej195rN9HE/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvNTgvaW1hZ2UucG5n",
  "https://i.getgems.io/YNV-0xHE466rpYBCuNKokNnj_sheORDXo_OU5wNQwac/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvMTAwMDA2MS9pbWFnZS5wbmc",
  "https://i.getgems.io/NwcEYiPT588h9KkkILaZC6vR6dSaWt5WLOKYVdYu_lM/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvMy9pbWFnZS5wbmc",
];

const Registration = () => {
  return (
    <div className="registration">
      <div className="reg-avatars">
        <Slideshow images={images} />
        <div className="reg-between">2</div>
        <Slideshow images={images2} />
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
