import InfoBlock from './components/Infoblock/info-block';
import NftBlock from './components/NFTBlock/nft-block';
import UserSearch from './components/SearchBlock/user-search';
import data from './components/NFTBlock/ListOfNFTs/data';
import './style.css'
const DealsblockDesktop = () => {
    const userData = data.find(user => user.username === 'Yudzin228');
    const userData2 = data.find(user => user.username === 'UserName 223');
    return ( 
         /*<UserSearch textsearch = "Choose user for deal" />*/ 
        /* <InfoBlock who="Recipient"/> */
    <section className = "dealsblock">
        <div className = "container3">
        <InfoBlock who="Seller" username={userData.username} glint={userData.glint} ton={userData.ton}/>
        <InfoBlock who="Recipient" username={userData2.username} glint={userData2.glint} ton={userData2.ton}/>
        </div>
        <div className = "container3">
        <NftBlock giveget="You Give" text1="Add TON" text2="You can offer TON to the user for the deal" data={userData.items} />
        <NftBlock giveget="You Get" text1="Request TON" text2="You can request TON for the deal"data={userData2.items}  />
        </div>
        <div className = "container4">
        <div className = "applybuttonmin">
                <p>Send Deal</p>
             </div>
             </div>
    </section>   
    );
}
export default DealsblockDesktop;