import React from "react";
import ButtonAddNew from "./ButtonAddNew";
import Lists from "./Lists";
import NavbarMenu from "./NavbarMenu";

export default function Clients() {
  return (
    <>
      <NavbarMenu />
      <ButtonAddNew>Adicionar Cliente</ButtonAddNew>
      <Lists>Clientes</Lists>
    </>
  );
}
