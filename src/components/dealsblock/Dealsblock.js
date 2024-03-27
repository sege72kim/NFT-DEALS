import './style.css'
const Dealsblock = () => {
    return ( 
    <section className = "dealsblock">
        <div className="container3">
            <div className="info-block">
                <div className="avatar"></div> {/* Круглая картинка */}
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
            <div className="search-block">
                <input type="search-text" placeholder="Choose user for deal"/>
            </div>
            
        </div>
    </section>   
    );
}
export default Dealsblock;