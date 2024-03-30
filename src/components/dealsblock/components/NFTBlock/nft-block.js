import React, { useState } from 'react';
import ListComponent from './ListOfNFTs/listcomponent';
import Modal from '../../../modalBlock/modal';
import './style.css';
import data from './ListOfNFTs/data';
import UserSearch from '../SearchBlock/user-search';

const NftBlock = (props, {data}) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Состояние для выбранного элемента

  const handleItemClick = (item) => {
    // Если выбран тот же элемент, отменяем выбор
    setSelectedItem((prevItem) => (prevItem === item ? null : item));
  };

  return (
    <div className="nftblock">
      <div className="info-text3">
        {props.giveget}
      </div>
      <div className="button-container">
        
        <button className="button" onClick={() => setModalActive(true)}>
            <div className = 'leftbuttonpart'>
          <div className="buttonp">
            <div className="plus">+</div>
          </div>
          <div className="buttontxt">
            NFT
          </div>
          </div>
          <div className = "pickedavatars">
           <img className = "avatarnft" src="https://pbs.twimg.com/media/FL4Ti0MXoAkpfmc.jpg"/>
            <img className = "avatarnft" src="https://pbs.twimg.com/media/FL4Ti0MXoAkpfmc.jpg"/>
            <img className = "avatarnft" src="https://pbs.twimg.com/media/FL4Ti0MXoAkpfmc.jpg"/>
            <img className = "avatarnft" src="https://pbs.twimg.com/media/FL4Ti0MXoAkpfmc.jpg"/>
          </div>
        </button>


        <button className="button" onClick={() => setModalActive2(true)}>
        <div className = 'leftbuttonpart'>
          <div className="buttonp">
            <div className="plus">+</div>
          </div>
          <div className="buttontxt">
            TON
          </div>
          </div>
          <div className = "pickedavatars">
           <img className = "avatarnft" src="https://pbs.twimg.com/media/FL4Ti0MXoAkpfmc.jpg"/>
          </div>
        </button>
        
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="first-modalblock">
          <div className="modal-text">
            NFTs for the deal
          </div>
          <div className="cross" onClick={() => setModalActive(false)}></div>
        </div>
        <div className="second-modalblock">
          You can select up to <strong>4 NFTs</strong>
        </div>
        <div>
          <ListComponent data={props.data} onItemClick={handleItemClick} />
        </div>
        <div className = "applybutton" onClick={() => setModalActive(false)}>
                <p>Apply</p>
             </div>
      </Modal>

      <Modal active={modalActive2} setActive={setModalActive2}>
        <div className="first-modalblock2">
            <div className="modal-text">
                {props.text1}
            </div>
          <div className="cross" onClick={() => setModalActive2(false)}></div>
        </div>
             <div className="second-modalblock2">
                {props.text2}
             </div>
             <UserSearch textsearch = "Min 1 TON"/>
             <div className = "applybutton" onClick={() => setModalActive2(false)}>
                <p>Apply</p>
             </div>
      </Modal>
    </div>
  );
};

export default NftBlock;