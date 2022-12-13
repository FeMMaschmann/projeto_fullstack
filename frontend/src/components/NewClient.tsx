import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/App.css";
import { baseURL, ClientAddNew } from "../types/Type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const register = async (data: ClientAddNew) => {
  console.log(data);
  try {
    await axios.post("api/clients", data, {
      baseURL: baseURL,
    });
    alert("Cadastro efetuado com sucesso!");
  } catch (error) {
    alert("API inacessivel!");
    console.log(error);
  }
};

export default function NewClient() {
  const [data, setData] = useState<ClientAddNew>({
    registration: "",
    name: "",
    phone: "",
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="my-form-container">
        <Form className="my-form">
          <div className="my-form-content">
            <h3 className="my-form-content">Adicionar Cliente</h3>
            <Form.Group className="mb-3">
              <Form.Label>Registro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o registro"
                onChange={(e) => {
                  setData({
                    ...data,
                    registration: e.target.value,
                  });
                }}
                value={data.registration}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome"
                onChange={(e) => {
                  setData({
                    ...data,
                    name: e.target.value,
                  });
                }}
                value={data.name}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o Telefone"
                onChange={(e) => {
                  setData({
                    ...data,
                    phone: e.target.value,
                  });
                }}
                value={data.phone}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={() => {
                register(data);
                navigate("../clients");
              }}
            >
              Cadastrar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
