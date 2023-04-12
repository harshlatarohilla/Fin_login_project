import React from "react";
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;