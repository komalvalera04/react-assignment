
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Session2 from "./Session2/Session2";
import Session3 from "./Session3/Session3";
import Session4 from "./Session4/Session4";
import Session5 from "./Session5/Session5";
import Session7 from "./Session7/Session7";
import Session8 from "./Session8/Session8";
import Session9 from "./Session9/Session9";
import HomePage from "./Session9/HomePage";
import DealsPage from "./Session9/DealsPage";
import CartPage from "./Session9/CartPage";
import NotFound from "./Session9/NotFound";
import Session6 from "./Session6/Session6";
import Session10 from "./Session10/Session10";

function App() {
  return (
    <div>
      <h1>Welcome to React JSX!</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navigation/>  </>}></Route>
          <Route path="/session2" element={<><Session2/></>}></Route>
          <Route path="/session3" element={<><Session3/></>}></Route>
          <Route path="/session4" element={<><Session4/></>}></Route>
          <Route path="/session5" element={<><Session5/></>}></Route>
          <Route path="/session6" element={<><Session6/></>}></Route>
          <Route path="/session7" element={<><Session7/></>}></Route>
          <Route path="/session8" element={<><Session8/></>}></Route>
          <Route path="/session10" element={<><Session10/></>}></Route>
          {/* <Route path="/session9" element={<><Session9/></>}></Route> */}
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/deals" element={<DealsPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
