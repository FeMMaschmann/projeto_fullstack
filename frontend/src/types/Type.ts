import { Dispatch, SetStateAction } from "react";
import internal from "stream";

export const baseURL = "http://localhost:5000";

export type Text = {
  children: string;
};

export type State = {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
};

export type TypesLogged = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ClientAddNew = {
  registration: string;
  name: string;
  phone: string;
};

export type AuthorAddNew = {
  name: string;
  country: string;
};

export type BookAddNew = {
  isbn: string;
  name: string;
  authorid: number;
  publisher: string;
  quantity: number;
};

export type WithdrawAddNew = {
  bookid: number;
  clientid: number;
};

export type AuthorList = {
  id: number;
  name: string;
  country: string;
  creationdate: string;
};

export type ClientList = {
  id: number;
  registration: string;
  name: string;
  phone: string;
};

export type BookList = {
  id: number;
  isbn: string;
  name: string;
  authorid: number;
  publisher: string;
  quantity: number;
  releasedate: string;
  creationdate: string;
  authorname: string;
};

export type WithdrawList = {
  bookid: number;
  clientid: number;
  bookname: string;
  clientname: string;
};

export type TypesButtonEditDelete = {
  typeData: string;
  typeId: number;
};
