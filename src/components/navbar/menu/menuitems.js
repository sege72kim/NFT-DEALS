import "./style.css";
function MenuItem(props) {
  return (
    <div className="menu_item">
      <img className="menu_icon" src={props.image} />
      <h1>{props.text}</h1>
    </div>
  );
}
export default MenuItem;
