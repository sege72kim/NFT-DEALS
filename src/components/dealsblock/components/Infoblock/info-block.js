import './style.css'
const InfoBlock = (props) => {
    return ( 
        <div className="info-block">
                <div className="avatar"></div> {}
                <div className = "content-container">
                    <p className = "little-text">{props.who}</p>
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
     );
 }
  
 export default InfoBlock;