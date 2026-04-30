import "./CadastroVeiculo.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import Botao from "../../componentes/Botao/Botao";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";


function CadastroVeiculo() {
    const navigate = useNavigate();

    const [veiculo, setVeiculo] = useState({
        marca: "",
        modelo: "",
        cor: "",
        ano: "",
        placa: ""
    });

      const salvar = () => {
    if (!veiculo.marca?.trim() || !veiculo.modelo?.trim() ||  !veiculo.placa?.trim()) {
      toast.error("Marca, modelo e placa são obrigatórios!");
      
    }
}

const listagem = veiculo.id?  "Editar Veiculo" : "Novo Veiculo";

  return (    
    <Principal>
      <CampoCustomizado
        label="Marca"
          opcoes={[
          {valor:"1" , label: "Fiat"},
          {valor:"2" , label: " Audi"},
          {valor:"3" , label: " BMW"},
          {valor:"4" , label: "BYD"},
          {valor:"5" , label: "CAOA Chery"},
          {valor:"6" , label: "Chevrolet"},
          {valor:"7" , label: "Citroen"},
          {valor:"8" , label: "Ford"},
          {valor:"9" , label: "GWM"},
          {valor:"10" , label: "Honda"},
          {valor:"11" , label: "Hyundai"},
          {valor:"12" , label: "Jac Motors"},
          {valor:"13" , label: "Jeep"},
          {valor:"14" , label: "Kia"},
          {valor:"15" , label: "Lifan"},
          {valor:"16" , label: "Mercedes-Benz"},
          {valor:"17" , label: "Mitsubishi"},
          {valor:"18" , label: "Nissan"},
          {valor:"19" , label: "Peugeot"},
          {valor:"20" , label: "Renault"},
          {valor:"21" , label: "Subaru"},
          {valor:"22" , label: "Suzuki"},
          {valor:"23" , label: "Toyota"},
          {valor:"24" , label: "Volkswagen"},
          {valor:"25" , label: "Volvo"},
          {valor:"26" , label: "Land Rover"},
          {valor:"27" , label: "MINI"},
          {valor:"28" , label: "RAM"},
        ]}
        value={veiculo.marca}
        onChange={(e) => setVeiculo({ ...veiculo, marca: e.target.value })}
        obrigatorio
      />

      <CampoCustomizado
        label="Modelo"
        obrigatorio
        value={veiculo.modelo}
        onChange={(e) => setVeiculo({ ...veiculo, modelo: e.target.value })}
      />

      <CampoCustomizado
        label="Cor"
        value={veiculo.cor}
        onChange={(e) => setVeiculo({ ...veiculo, cor: e.target.value })}
      />

      <CampoCustomizado
        label="Ano"
        value={veiculo.ano}
        onChange={(e) => setVeiculo({ ...veiculo, ano: e.target.value })}
      />

      <CampoCustomizado
        label="Placa"
        obrigatorio
        value={veiculo.placa}
        onChange={(e) => setVeiculo({ ...veiculo, placa: e.target.value })}
      />

      <Botao className="botao-confirmar" aoClicar={salvar}>
        Confirmar
      </Botao>

      </Principal>
  )

}

export default CadastroVeiculo;