import "./PaginaInicial.css";
import Botao from "../../componentes/Botao/Botao";
import Principal from "../../componentes/Principal/Principal";
import { useNavigate } from "react-router-dom";


function PaginaInicial() {
    const navigate = useNavigate();

    return (
        <Principal>
    <Botao tipo="primario" onClick={() => navigate("/cadastro-veiculo")}>
        Cadastro de veículos
    </Botao>

    <Botao tipo="secundario" onClick={() => navigate("/lista-veiculos")}>
        Lista dos veículos
    </Botao>

    </Principal>
    );
}

export default PaginaInicial;