import JettonList from "./jettonlist";
import "./style.css";
import data from "../../../data";
const JettonsBlock = () => {
  const userData = data.find((user) => user.username === "UserName 228");
  return <JettonList data={userData.jettons} />;
};
export default JettonsBlock;
