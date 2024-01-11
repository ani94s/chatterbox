import React from "react";
import { FormContainer } from "../components/form-container";
import { InputField } from "../components/input-field";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event);
    navigate("/chatterbox/chat");
  };

  return (
    <FormContainer>
      <form onSubmit={handleLogin} className="flex flex-col w-full gap-4 p-8">
        <InputField
          name="userid"
          placeholder="Email/User ID"
          type="text"
          label="Email ID/User ID"
        />
        <InputField
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
        />
        <button type="submit" className="p-4 border bg-secondary">
          Login
        </button>
      </form>
    </FormContainer>
  );
};
