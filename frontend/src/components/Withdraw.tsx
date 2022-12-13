import React from "react";
import ButtonAddNew from "./ButtonAddNew";
import Lists from "./Lists";
import NavbarMenu from "./NavbarMenu";

export default function Withdraw() {
  return (
    <>
      <NavbarMenu />
      <ButtonAddNew>Retirada</ButtonAddNew>
      <Lists>Retiradas</Lists>
    </>
  );
}
