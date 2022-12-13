import React from "react";
import ButtonAddNew from "./ButtonAddNew";
import Lists from "./Lists";
import NavbarMenu from "./NavbarMenu";

export default function Authors() {
  return (
    <>
      <NavbarMenu />
      <ButtonAddNew>Autor</ButtonAddNew>
      <Lists>Autores</Lists>
    </>
  );
}
