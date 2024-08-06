import React from "react";
import { useTonWallet } from "@tonconnect/ui-react";
import DealsBlock from "../../components/mainPage/dealsblock/Dealsblock";
import Header from "../../components/mainPage/header/Header";
import Registration from "../registration/Registration";

const Main = () => {
  const wallet = useTonWallet();
  return (
    <div>
      {wallet ? (
        <div>
          <div className="main_component">
            <Header />
            <DealsBlock />
          </div>
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
