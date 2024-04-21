import "./style.css";
import data from "../../../data";
import NftList from "./nftlist";
const UserNftBlock = () => {
  const userData = data.find((user) => user.username === "UserName 228");
  return (
    <div>
      <NftList data={userData.items} />
    </div>
  );
};
export default UserNftBlock;
