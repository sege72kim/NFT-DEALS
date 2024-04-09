import React, { useState } from "react";
import ListComponent from "./ListOfNFTs/listcomponent";
import Modal from "../../../modalBlock/modal";
import "./style.css";
import UserSearch from "../SearchBlock/user-search";
import HMSTR from "../../../../logos/HMSTR.jpg";
import GRAM from "../../../../logos/GRAM.jpg";
import TON from "../../../../logos/TON.jpg";
import { FormattedMessage } from "react-intl";
import defavatar from "../../../../logos/defavatar.png";

const NftBlock = (props) => {
  const [userData, setUserData] = useState("");
  const [userData2, setUserData2] = useState("");
  const [userData3, setUserData3] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showInitialBlock, setShowInitialBlock] = useState(true); // добавлено состояние для отображения блока по умолчанию
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const handleInputChange = (value) => {
    setUserData(value);
  };

  const handleInputChange2 = (value) => {
    setUserData2(value);
  };

  const handleInputChange3 = (value) => {
    setUserData3(value);
  };

  const handleUserSearchApply = (value) => {
    setUserData(value);
    setUserData2("");
    setUserData3("");
    setModalActive2(false);
  };
  const handleUserSearchApply2 = (value) => {
    setUserData("");
    setUserData2(value);
    setUserData3("");
    setModalActive2(false);
  };
  const handleUserSearchApply3 = (value) => {
    setUserData("");
    setUserData2("");
    setUserData3(value);
    setModalActive2(false);
  };
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShowInitialBlock(false);
  };

  const handleBlocksSelection = (selectedBlocks) => {
    setSelectedBlocks(selectedBlocks);
    setModalActive(false);
  };

  return (
    <div className="nftblock">
      <div className="info-text3">{props.giveget}</div>
      <div className="button-container">
        <button className="button" onClick={() => setModalActive(true)}>
          <div className="leftbuttonpart">
            <div className="buttonp">
              <div className="plus">+</div>
            </div>
            <div className="buttontxt">NFT</div>
          </div>
          <div>
            {selectedBlocks.length === 0 && (
              <div className="pickedavatars">
                <img className="avatarnft" src={defavatar} alt="nft" />
                <img className="avatarnft" src={defavatar} alt="nft" />
                <img className="avatarnft" src={defavatar} alt="nft" />
                <img className="avatarnft" src={defavatar} alt="nft" />
              </div>
            )}

            {selectedBlocks.length === 1 && (
              <div className="pickedavatars">
                <img className="avatarnft" src={defavatar} alt="nft" />
                <img className="avatarnft" src={defavatar} alt="nft" />
                <img className="avatarnft" src={defavatar} alt="nft" />
                {selectedBlocks.map((item) => (
                  <img
                    key={item.id}
                    className="avatarnft"
                    src={item.image}
                    alt="nft"
                  />
                ))}
              </div>
            )}
            {selectedBlocks.length === 2 && (
              <div className="pickedavatars">
                <img className="avatarnft" src={defavatar} alt="nft" />
                <img className="avatarnft" src={defavatar} alt="nft" />
                {selectedBlocks.map((item) => (
                  <img
                    key={item.id}
                    className="avatarnft"
                    src={item.image}
                    alt="nft"
                  />
                ))}
              </div>
            )}
            {selectedBlocks.length === 3 && (
              <div className="pickedavatars">
                <img className="avatarnft" src={defavatar} alt="nft" />
                {selectedBlocks.map((item) => (
                  <img
                    key={item.id}
                    className="avatarnft"
                    src={item.image}
                    alt="nft"
                  />
                ))}
              </div>
            )}
            {selectedBlocks.length === 4 && (
              <div className="pickedavatars">
                {selectedBlocks.map((item) => (
                  <img
                    key={item.id}
                    className="avatarnft"
                    src={item.image}
                    alt="nft"
                  />
                ))}
              </div>
            )}
          </div>
        </button>

        <button className="button" onClick={() => setModalActive2(true)}>
          <div className="leftbuttonpart">
            <div className="buttonp">
              <div className="plus">+</div>
            </div>
            <div className="buttontxt">CRYPTO</div>
          </div>
          <div className="pickedavatars">
            {userData || userData2 || userData3 ? (
              <>
                <div className="text-userData">
                  {userData && (
                    <div className="text-avatar">
                      {userData}{" "}
                      <img className="avatarnfts" src={TON} alt="nft" />
                    </div>
                  )}
                </div>
                <div className="text-userData">
                  {userData2 && (
                    <div className="text-avatar">
                      {userData2}{" "}
                      <img className="avatarnfts" src={HMSTR} alt="nft" />
                    </div>
                  )}
                </div>
                <div className="text-userData">
                  {userData3 && (
                    <div className="text-avatar">
                      {userData3}{" "}
                      <img className="avatarnfts" src={GRAM} alt="nft" />
                    </div>
                  )}
                </div>
              </>
            ) : (
              <img className="avatarnfts" src={defavatar} alt="nft" />
            )}
          </div>
        </button>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="first-modalblock">
          <div className="modal-text">
            {<FormattedMessage id="nftsfordeal" />}
          </div>
          <div className="cross" onClick={() => setModalActive(false)}></div>
        </div>
        <div className="second-modalblock">
          {<FormattedMessage id="youcanselect" />}
          <strong>4 NFTs</strong>
        </div>
        <div>
          <ListComponent
            data={props.data}
            searchtxt={<FormattedMessage id="searchnft" />}
            onClickBlocks={handleBlocksSelection}
          />
        </div>
      </Modal>

      <Modal active={modalActive2} setActive={setModalActive2}>
        <div className="first-modalblock2">
          <div className="modal-text">{props.text1}</div>
          <div className="cross" onClick={() => setModalActive2(false)}></div>
        </div>
        <div className="second-modalblock2">{props.text2}</div>

        <div className="choosecrypto">
          <div className="content">
            <div className="select-container">
              <select
                value={selectedOption}
                onChange={handleChange}
                className="select-box"
              >
                <option value="option0">
                  {<FormattedMessage id="choosecryptodeal" />}
                </option>
                <option value="option1">TON</option>
                <option value="option2">HMSTR</option>
                <option value="option3">GRAM</option>
              </select>
            </div>
            {selectedOption === "option1" && (
              <UserSearch
                textsearch="Min 1 TON"
                onInputChange={handleInputChange}
                onApply={handleUserSearchApply}
                balance={props.balanceTON}
                balancename=" TON"
              />
            )}
            {selectedOption === "option2" && (
              <UserSearch
                textsearch="Min 1 HAMSTER"
                onInputChange={handleInputChange2}
                onApply={handleUserSearchApply2}
                balance={props.balanceHMSTR}
                balancename=" HMSTR"
              />
            )}
            {selectedOption === "option3" && (
              <UserSearch
                textsearch="Min 1 GRAM"
                onInputChange={handleInputChange3}
                onApply={handleUserSearchApply3}
                balance={props.balanceGRAM}
                balancename=" GRAM"
              />
            )}
            {selectedOption === "option0" && (
              <div className="initial-block">
                {<FormattedMessage id="choosecryptodeal" />}
              </div>
            )}
            {showInitialBlock && (
              <div className="initial-block">
                {<FormattedMessage id="choosecryptodeal" />}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NftBlock;
