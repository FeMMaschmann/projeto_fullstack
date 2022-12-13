import React from "react";
import ButtonAddNew from "./ButtonAddNew";
import Lists from "./Lists";
import NavbarMenu from "./NavbarMenu";

export default function Books() {
  return (
    <>
      <NavbarMenu />
      <ButtonAddNew>Livro</ButtonAddNew>
      <Lists>Livros</Lists>
    </>
  );
}
