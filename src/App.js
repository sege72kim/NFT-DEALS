import "./styles/main.css"
import "./styles/reset.css"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Dealsblock from "./components/dealsblock/Dealsblock"
import { IntlProvider } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const locale = LOCALES.ENGLISH

    return (
    // <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
    <IntlProvider messages={messages[locale]} locale='en' defaultLocale='en'>
     <div className="App"> 
    <Navbar/>
    <Header/>
    <Dealsblock/>
    </div> 
    </IntlProvider>
    // </TonConnectUIProvider> 
  );
}

export default App;