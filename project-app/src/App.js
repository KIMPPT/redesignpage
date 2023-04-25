import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DataContext from "./context/DataContext";
import { DataProvider } from "./context/DataContext";
import Cash from "./page/Cash";
import Bucket from "./page/Bucket";
import NavLink from "./components/NavLink";
function App() {
  return (
    <div className="App">
      <NavLink />
      <DataProvider>
        <Routes>
          <Route path="/item" element={<Home />} />
          <Route path="/bucket" element={<Bucket />} />
          <Route path="/cash" element={<Cash />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
