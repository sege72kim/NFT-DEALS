import "./style.css"
function Navbar () {
    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>Place for logo</strong> </a>

                <ul className="nav-list">
                    <li className="nav-list__item"><a href="#" className="round-button" >Place for link</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar