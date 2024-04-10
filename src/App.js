import "./styles/main.css";
import "./styles/reset.css";
import Navbar from "./components/navbar/Navbar";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { useState } from "react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/main";
import History from "./components/history/history";

function App() {
  const [dataFromChild, setDataFromChild] = useState("");
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  let locale = LOCALES.ENGLISH;
  if (dataFromChild === "en") {
    locale = LOCALES.ENGLISH;
  } else if (dataFromChild === "ru") {
    locale = LOCALES.RUSSIAN;
  } else if (dataFromChild === "chs") {
    locale = LOCALES.CHINES;
  } else if (dataFromChild === "es") {
    locale = LOCALES.SPANISH;
  } else if (dataFromChild === "ar") {
    locale = LOCALES.ARAB;
  }

  return (
    <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
      <IntlProvider messages={messages[locale]} locale="en" defaultLocale="en">
        <Navbar sendDataToParent={handleDataFromChild} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </IntlProvider>
    </TonConnectUIProvider>
  );
}

export default App;
