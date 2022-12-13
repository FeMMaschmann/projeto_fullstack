import React from "react";
import ButtonAddNew from "./ButtonAddNew";
import Lists from "./Lists";
import NavbarMenu from "./NavbarMenu";
import Auth from "./Auth";

type TypesLogged = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Clients(props: TypesLogged) {
  return (
    <>
      {props.isLogged ? (
        <>
          <NavbarMenu />
          <ButtonAddNew>Cliente</ButtonAddNew>
          <Lists>Clientes</Lists>
        </>
      ) : (
        <Auth isLogged={props.isLogged} setIsLogged={props.setIsLogged} />
      )}
    </>
  );
}
