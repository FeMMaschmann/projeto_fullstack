import { Button, Container } from "react-bootstrap";
import { Text } from "../types/Type";
import { Link } from "react-router-dom";

export default function ButtonAddNew(props: Text) {
  return (
    <Container className="d-flex justify-content-end">
      <Link to="/addNew" state={{ from: props.children }}>
        <Button className="mt-2 mb-2" variant="primary">
          Adicionar {props.children}
        </Button>
      </Link>
    </Container>
  );
}
