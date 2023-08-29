import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DetailProduct from "./pages/DetailProduct";
import routes from "./routes.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path={routes.detailProduct} element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
