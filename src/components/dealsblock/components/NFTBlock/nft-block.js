import React, { useState } from 'react';
import ListComponent from './ListOfNFTs/listcomponent';
import Modal from '../../../modalBlock/modal';
import './style.css';
import data from './ListOfNFTs/data';
import UserSearch from '../SearchBlock/user-search';

const NftBlock = (props) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Состояние для выбранного элемента
  const [selectedOption, setSelectedOption] = useState('');
  const [showInitialBlock, setShowInitialBlock] = useState(true); // добавлено состояние для отображения блока по умолчанию

  const handleItemClick = (item) => {
    // Если выбран тот же элемент, отменяем выбор
    setSelectedItem((prevItem) => (prevItem === item ? null : item));
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShowInitialBlock(false); // скрыть блок по умолчанию после выбора опции
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
           <img  src="https://kartinki.pics/uploads/posts/2022-12/thumbs/1670431842_54-kartinkin-net-p-serii-kvadrat-kartinka-oboi-56.jpg"/>
            <img  src="https://kartinki.pics/uploads/posts/2022-12/thumbs/1670431842_54-kartinkin-net-p-serii-kvadrat-kartinka-oboi-56.jpg"/>
            <img  src="https://kartinki.pics/uploads/posts/2022-12/thumbs/1670431842_54-kartinkin-net-p-serii-kvadrat-kartinka-oboi-56.jpg"/>
            <img  src="https://kartinki.pics/uploads/posts/2022-12/thumbs/1670431842_54-kartinkin-net-p-serii-kvadrat-kartinka-oboi-56.jpg"/>
          </div>
        </button>


        <button className="button" onClick={() => setModalActive2(true)}>
        <div className = 'leftbuttonpart'>
          <div className="buttonp">
            <div className="plus">+</div>
          </div>
          <div className="buttontxt">
            CRYPTO
          </div>
          </div>
          <div className = "pickedavatars">
           <img className = "avatarnft" src="https://kartinki.pics/uploads/posts/2022-12/thumbs/1670431842_54-kartinkin-net-p-serii-kvadrat-kartinka-oboi-56.jpg"/>
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

             <div className="choosecrypto">
             <div className="content">
              <div className = "select-container">
          <select value={selectedOption} onChange={handleChange} className="select-box">
           <option value="option0">Choose crypto for deal</option>
            <option value="option1">TON</option>
           <option value="option2">HMSTR</option>
           <option value="option3">GRAM</option>
          </select>
          </div>
             {selectedOption === 'option1' && <UserSearch textsearch = "Min 1 TON"/>}
             {selectedOption === 'option2' && <UserSearch textsearch = "Min 1 HAMSTER"/>}
             {selectedOption === 'option3' && <UserSearch textsearch = "Min 1 GRAM"/>}
             {selectedOption === 'option0' && <div className="initial-block">Choose crypto for deal</div>}
             {showInitialBlock && <div className="initial-block">Choose crypto for deal</div>} {/* блок по умолчанию */}
          </div>
           </div>
             <div className = "applybutton" onClick={() => setModalActive2(false)}>
                <p>Apply</p>
             </div>
      </Modal>
    </div>
  );
};

export default NftBlock;