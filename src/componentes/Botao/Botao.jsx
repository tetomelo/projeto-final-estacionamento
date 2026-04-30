import "./Botao.css";

function Botao({ tipo, aoClicar, children }) {
  let classes = "botao__root";

  switch (tipo) {
    case "primario":
      classes += " botao__primario";
      break;
    case "secundario":
      classes += " botao__secundario";
      break;
  }

  return (
    <button className={classes} onClick={aoClicar}>
      {children}
    </button>
  );
}

export default Botao;
