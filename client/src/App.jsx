import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Chat } from "./pages/chat";

function App() {
  return (
    <div className="max-h-screen h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/register" replace={true} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
