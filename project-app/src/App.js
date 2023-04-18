import "./App.css";
import Main from "./components/Main";
import Infor from "./components/Infor";
import Detail from "./components/Detail";
import Others from "./components/Others";
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Main />
      <Infor />
      <Detail/>
      <Others/>
    </div>
  );
}

export default App;
