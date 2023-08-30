import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DetailProduct from "./pages/DetailProduct";
import DraftStartPage from "./pages/DraftStartPage";
import DraftRegister from "./pages/DraftRegister";
import Splash from "./pages/Splash";
import routes from "./routes.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.splash} element={<Splash />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.detailProduct + "/strawberry"} element={<DetailProduct id="strawberry" />} />
        <Route path={routes.detailProduct + "/peach"} element={<DetailProduct id="peach" />} />
        <Route path={routes.goDraft} element={<DraftStartPage />} />
        <Route path={routes.draftRegister} element={<DraftRegister />} />
      </Routes>
    </>
  );
}

export default App;
