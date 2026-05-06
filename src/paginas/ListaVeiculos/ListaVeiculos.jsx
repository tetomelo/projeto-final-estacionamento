import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";

function ListaVeiculos() {
  const navigate = useNavigate();

  const [veiculos, setVeiculos] = useState([]);
  const [veiculosFiltrados, setVeiculosFiltrados] = useState([]);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("veiculos")) || [];
    setVeiculos(dados);
    setVeiculosFiltrados(dados);
  }, []);

  useEffect(() => {
    const filtrados = veiculos.filter((v) =>
      v.modelo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      v.placa.toLowerCase().includes(termoBusca.toLowerCase())
    );

    setVeiculosFiltrados(filtrados);
  }, [termoBusca, veiculos]);

  const removerVeiculo = (veiculoParaRemover) => {
    if (confirm(`Tem certeza que deseja remover o veículo ${veiculoParaRemover.placa}?`)) {
      const novosVeiculos = veiculos.filter(
        (v) => v.id !== veiculoParaRemover.id
      );

      localStorage.setItem("veiculos", JSON.stringify(novosVeiculos));
      setVeiculos(novosVeiculos); 
    }
  };

  return (
    <Principal>
      <CampoCustomizado
        type="search"
        placeholder="Buscar veículo pela placa ou modelo"
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />

      {veiculosFiltrados.map((veiculo) => (
        
        <div key={veiculo.id} className="lista-veiculos__item">
          <div className="lista-veiculos__item-informacoes">
            <p>{veiculo.modelo} - {veiculo.placa}</p>
          </div>

          <MdEdit onClick={() => navigate(`/cadastro-veiculo/${veiculo.id}`)} />
          <MdDelete color="red" onClick={() => removerVeiculo(veiculo)} />
        </div>
      ))}

      {veiculosFiltrados.length === 0 && (
        <p className="lista-veiculos__mensagem-vazia">Nenhum veículo encontrado.</p>
      )}
    </Principal>
  );
}

export default ListaVeiculos;