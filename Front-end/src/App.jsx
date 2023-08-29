import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DetailProduct from "./pages/DetailProduct";
import Business from "./pages/Business";
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
        <Route path={routes.detailProduct} element={<DetailProduct />} />
        <Route path={routes.business} element={<Business />} />
        <Route path={routes.businessRegister} element={<BusinessRegister />} />
      </Routes>
    </>
  );
}

export default App;
