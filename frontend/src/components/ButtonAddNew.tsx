import React from "react";
import { Button, Container } from "react-bootstrap";
import { Text } from "../types/Type";

export default function ButtonAddNew(props: Text) {
  return (
    <Container className="d-flex justify-content-end">
      <Button className="mt-2 mb-2" variant="primary">
        {props.children}
      </Button>
    </Container>
  );
}
