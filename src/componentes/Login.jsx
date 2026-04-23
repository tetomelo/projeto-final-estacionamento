import "./Login.css";

function Login() {
  return (
    <div className="container">
      <h1 className="logo">
        Vallet <span>Park</span>
      </h1>
      <div className="form">
        <input type="text"
          placeholder="Email / CPF" 
          className="input"
        />
        <input type="password"
          placeholder="Senha"
          className="input"
        />
        <button className="btn">Entrar</button>
        <p className="link">Esqueceu sua senha?</p>
        <p className="link">É novo por aqui? Cadastre-se</p>
      </div>
    </div>

  );


}

export default Login;