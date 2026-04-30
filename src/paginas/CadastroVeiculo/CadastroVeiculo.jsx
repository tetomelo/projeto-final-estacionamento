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
        obrigatorio
        value={veiculo.marca}
        onChange={(e) => setVeiculo({ ...veiculo, marca: e.target.value })}
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

      </Principal>
  )

}

export default CadastroVeiculo;