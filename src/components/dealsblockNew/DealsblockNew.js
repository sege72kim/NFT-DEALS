import Modalnft from '../modalBlockNft/modalnft';
import Modalton from '../modalBlockTon/modalton';
import './style.css'
import React, {useState} from 'react';
const DealsblockNew = () => 
{
    const [modalActive,setModalActive] = useState(false);
    const [modalActive2,setModalActive2] = useState(false);
    return(
        <div>
        <div className = "dealsblock">
        <div className="container3">

            <div className="info-block">
                <div className="avatar"></div> {}
                <div className = "content-container">
                    <p className = "little-text">Sender</p>
                    <h1 className = "little-text2">UserName</h1>
                </div>
                    <div className="column-container">
                        <h3 className = "little-text3">GLINT</h3>
                        < p>2</p>
                    </div>
                    <div className="column-container">
                        <h3 className = "little-text3">TON</h3>
                        <p>3</p>
                     </div>
        
            </div>



            <div className="info-block">
                <div className="avatar"></div> {}
                <div className = "content-container">
                    <p className = "little-text">Recipient</p>
                    <h1 className = "little-text2">UserName</h1>
                </div>
                    <div className="column-container">
                        <h3 className = "little-text3">GLINT</h3>
                        < p>2</p>
                    </div>
                    <div className="column-container">
                        <h3 className = "little-text3">TON</h3>
                        <p>3</p>
                    </div>
        
                </div>
            
            </div>


        <div className = "container3">
            <div className="seller-info">
                <div className="info-text3">
                    You Give
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
            </div>

            <div className="recipient-info">
                <div className="info-text3">
                    You Get
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
            </div>
        </div>
        </div>


        <Modalnft active={modalActive} setActive={setModalActive}>
            <div className = "first-modalblock">
                <div className = "modal-text">
                     NFTs for the Deal
                </div>
                <div className ="cross" ></div>
            </div>
            <div className="second-modalblock">
                You can select up to <strong>4 NFTs</strong>
            </div>
        </Modalnft>
        <Modalton active2={modalActive2} setActive2={setModalActive2}>
        <div className = "first-modalblock2">
                <div className = "modal-text">
                     Add Ton
                </div>
                <div className ="cross" ></div>
            </div>
            <div className="second-modalblock2">
                You can offer TON to the user for the deal
            </div>
        </Modalton>
        </div>
    )
}
export default DealsblockNew;