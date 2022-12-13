import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Auth from "./components/Auth";
import Clients from "./components/Clients";
import Books from "./components/Books";
import Authors from "./components/Authors";
import Withdraw from "./components/Withdraw";
import AddNew from "./components/AddNew";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={<Auth isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route
          path="/"
          element={<Clients isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route
          path="/clients"
          element={<Clients isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/addNew" element={<AddNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
