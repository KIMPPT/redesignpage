import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { DataProvider } from "./context/DataContext";
import Cash from "./page/Cash";
import Bucket from "./page/Bucket";
import NavLink from "./components/NavLink";
import Mainpage from "./page/Mainpage";
function App() {
  return (
    <div className="App">
      <NavLink />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/item1" element={<Home />}>
            </Route>
          <Route path="/bucket" element={<Bucket />} />
          <Route path="/cash" element={<Cash />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
