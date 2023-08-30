import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DetailProduct from "./pages/DetailProduct";
import BusinessPage from "./pages/BusinessPage";
import BusinessRegister from "./pages/BusinessRegister";
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
        <Route path={routes.business} element={<BusinessPage />} />
        <Route path={routes.businessRegister} element={<BusinessRegister />} />
      </Routes>
    </>
  );
}

export default App;
