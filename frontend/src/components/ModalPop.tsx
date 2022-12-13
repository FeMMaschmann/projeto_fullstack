import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { baseURL, State, TypesButtonEditDelete } from "../types/Type";
import axios from "axios";

type TypeButton = {
  typeButton: string;
  setTypeButton: React.Dispatch<React.SetStateAction<string>>;
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

export default function ModalPop(
  props: State & TypesButtonEditDelete & TypeButton
) {
  const handleClose = () => props.setShow(false);

  return (
    <Modal show={props.show} onHide={handleClose}>
      {props.typeButton === "edit" ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleClose}>
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
