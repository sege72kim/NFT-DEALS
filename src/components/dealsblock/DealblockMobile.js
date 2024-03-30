import InfoBlock from './components/Infoblock/info-block';
import NftBlock from './components/NFTBlock/nft-block';
import UserSearch from './components/SearchBlock/user-search';
import data from './components/NFTBlock/ListOfNFTs/data';
import './style.css'
const DealsblockMobile = () => {
    const userData = data.find(user => user.username === 'user1');
    const userData2 = data.find(user => user.username === 'user2');
    return ( 
        /*<UserSearch textsearch = "Choose user for deal" />*/ 
    <section className = "dealsblock">
        <div className = "container3">
        <InfoBlock who="Seller"/>
        </div>
        <div className = "container3">
        <NftBlock giveget="You Give" text1="Add TON" text2="You can offer TON to the user for the deal" data={userData.items} />
        </div>
        <div className = "container3">
        <InfoBlock who="Recipient"/>
        </div>
        <div className = "container3">
        <NftBlock giveget="You Get" text1="Request TON" text2="You can request TON for the deal" data={userData2.items} />
        </div>
        <div className = "container4">
        <div className = "applybuttonmin">
                <p>Send Deal</p>
             </div>
             </div>
    </section> 
    );
}

export default DealsblockMobile;