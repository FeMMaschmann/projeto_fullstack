import { useLocation } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import "../styles/Auth.css";
import NewClient from "./NewClient";
import NewAuthor from "./NewAuthor";
import NewBook from "./NewBook";
import NewWithdraw from "./NewWithdraw";

export default function AddNew() {
  const location = useLocation();
  const { from } = location.state;

  return (
    <>
      <NavbarMenu />
      {from === "Cliente" && <NewClient />}
      {from === "Livro" && <NewBook />}
      {from === "Autor" && <NewAuthor />}
      {from === "Retirada" && <NewWithdraw />}
    </>
  );
}
