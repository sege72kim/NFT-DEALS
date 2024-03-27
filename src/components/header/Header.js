import './style.css'
const Header = () => {
    return (
    <section className="header">
        <div classname="container2">
                <div className = "left-header">
                    <h1 className="header__title">
                        <strong>NFT Deals</strong>
                    </h1>
                    <div className="header__text">
                        <p>Make deals with another users</p>
                    </div>
                </div>
                <div className = "right-header">
                    <button className="rectangle-button">My NFT Deals</button>
                </div>
        </div>
    </section>
    );
}
export default Header;
