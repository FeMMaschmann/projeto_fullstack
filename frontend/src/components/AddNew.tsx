import { useLocation } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import "../styles/Auth.css";
import Home from "./Home";
import NewClient from "./NewClient";
import NewAuthor from "./NewAuthor";

export default function AddNew() {
  const location = useLocation();
  const { from } = location.state;

  return (
    <>
      <NavbarMenu />
      {from === "Cliente" && <NewClient />}
      {from === "Livro" && <Home />}
      {from === "Autor" && <NewAuthor />}
      {from === "Retirada" && <Home />}
    </>
  );
}
