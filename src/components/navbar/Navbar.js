import "./style.css"
import React, { useState } from 'react';
import Notifications from "./notifications/notifications";
import push from "./push.png"
function Navbar () {
    const [modalActive, setModalActive] = useState(false);
    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>Place for logo</strong> </a>

                <ul className="nav-list">
                     <li className = "nav-list__item" onClick={() => setModalActive(true)}>
                        <noftificationbutton>
                            <img src={push} className="push"></img>
                        </noftificationbutton>
                     </li>
                    <li className="nav-list__item"><a href="#" className="round-button" >Your Link</a></li> 
                </ul>
            </div>
        </div>

        <Notifications active={modalActive} setActive={setModalActive}>
        
      </Notifications>
    </nav>
    );
}

export default Navbar