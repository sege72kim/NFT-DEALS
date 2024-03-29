import "./styles/main.css"
import "./styles/reset.css"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Dealsblock from "./components/dealsblock/Dealsblock"

function App() {

    return (
    // <TonConnectUIProvider manifestUrl="http://localhost:3000/tonconnect-manifest.json">
     <div className="App"> 
    <Navbar/>
    <Header/>
    <Dealsblock/>
    </div> 
    // </TonConnectUIProvider>
  );
}

export default App;