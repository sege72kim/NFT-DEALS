import React from "react";
import { useTonWallet } from "@tonconnect/ui-react";
import DealsBlock from "../../components/mainPageComponents/dealsblock/Dealsblock";
import Header from "../../components/mainPageComponents/header/Header";
import Registration from "../registration/Registration";

const Main = () => {
  const wallet = useTonWallet();
  return (
    <div>
      {wallet ? (
        <div>
          <Header />
          <DealsBlock />
        </div>
      ) : (
        <div>
          <Registration />
        </div>
      )}
    </div>
  );
};

export default Main;
