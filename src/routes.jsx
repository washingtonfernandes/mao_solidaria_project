import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./cmponents/pages/Home";
import Sobre from "./components/pages/Sobre";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Page404 from "./components/pages/Page404";
import PaginaBase from "./components/pages/PaginaBase";

function AppRoutes() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <PaginaBase />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cadastro" element={<Cadastro/>}></Route>
            <Route path="*" element={<Page404/>}></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default AppRoutes