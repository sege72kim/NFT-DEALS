import InfoBlock from './components/Infoblock/info-block';
import NftBlock from './components/NFTBlock/nft-block';
import UserSearch from './components/SearchBlock/user-search';
import data from './components/NFTBlock/ListOfNFTs/data';
import data2 from './components/NFTBlock/ListOfNFTs/data2';
import './style.css'
const DealsblockMobile = () => {
    return ( 
        /*<UserSearch/>*/ 
    <section className = "dealsblock">
        <div className = "container3">
        <InfoBlock who="Seller"/>
        </div>
        <div className = "container3">
        <NftBlock giveget="You Give" text1="Add TON" text2="You can offer TON to the user for the deal"data={data}/>
        </div>
        <div className = "container3">
        <InfoBlock who="Recipient"/>
        </div>
        <div className = "container3">
        <NftBlock giveget="You Get" text1="Request TON" text2="You can request TON for the deal"data={data2}/>
        </div>
    </section> 
    );
}

export default DealsblockMobile;