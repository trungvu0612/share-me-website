import React from "react";
import "./App.css";
import { Routes, Route, useNavigation } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
