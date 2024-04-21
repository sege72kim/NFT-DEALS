import HistoryList from "./historyList";
import "./style.css";
import history from "../../../history";
const HistoryBlock = () => {
  return <HistoryList data={history} />;
};
export default HistoryBlock;
