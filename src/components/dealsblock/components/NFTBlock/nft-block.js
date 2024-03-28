const NftBlock = () => {
    return (
    <div className="nftblock">
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
);
}
 
export default NftBlock;