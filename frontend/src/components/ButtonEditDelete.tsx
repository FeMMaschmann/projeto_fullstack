import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalPop from "./ModalPop";

export default function ButtonEditDelete() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <>
      <ul className="list-inline m-0">
        <li className="d-flex justify-content-around">
          <Button
            onClick={handleShow}
            style={{ width: "45%" }}
            variant="primary"
          >
            Editar
          </Button>
          <Button
            onClick={handleShow}
            style={{ width: "45%" }}
            variant="primary"
          >
            Excluir
          </Button>
        </li>
      </ul>
      <ModalPop setShow={setShow} show={show} />
    </>
  );
}
