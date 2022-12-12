import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Biblioteca</Navbar.Brand>
        <Nav className="me-right">
          <Nav.Link as={Link} to={"/clients"}>
            Clientes
          </Nav.Link>
          <Nav.Link as={Link} to={"/books"}>
            Livros
          </Nav.Link>
          <Nav.Link as={Link} to={"/authors"}>
            Autores
          </Nav.Link>
          <Nav.Link as={Link} to={"/withdraw"}>
            Retiradas
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
