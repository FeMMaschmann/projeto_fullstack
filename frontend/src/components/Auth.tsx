import React, { useState } from "react";
import "../styles/Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL, TypesLogged } from "../types/Type";

type LoginData = {
  email: string;
  pass: string;
};

const loginUser = async (data: LoginData) => {
  try {
    const user = await axios.post("api/logins", data, {
      baseURL: baseURL,
    });
    return user.data.count;
  } catch (error) {
    alert("API inacessivel!");
    console.log(error);
  }
};

export default function Auth(props: TypesLogged) {
  const [data, setData] = useState<LoginData>({
    email: "",
    pass: "",
  });
  const navigate = useNavigate();

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
              onChange={(e) => {
                setData({
                  ...data,
                  email: e.target.value,
                });
              }}
              value={data.email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Digite sua senha"
              onChange={(e) => {
                setData({
                  ...data,
                  pass: e.target.value,
                });
              }}
              value={data.pass}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                loginUser(data).then(function (result) {
                  if (result == 1) {
                    props.setIsLogged(true);
                    navigate("../clients");
                  } else {
                    alert("Usuário ou senha incorretos");
                  }
                });
              }}
            >
              Entrar
            </button>
          </div>
          {/* <p className="forgot-password text-right mt-2">
            Esqueceu sua <a href="#">senha?</a>
          </p> */}
        </div>
      </form>
    </div>
  );
}
