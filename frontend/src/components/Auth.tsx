import React from "react";
import "../styles/Auth.css";

export default function Auth() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Faça o seu login</h3>
          <div className="form-group mt-3">
            <label>E-mail</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Esqueceu sua <a href="#">senha?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
