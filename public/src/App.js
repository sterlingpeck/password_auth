import { model } from "mongoose";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import Secret from "./Pages/Secret";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/" element={<Secret />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
