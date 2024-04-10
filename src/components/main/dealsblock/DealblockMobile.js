import InfoBlock from "./components/Infoblock/info-block";
import NftBlock from "./components/NFTBlock/nft-block";
import data from "./components/NFTBlock/ListOfNFTs/data";
import { FormattedMessage } from "react-intl";
import "./style.css";
const DealsblockMobile = () => {
  const userData = data.find((user) => user.username === "UserName 228");
  const userData2 = data.find((user) => user.username === "UserName 223");
  return (
    /*<UserSearch textsearch = "Choose user for deal" />*/
    <section className="dealsblock">
      <div className="container3">
        <InfoBlock
          who={<FormattedMessage id="seller" />}
          username={userData.username}
          glint={userData.hamsters}
          ton={userData.ton}
        />
      </div>
      <div className="container3">
        <NftBlock
          giveget={<FormattedMessage id="yougive" />}
          text1={<FormattedMessage id="addcr" />}
          text2={<FormattedMessage id="canyoucr" />}
          data={userData.items}
          balanceTON={userData.ton}
          balanceHMSTR={userData.hamsters}
          balanceGRAM={userData.gram}
        />
      </div>
      <div className="container3">
        <InfoBlock
          who={<FormattedMessage id="recipient" />}
          username={userData2.username}
          glint={userData2.hamsters}
          ton={userData2.ton}
        />
      </div>
      <div className="container3">
        <NftBlock
          giveget={<FormattedMessage id="youget" />}
          text1={<FormattedMessage id="reqcr" />}
          text2={<FormattedMessage id="canyoucr2" />}
          data={userData2.items}
          balanceTON={userData2.ton}
          balanceHMSTR={userData2.hamsters}
          balanceGRAM={userData2.gram}
        />
      </div>
      <div className="container4">
        <div className="applybuttonmin">
          <p>{<FormattedMessage id="senddeal" />}</p>
        </div>
      </div>
    </section>
  );
};

export default DealsblockMobile;
