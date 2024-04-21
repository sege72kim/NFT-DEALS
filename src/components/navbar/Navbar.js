import "./style.css";
import React, { useState, useEffect } from "react";
import Notifications from "./notifications/notifications";
import LNG from "./notifications/lng";
import { FormattedMessage } from "react-intl";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Link } from "react-router-dom";
import { useTonWallet } from "@tonconnect/ui-react";
import { FaCopy } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineBgColors } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import { IoChevronBackCircle } from "react-icons/io5";

export const DropDownMenu=()=>{

  return(
    <div>
      <DropMenu>
        <DropDownItems/>    
      </DropMenu>
    </div>

  )

  

  const [open,setOpen]=useState(false);
  let menuRef = useState();
  useEffect(()=> {
    let handler =(e)=>{
      if(!menuRef.current.contains(e.target)){
      setOpen(false);
      console.log(menuRef.current);
    }
  };
    document.addEventListener("mousedown",handler);

    return()=>{
      document.removeEventListener("mousedown",handler);
    }
  });


  function DropMenu(props){

    const [open,setOpen]=useState(false);

    return(
      <div className="DropDownSection">
        <h1 className="menudrop"onClick={()=>{setOpen(!open)}} >Menu <IoIosMenu />{props.menu}</h1>

        {open && props.children}

      </div>
    )
  };
 
}
function DropDownItems(){

  const [activeMenu,setActiveMenu]=useState('main');
  const [menuHeight,setMenuHeight]=useState(null);

  function calcHeight(el){
    const height =el.offsetHeight;
    setMenuHeight(height);
  }

function DropDownItems1(props){
  return(
    <a className="menudropp" onClick={() =>props.goToMenu && setActiveMenu(props.goToMenu)}>
      <span className="iconleft">
        {props.lefticon}
        </span>
      {props.children}
    </a>
  )
}

  return( 
    <div className ="DropDown1"style={{height:menuHeight}}>
      <CSSTransition in={activeMenu === 'main'}
    unmountOnExit timeout={500}
     className="primaryMenu"
     onEnter={calcHeight}>
      <div className="menu">
        <DropDownItems1 lefticon={<FaCopy/>}>Copy Link</DropDownItems1>
        <DropDownItems1 lefticon={<GrLanguage /> } goToMenu="language">Language</DropDownItems1>
        <DropDownItems1 lefticon={<AiOutlineBgColors/>} goToMenu="custom">Customization</DropDownItems1>
        <DropDownItems1 lefticon={<CgProfile/>}>Your Profile</DropDownItems1>
        <DropDownItems1 lefticon={<TbLogout2 />}>Log out</DropDownItems1>

      </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'language' }
    unmountOnExit timeout={500}
     className="secondaryMenu">
      <div className="menu">
      <DropDownItems1 lefticon={<IoChevronBackCircle />} goToMenu="main" />
        <DropDownItems1 >English</DropDownItems1>
        <DropDownItems1 >Русский</DropDownItems1>
        <DropDownItems1 >中国人</DropDownItems1>
        <DropDownItems1 >Español</DropDownItems1>
        <DropDownItems1 >한국인</DropDownItems1>

      </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'custom' }
    unmountOnExit timeout={500}
     className="secondaryMenu">
      <div className="menu">
      <DropDownItems1 lefticon={<IoChevronBackCircle />} goToMenu="main" />
        <DropDownItems1 >Legend</DropDownItems1>
        <DropDownItems1 >Myth</DropDownItems1>
        <DropDownItems1 >Epic</DropDownItems1>
        <DropDownItems1 >Rare</DropDownItems1>
        <DropDownItems1 >Uncommon</DropDownItems1>
        <DropDownItems1 >Common</DropDownItems1>
      </div>
      </CSSTransition>



   </div>
    
  );
}

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
          <DropDownMenu/>
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
