import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/App.css";
import { baseURL, BookAddNew, AuthorList } from "../types/Type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const register = async (data: BookAddNew) => {
  console.log(data);
  try {
    await axios.post("api/books", data, {
      baseURL: baseURL,
    });
    alert("Cadastro efetuado com sucesso!");
  } catch (error) {
    alert("API inacessivel!");
    console.log(error);
  }
};

const getAuthors = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/authors`);
    return res.data;
  } catch (error) {
    alert("API inacessivel!");
    console.log(error);
  }
};

export default function NewBook() {
  const [data, setData] = useState<BookAddNew>({
    isbn: "",
    name: "",
    authorid: 0,
    publisher: "",
    quantity: 0,
  });
  const [authorArray, setAuthorArray] = useState<AuthorList[] | []>([]);

  useEffect(() => {
    getAuthors().then(function (result) {
      setAuthorArray(result);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="my-form-container">
        <Form className="my-form">
          <div className="my-form-content">
            <h3 className="my-form-content">Adicionar Livro</h3>

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
              <Form.Label>ISBN</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o isbn"
                onChange={(e) => {
                  setData({
                    ...data,
                    isbn: e.target.value,
                  });
                }}
                value={data.isbn}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Autor</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setData({
                    ...data,
                    authorid: Number(e.target.value),
                  });
                }}
              >
                <option value="0">Escolha uma opção...</option>
                {authorArray.map((data, index) => {
                  return (
                    <>
                      <option value={data.id}>{data.name}</option>
                    </>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Publicador</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o publicador"
                onChange={(e) => {
                  setData({
                    ...data,
                    publisher: e.target.value,
                  });
                }}
                value={data.publisher}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantidade</Form.Label>
              <Form.Control
                type="number"
                placeholder="Digite o quantidade"
                onChange={(e) => {
                  setData({
                    ...data,
                    quantity: Number(e.target.value),
                  });
                }}
                value={data.quantity}
              />
            </Form.Group>

            <Button
              disabled={data.authorid === 0 ? true : false}
              variant="primary"
              type="button"
              onClick={() => {
                register(data);
                navigate("../books");
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
