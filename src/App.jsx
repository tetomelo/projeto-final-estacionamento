import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    </>
  );
}

export default App;
