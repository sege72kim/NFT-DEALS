import "./style.css";
function MenuModal({ active, setActive, children }) {
  return (
    <div
      className={active ? "modalnot active" : "modalnot"}
      onClick={() => setActive(false)}
    >
      <div className="modalcontainer_menu">
        <div
          className={
            active ? "modal_content_menu active" : "modal_content_menu"
          }
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
