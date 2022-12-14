import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/App.css";
import { baseURL, WithdrawList, BookList, ClientList } from "../types/Type";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const register = async (data: WithdrawList) => {
  console.log(data);
  try {
    await axios.post("api/withdrawals", data, {
      baseURL: baseURL,
    });
    alert("Cadastro efetuado com sucesso!");
  } catch (error) {
    alert("API inacessivel!");
    console.log(error);
  }
};

const getBooks = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/books`);
    return res.data;
  } catch (error) {
    alert("API inacessivel!");
    console.log(error);
  }
};

const getClients = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/clients`);
    return res.data;
  } catch (error) {
    alert("API inacessivel!");
    console.log(error);
  }
};

export default function NewWithdraw() {
  const [data, setData] = useState<WithdrawList>({
    bookid: 0,
    clientid: 0,
    bookname: "",
    clientname: "",
  });
  const [bookArray, setBookArray] = useState<BookList[] | []>([]);
  const [clientArray, setClientArray] = useState<ClientList[] | []>([]);

  useEffect(() => {
    getBooks().then(function (result) {
      setBookArray(result);
    });
    getClients().then(function (result) {
      setClientArray(result);
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
              <Form.Label>Livro</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setData({
                    ...data,
                    bookid: Number(e.target.value),
                  });
                }}
              >
                <option value="0">Escolha uma opção...</option>
                {bookArray.map((data, index) => {
                  return (
                    <>
                      <option value={data.id}>{data.name}</option>
                    </>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cliente</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setData({
                    ...data,
                    clientid: Number(e.target.value),
                  });
                }}
              >
                <option value="0">Escolha uma opção...</option>
                {clientArray.map((data, index) => {
                  return (
                    <>
                      <option value={data.id}>{data.name}</option>
                    </>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Button
              disabled={data.clientid === 0 || data.bookid === 0 ? true : false}
              variant="primary"
              type="button"
              onClick={() => {
                console.log(data);
                register(data);
                navigate("../withdraw");
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
