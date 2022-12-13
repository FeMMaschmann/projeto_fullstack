import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalPop from "./ModalPop";
import { TypesButtonEditDelete } from "../types/Type";

export default function ButtonEditDelete(props: TypesButtonEditDelete) {
  const [show, setShow] = useState(false);
  const [typeButton, setTypeButton] = useState<string>("");

  const handleShow = () => setShow(true);
  return (
    <>
      <ul className="list-inline m-0">
        <li className="d-flex justify-content-around">
          <Button
            onClick={() => {
              setTypeButton("edit");
              handleShow();
            }}
            style={{ width: "45%" }}
            variant="primary"
          >
            Editar
          </Button>
          <Button
            onClick={() => {
              setTypeButton("exclude");
              handleShow();
            }}
            style={{ width: "45%" }}
            variant="primary"
          >
            Excluir
          </Button>
        </li>
      </ul>
      <ModalPop
        setShow={setShow}
        show={show}
        typeData={props.typeData}
        typeId={props.typeId}
        typeButton={typeButton}
        setTypeButton={setTypeButton}
      />
    </>
  );
}
