import './style.css'

const DealsblockNew = () => 
{
    return(
        <section className = "dealsblock">
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
                    <div className="button" tabIndex="0">
                         
                     </div>
                    <div className="button" tabIndex="0">
                         
                    </div>
                 </div>
            </div>

            <div className="recipient-info">
                <div className="info-text3">
                    You Get
                </div>
                <div className="button-container">
                    <div className="button" tabIndex="0">
                        
                     </div>
                    <div className="button" tabIndex="0">
                         
                    </div>
                 </div>
            </div>
        </div>
        </section>
    )
}
export default DealsblockNew;