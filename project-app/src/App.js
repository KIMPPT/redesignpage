import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DataContext from "./context/DataContext";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
