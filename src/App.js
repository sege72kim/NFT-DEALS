import "./styles/main.css"
import "./styles/reset.css"
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Dealsblock from "./components/dealsblock/Dealsblock"
import DealsblockNew from "./components/dealsblockNew/DealsblockNew"

function App() {

    return (
    <div className="App"> 
    <Navbar/>
    <Header/>
    <Dealsblock/>
    <DealsblockNew/>
    </div>
  );
}

export default App;