import DealsBlock from "./dealsblock/Dealsblock";
import Header from "./header/Header";
import React from "react";
import { useTonWallet } from "@tonconnect/ui-react";
import Registration from "../registration/registration";

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
