import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import CadastroVeiculo from "./paginas/CadastroVeiculo/CadastroVeiculo";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />
  },
  {
    path: "/cadastro-veiculo",
    element: <CadastroVeiculo />
  }

]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
      <ToastContainer />
    </>
  );
}

export default App;
