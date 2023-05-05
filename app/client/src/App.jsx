import { EthProvider } from "./contexts/EthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Main from "./components/pages/Main";
import Admin from "./components/pages/Admin";
import Electeur from "./components/pages/Electeur";


function App() {
  return (

    <EthProvider>
      <div id="App">
        <div className="container">

        </div>
      </div>
    </EthProvider>
  );
}

export default App;
