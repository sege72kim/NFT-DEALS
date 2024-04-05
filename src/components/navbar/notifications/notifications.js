import "./style.css"
function Notifications ({active, setActive, children}) {
    return (
        <div className = {active ? "modalnot active" : "modalnot"} onClick={()=> setActive(false) }>
        <div className={active ? "modalnot_content active" : "modalnot_content"} onClick = {e => e.stopPropagation()}>
        {children}
        </div>
    </div>
    );
}

export default Notifications