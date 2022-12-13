import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/App.css";
import { baseURL, AuthorAddNew } from "../types/Type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const register = async (data: AuthorAddNew) => {
  console.log(data);
  try {
    await axios.post("api/authors", data, {
      baseURL: baseURL,
    });
    alert("Cadastro efetuado com sucesso!");
  } catch (error) {
    alert("API inacessivel!");
    console.log(error);
  }
};

export default function NewAuthor() {
  const [data, setData] = useState<AuthorAddNew>({
    name: "",
    country: "",
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="my-form-container">
        <Form className="my-form">
          <div className="my-form-content">
            <h3 className="my-form-content">Adicionar Cliente</h3>

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
                    country: e.target.value,
                  });
                }}
                value={data.country}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={() => {
                register(data);
                navigate("../authors");
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
