import "./CadastroVeiculo.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import { toast } from "react-toastify";
import Botao from "../../componentes/Botao/Botao";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function CadastroVeiculo() {
  const navigate = useNavigate();
  const params = useParams();

  const [veiculo, setVeiculo] = useState({
    marca: "",
    modelo: "",
    cor: "",
    ano: "",
    placa: "",
  });

  useEffect(() => {
    if (params.veiculoId) {
      const veiculosDoLocalStorage = JSON.parse(localStorage.getItem("veiculos")) || [];
      const veiculoEncontrado = veiculosDoLocalStorage.find(
        (itemVeiculo) => itemVeiculo.id === params.veiculoId
      );

      if (veiculoEncontrado) {
        setVeiculo(veiculoEncontrado);
      }
    }
  }, [params]);

  const validarAno = (ano) => {
    if (!ano) return true;
    return ano.length === 4;
  };

  const validarCor = (cor) => {
    if (!cor) return true; 
    return cor.trim() !== "";
  };

  const confirmar = () => {
    if (
      !veiculo.marca?.trim() ||
      !veiculo.modelo?.trim() ||
      !veiculo.placa?.trim()
    ) {
      toast.error("Marca, modelo e placa são obrigatórios!");
      return;
    }

    if (!validarAno(veiculo.ano)) {
      toast.error("Ano inválido!");
      return;
    }

    if (!validarCor(veiculo.cor)) {
      toast.error("Cor inválida!");
      return;
    }

    const veiculosDoLocalStorage = JSON.parse(localStorage.getItem("veiculos")) || [];

    if (veiculo.id) {
      const indexDoVeiculo = veiculosDoLocalStorage.findIndex(
        (itemVeiculo) => itemVeiculo.id === veiculo.id
      );

      veiculosDoLocalStorage[indexDoVeiculo] = veiculo;
    } else {
      const novoVeiculo = { id: crypto.randomUUID(), ...veiculo };
      veiculosDoLocalStorage.push(novoVeiculo);
    }

    localStorage.setItem("veiculos", JSON.stringify(veiculosDoLocalStorage));
    toast.success("Veículo cadastrado com sucesso!");
    navigate("/lista-veiculos");

  };

  return (
    <Principal>
      <h2>Cadastro de Veículo</h2>

      <CampoCustomizado
        label="Marca"
        opcoes={[
          { valor: "1", label: "Fiat" },
          { valor: "2", label: "Audi" },
          { valor: "3", label: "BMW" },
          { valor: "4", label: "BYD" },
          { valor: "5", label: "CAOA Chery" },
          { valor: "6", label: "Chevrolet" },
          { valor: "7", label: "Citroen" },
          { valor: "8", label: "Ford" },
          { valor: "9", label: "GWM" },
          { valor: "10", label: "Honda" },
          { valor: "11", label: "Hyundai" },
          { valor: "12", label: "Jac Motors" },
          { valor: "13", label: "Jeep" },
          { valor: "14", label: "Kia" },
          { valor: "15", label: "Lifan" },
          { valor: "16", label: "Mercedes-Benz" },
          { valor: "17", label: "Mitsubishi" },
          { valor: "18", label: "Nissan" },
          { valor: "19", label: "Peugeot" },
          { valor: "20", label: "Renault" },
          { valor: "21", label: "Subaru" },
          { valor: "22", label: "Suzuki" },
          { valor: "23", label: "Toyota" },
          { valor: "24", label: "Volkswagen" },
          { valor: "25", label: "Volvo" },
          { valor: "26", label: "Land Rover" },
          { valor: "27", label: "MINI" },
          { valor: "28", label: "RAM" },
        ]}
        value={veiculo.marca}
        onChange={(e) =>
          setVeiculo({ ...veiculo, marca: e.target.value })
        }
        obrigatorio
      />

      <CampoCustomizado
        label="Modelo"
        obrigatorio
        value={veiculo.modelo}
        onChange={(e) =>
          setVeiculo({ ...veiculo, modelo: e.target.value })
        }
      />

      <CampoCustomizado
        label="Cor"
        value={veiculo.cor}
        onChange={(e) =>
          setVeiculo({ ...veiculo, cor: e.target.value })
        }
      />

      <CampoCustomizado
        label="Ano"
        value={veiculo.ano}
        onChange={(e) =>
          setVeiculo({ ...veiculo, ano: e.target.value })
        }
      />

      <CampoCustomizado
        label="Placa"
        obrigatorio
        value={veiculo.placa}
        onChange={(e) =>
          setVeiculo({ ...veiculo, placa: e.target.value })
        }
      />

      <Botao tipo="primario" aoClicar={confirmar}>
        Confirmar
      </Botao>
    </Principal>
  );
}

export default CadastroVeiculo;