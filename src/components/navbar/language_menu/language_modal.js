import "./style.css";
function LanguageModal({ active, setActive, children }) {
  return (
    <div
      className={active ? "modalnot active" : "modalnot"}
      onClick={() => setActive(false)}
    >
      <div className="modalcontainer_lang">
        <div
          className={
            active ? "modal_content_lang active" : "modal_content_lang"
          }
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default LanguageModal;
