import React from 'react';
import "./style.css"
const Modalton = ({active2, setActive2, children}) => {
    return (
    <div className = {active2 ? "modal active" : "modal"} onClick={()=> setActive2(false) }>
        <div className={active2 ? "modal_content2 active" : "modal_content2"} onClick = {e => e.stopPropagation()}>
        {children}
        </div>
    </div>
    );
}
export default Modalton;
