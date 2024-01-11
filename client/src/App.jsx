import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Chat } from "./pages/chat";

function App() {
  return (
    <div className="max-h-screen h-screen flex flex-col bg-home-screen bg-cover bg-center">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/chatterbox"
            element={<Navigate to="/chatterbox/register" replace={true} />}
          />
          <Route path="/chatterbox/register" element={<Register />} />
          <Route path="/chatterbox/login" element={<Login />} />
          <Route path="/chatterbox/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
