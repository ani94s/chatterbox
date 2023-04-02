import React from "react";
import { FormContainer } from "../components/form-container";
import { InputField } from "../components/input-field";

const handleLogin = (event) => {
  event.preventDefault();
  console.log(event);
};

export const Login = () => {
  return (
    <FormContainer>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 p-8">
        <InputField
          id="userid"
          placeholder="Email/User ID"
          type="text"
          label="Email ID/User ID"
          className="w-60"
        />
        <InputField
          id="password"
          placeholder="Password"
          type="password"
          label="Password"
          className="w-60"
        />
        <button type="submit" className="p-4 border bg-secondary">
          Login
        </button>
      </form>
    </FormContainer>
  );
};
