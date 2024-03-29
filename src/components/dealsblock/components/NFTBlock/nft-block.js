import ListComponent from './ListOfNFTs/listcomponent';
import Modal from '../../../modalBlock/modal';
import './style.css'
import React, {useState} from 'react';
import data from './ListOfNFTs/data';
const NftBlock = (props) => {
    const [modalActive,setModalActive] = useState(false);
    const [modalActive2,setModalActive2] = useState(false);
    return (


    <div className="nftblock">
    <div className="info-text3">
        {props.giveget}
    </div>
    <div className="button-container">
         <button className="button" onClick = {() => setModalActive(true)}>
            <div className="buttonp">
                <div className = "plus">+</div>
            </div>
            <div className="buttontxt">
                NFT
            </div>
        </button>
         <button className="button" onClick = {() => setModalActive2(true)}>
            <div className="buttonp">
                <div className = "plus">+</div>
            </div>
            <div className="buttontxt">
                TON
            </div>
        </button>
    </div>

    <Modal active={modalActive} setActive={setModalActive}>
            <div className = "first-modalblock">
                <div className = "modal-text">
                     NFTs for the Deal
                </div>
                <div className ="cross" onClick={() => setModalActive(false)}></div>
            </div>
            <div className="second-modalblock">
                You can select up to <strong>4 NFTs</strong>
            </div>
            <div>
            <ListComponent data={props.data} />
            </div>
        </Modal>

        <Modal active={modalActive2} setActive={setModalActive2}>
    <div className="first-modalblock2">
        <div className="modal-text">
            {props.text1}
        </div>
        <div className="cross" onClick={() => setModalActive2(false)}>
        </div>
    </div>
    <div className="second-modalblock2">
        {props.text2}
    </div>
</Modal>

    </div>
);
}
 
export default NftBlock;