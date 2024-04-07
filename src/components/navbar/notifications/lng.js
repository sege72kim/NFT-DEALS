import "./style.css"
function LNG ({active, setActive, children}) {
    return (
        <div className = {active ? "modalnot active" : "modalnot"} onClick={()=> setActive(false) }>
            <div className = "modalcontainerlg">
             <div className={active ? "modallg_content active" : "modallg_content"} onClick = {e => e.stopPropagation()}>
             {children}
             </div>
            </div>
    </div>
    );
}

export default LNG