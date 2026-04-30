import "./Principal.css";
import { useNavigate } from "react-router-dom";

function Principal({children}) {
  const navigate = useNavigate();

  return (
    <main className="principal__root">
      <div className="principal__titulo">

      </div>

      {children}
    </main>
  );
}

export default Principal;