import './style.css'
const InfoBlock = (props) => {
    return ( 
        <div className="info-block">
                <img className="avatar" src = "https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png"/>
                <div className = "content-container">
                    <p className = "little-text">{props.who}</p>
                    <h1 className = "little-text2">{props.username}</h1>
                </div>
                    <div className="column-container">
                        <h3 className = "little-text3">HAMSTERS</h3>
                        <strong>{props.glint}</strong>
                    </div>
                    <div className="column-container">
                        <h3 className = "little-text3">TON</h3>
                        <strong>{props.ton}</strong>
                     </div>
        
        </div>
     );
 }
  
 export default InfoBlock;