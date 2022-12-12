import { Dispatch, SetStateAction } from "react";

export type Text = {
  children: string;
};

export type State = {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
};
