import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import ButtonEditDelete from "./ButtonEditDelete";
import { Text } from "../types/Type";
import {
  baseURL,
  AuthorList,
  ClientList,
  BookList,
  WithdrawList,
} from "../types/Type";
import axios from "axios";

const getData = async (data: string) => {
  try {
    let res: any;
    if (data === "Autores") res = await axios.get(`${baseURL}/api/authors`);
    if (data === "Clientes") res = await axios.get(`${baseURL}/api/clients`);
    if (data === "Livros") res = await axios.get(`${baseURL}/api/books`);
    if (data === "Retiradas")
      res = await axios.get(`${baseURL}/api/withdrawals`);
    return res.data;
  } catch (error) {
    alert("Deu erro!");
    console.log(error);
    return error;
  }
};

export default function Lists(props: Text) {
  const [authorData, setAuthorData] = useState<AuthorList[] | []>([]);
  const [clientData, setClientData] = useState<ClientList[] | []>([]);
  const [bookData, setBookData] = useState<BookList[] | []>([]);
  const [withdrawData, setWithdrawData] = useState<WithdrawList[] | []>([]);

  useEffect(() => {
    getData(props.children).then(function (result) {
      if (props.children === "Autores") setAuthorData(result);
      if (props.children === "Clientes") setClientData(result);
      if (props.children === "Livros") setBookData(result);
      if (props.children === "Retiradas") setWithdrawData(result);
    });
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="w-75">{props.children}</th>
            {props.children !== "Retiradas" && (
              <th className="w-25">Gerenciar</th>
            )}
          </tr>
        </thead>
        <tbody>
          <>
            {props.children === "Autores" &&
              authorData.map((data, index) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.country}</td>
                    <td>
                      <ButtonEditDelete
                        typeData={props.children}
                        typeId={data.id}
                      />
                    </td>
                  </tr>
                );
              })}
            {props.children === "Clientes" &&
              clientData.map((data, index) => {
                return (
                  <tr>
                    <td>
                      {data.name} | {data.registration} | {data.phone}
                    </td>
                    <td>
                      <ButtonEditDelete
                        typeData={props.children}
                        typeId={data.id}
                      />
                    </td>
                  </tr>
                );
              })}
            {props.children === "Livros" &&
              bookData.map((data, index) => {
                return (
                  <tr>
                    <td>
                      {data.name} | {data.isbn} | {data.publisher} |{" "}
                      {data.quantity} | {data.releasedate}
                    </td>
                    <td>
                      <ButtonEditDelete
                        typeData={props.children}
                        typeId={data.id}
                      />
                    </td>
                  </tr>
                );
              })}
            {props.children === "Retiradas" &&
              withdrawData.map((data, index) => {
                return (
                  <tr>
                    <td>
                      {data.bookname} | {data.clientname}
                    </td>
                  </tr>
                );
              })}
          </>
        </tbody>
      </Table>
    </Container>
  );
}
