import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { DataProvider } from "./context/DataContext";
import Cash from "./page/Cash";
import Bucket from "./page/Bucket";
import NavLink from "./components/NavLink";
import Mainpage from "./page/Mainpage";
import Error from "./page/Error";
import Footer from "./components/Footer";
import PillsExample from "./components/PillsExample";
import Itempage from "./page/Itempage";
import Realmainpage from "./page/Realmainpage";
//import "bootstrap/dist/css/bootstrap.min.css";
//bottstrap을 사용하고 싶지만 css 때문에 겹치게 되고 nav로 해볼려니
//기능이 정상적으로 작동하지 않아서 보류
import ColorSchemesExample from "./components/ColorSchemesExample";
function App() {
  return (
    <div className="App">
      <NavLink />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Realmainpage/>}/>
          <Route path="/itemcheck" element={<Mainpage />}>
            <Route path=":list" element={<Itempage />} />
          </Route>
          <Route path="/product1/item1" element={<Home />} />
          <Route path="/bucket" element={<Bucket />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
