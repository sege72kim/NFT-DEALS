import React from 'react';
import "./style.css"
const Modalnft = ({active, setActive}) => {
    return (
    <div className = {active ? "modal active" : "modal"} onClick={()=> setActive(false) }>
        <div className={active ? "modal_content active" : "modal_content"} onClick = {e => e.stopPropagation()}>

        </div>
    </div>
    );
}
export default Modalnft;
