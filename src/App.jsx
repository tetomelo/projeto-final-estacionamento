import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import CadastroVeiculo from "./paginas/CadastroVeiculo/CadastroVeiculo";
import ListaVeiculos from "./paginas/ListaVeiculos/ListaVeiculos";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />
  },
  {
    path: "/lista-veiculos",
    element: <ListaVeiculos />
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
