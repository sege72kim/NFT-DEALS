import "./style.css"
import React, { useState } from 'react';
import Notifications from "./notifications/notifications"
import push from "./push.png"
import logo from "./logo.png"
import { FormattedMessage } from 'react-intl'
import { LOCALES } from '../../i18n/locales'
import CustomSelect from "./customselect";
function Navbar () {
    const [modalActive, setModalActive] = useState(false);
    const languages = [
        { name: 'English', code: LOCALES.ENGLISH },
        { name: 'Русский', code: LOCALES.RUSSIAN },
        { name: '中国人', code: LOCALES.CHINES },
        { name: 'Español', code: LOCALES.SPANISH },
        { name: 'عرب', code: LOCALES.ARAB }
      ]
    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <div>
                 <img href="./index.html" src={logo} className="logo"/>               
                 <a href="./index.html" className="logotxt"><strong>HEX</strong> </a>
                 </div>
                <ul className="nav-list">
                <CustomSelect/>
                <div class="pushbutton" onClick={() => setModalActive(true)}>
                            <img src={push} className="push"></img>
                 </div>
                    <div href="#" className="round-button" ><FormattedMessage id='yourlink' /> </div>
                </ul>
            </div>
        </div>

        <Notifications active={modalActive} setActive={setModalActive}>
        <div className="nottxt">
        <FormattedMessage id='notifications' />
        </div>
        <div className="notcomp">
            <img className="notpng" src="https://i.getgems.io/NwcEYiPT588h9KkkILaZC6vR6dSaWt5WLOKYVdYu_lM/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvMy9pbWFnZS5wbmc"/>
            <div className="notcomptxt">
                <div className="notcomptxth">
                    You received NFT <a>LOLZ#4</a>
                </div>
                <div className ="notcomptxtdata">
                    03.04.2024 11:40
                </div>
            </div>
        </div>
        <div className="notcomp">
            <img className="notpng" src="https://i.getgems.io/pwW6Y9cX0cwfrOfv_X6YBRteBHXTffMt3Ej195rN9HE/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvNTgvaW1hZ2UucG5n"/>
            <div className="notcomptxt">
                <div className="notcomptxth">
                    You received NFT <a>LOLZ#59</a>
                </div>
                <div className ="notcomptxtdata">
                    03.04.2024 10:30
                </div>
            </div>
        </div>
        <div className="notcomp">
            <img className="notpng" src="https://i.getgems.io/YNV-0xHE466rpYBCuNKokNnj_sheORDXo_OU5wNQwac/rs:fill:1000:0:1/g:ce/czM6Ly9nZXRnZW1zLW5mdC9uZnQvYy82NWU5OWUxZWQ4MGIwM2M0MmNmMGJhYWUvMTAwMDA2MS9pbWFnZS5wbmc"/>
            <div className="notcomptxt">
                <div className="notcomptxth">
                    You received NFT <a>LOLZ#62</a>
                </div>
                <div className ="notcomptxtdata">
                    01.04.2024 17:20
                </div>
            </div>
        </div>
        </Notifications>
    </nav>
    );
}

export default Navbar