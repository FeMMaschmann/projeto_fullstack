import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  baseURL,
  State,
  TypesButtonEditDelete,
  BookAddNew,
  AuthorAddNew,
  ClientAddNew,
} from "../types/Type";
import axios from "axios";
import Form from "react-bootstrap/Form";

type TypeButton = {
  typeButton: string;
  setTypeButton: React.Dispatch<React.SetStateAction<string>>;
};

const getData = async (typeData: string, typeId: number) => {
  try {
    let res: any;
    if (typeData === "Autores")
      res = await axios.get(`${baseURL}/api/authors/${typeId}`);
    if (typeData === "Clientes")
      res = await axios.get(`${baseURL}/api/clients/${typeId}`);
    if (typeData === "Livros")
      res = await axios.get(`${baseURL}/api/books/${typeId}`);
    return res.data;
  } catch (error) {
    alert("Deu erro!");
    console.log(error);
    return error;
  }
};

const deleteData = async (typeData: string, typeId: number) => {
  try {
    let res: any;
    if (typeData === "Autores")
      res = await axios.delete(`${baseURL}/api/authors/${typeId}`);
    if (typeData === "Clientes")
      res = await axios.delete(`${baseURL}/api/clients/${typeId}`);
    if (typeData === "Livros")
      res = await axios.delete(`${baseURL}/api/books/${typeId}`);
    return res.data;
  } catch (error) {
    alert("Deu erro!");
    console.log(error);
    return error;
  }
};

const updateData = async (typeData: string, typeId: number, data: any) => {
  try {
    let res: any;
    if (typeData === "Autores")
      res = await axios.put(`api/authors/${typeId}`, data, {
        baseURL: baseURL,
      });
    if (typeData === "Clientes")
      res = await axios.put(`api/clients/${typeId}`, data, {
        baseURL: baseURL,
      });
    if (typeData === "Livros")
      res = await axios.put(`api/books/${typeId}`, data, {
        baseURL: baseURL,
      });
    return res.data;
  } catch (error) {
    alert("Deu erro!");
    console.log(error);
    return error;
  }
};

export default function ModalPop(
  props: State & TypesButtonEditDelete & TypeButton
) {
  const [book, setBook] = useState<BookAddNew>({
    isbn: "",
    name: "",
    authorid: 0,
    publisher: "",
    quantity: 0,
  });
  const [author, setAuthor] = useState<AuthorAddNew>({
    name: "",
    country: "",
  });
  const [client, setClient] = useState<ClientAddNew>({
    registration: "",
    name: "",
    phone: "",
  });

  useEffect(() => {
    getData(props.typeData, props.typeId).then(function (result) {
      if (props.typeData === "Autores") {
        setAuthor({ name: result.name, country: result.country });
      }
      if (props.typeData === "Clientes") {
        setClient({
          name: result.name,
          registration: result.registration,
          phone: result.phone,
        });
      }
      if (props.typeData === "Livros") {
        setBook({
          name: result.name,
          isbn: result.isbn,
          authorid: result.authorid,
          publisher: result.publisher,
          quantity: result.quantity,
        });
      }
    });
  }, []);

  const handleClose = () => props.setShow(false);

  return (
    <Modal show={props.show} onHide={handleClose}>
      {props.typeButton === "edit" ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {props.typeData === "Autores" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome"
                    onChange={(e) => {
                      setAuthor({
                        ...author,
                        name: e.target.value,
                      });
                    }}
                    value={author.name}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>País</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o Telefone"
                    onChange={(e) => {
                      setAuthor({
                        ...author,
                        country: e.target.value,
                      });
                    }}
                    value={author.country}
                  />
                </Form.Group>
              </>
            )}
            {props.typeData === "Clientes" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Registro</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o registro"
                    onChange={(e) => {
                      setClient({
                        ...client,
                        registration: e.target.value,
                      });
                    }}
                    value={client.registration}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome"
                    onChange={(e) => {
                      setClient({
                        ...client,
                        name: e.target.value,
                      });
                    }}
                    value={client.name}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o Telefone"
                    onChange={(e) => {
                      setClient({
                        ...client,
                        phone: e.target.value,
                      });
                    }}
                    value={client.phone}
                  />
                </Form.Group>
              </>
            )}
            {props.typeData === "Livros" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome"
                    onChange={(e) => {
                      setBook({
                        ...book,
                        name: e.target.value,
                      });
                    }}
                    value={book.name}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>ISBN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o isbn"
                    onChange={(e) => {
                      setBook({
                        ...book,
                        isbn: e.target.value,
                      });
                    }}
                    value={book.isbn}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Publicador</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Digite o publicador"
                    onChange={(e) => {
                      setBook({
                        ...book,
                        publisher: e.target.value,
                      });
                    }}
                    value={book.publisher}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quantidade</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Digite o quantidade"
                    onChange={(e) => {
                      setBook({
                        ...book,
                        quantity: Number(e.target.value),
                      });
                    }}
                    value={book.quantity}
                  />
                </Form.Group>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                if (props.typeData === "Autores")
                  updateData(props.typeData, props.typeId, author);
                if (props.typeData === "Clientes")
                  updateData(props.typeData, props.typeId, client);
                if (props.typeData === "Livros")
                  updateData(props.typeData, props.typeId, book);
                alert("Alterado com sucesso");
                handleClose();
              }}
            >
              Salvar
            </Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Exclusão</Modal.Title>
          </Modal.Header>
          <Modal.Body>Deseja realmente excluir o registro?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteData(props.typeData, props.typeId);
                alert("Excluido com sucesso");
                handleClose();
              }}
            >
              Excluir
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}
