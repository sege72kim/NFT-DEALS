import './style.css'
const Header = () => {
    return (
    <section className="header">
                <div className = "left-header">
                    <h1 className="header__title">
                        <strong>Hamster Exchange</strong>
                    </h1>
                    <div className="header__text">
                        <p> NFT P2P Exchange Guarantor Service</p>
                    </div>
                </div>
                <div className = "right-header">
                    <button className="rectangle-button">Complete Trade</button>
                </div>
    </section>
    );
}
export default Header;