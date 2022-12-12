import React from "react";
import { Container, Table } from "react-bootstrap";
import ButtonEditDelete from "./ButtonEditDelete";
import { Text } from "../types/Type";

export default function Lists(props: Text) {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="w-75">{props.children}</th>
            <th className="w-25">Gerenciar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>
              <ButtonEditDelete />
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>
              <ButtonEditDelete />
            </td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>
              <ButtonEditDelete />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
