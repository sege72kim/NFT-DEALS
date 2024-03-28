
import InfoBlock from './components/Infoblock/info-block';
import UserSearch from './components/SearchBlock/user-search';
import './style.css'
const Dealsblock = () => {
    return ( 
    <section className = "dealsblock">
        <div className = "container3">
        <InfoBlock who="Seller"/>
        <UserSearch/>
        </div>
    </section>   
    );
}
export default Dealsblock;