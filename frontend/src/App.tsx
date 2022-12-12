import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Auth from "./components/Auth";
import NavbarMenu from "./components/NavbarMenu";
import Clients from "./components/Clients";
import Books from "./components/Books";
import Authors from "./components/Authors";
import Withdraw from "./components/Withdraw";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Clients />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
