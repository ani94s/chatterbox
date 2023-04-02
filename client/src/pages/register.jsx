import React from "react";
import { FormContainer } from "../components/form-container";
import { InputField } from "../components/input-field";

const handleRegister = (event) => {
  event.preventDefault();
  console.log(event);
};

export const Register = () => {
  return (
    <FormContainer>
      <form onSubmit={handleRegister} className="flex flex-col gap-4 p-8">
        <InputField
          id="emailid"
          placeholder="Email ID"
          type="email"
          label="Email ID"
          className="w-60 sm:w-auto"
        />
        <InputField
          id="userid"
          placeholder="User ID"
          type="text"
          label="User ID"
          className="w-60 sm:w-auto"
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <InputField
            id="password"
            placeholder="Password"
            type="password"
            label="Password"
            className="w-60 sm:w-auto"
          />
          <InputField
            id="confirm-password"
            placeholder="Confirm Password"
            type="password"
            label="Confirm Password"
            className="w-60 sm:w-auto"
          />
        </div>
        <button type="submit" className="p-4 border bg-secondary">
          Register
        </button>
      </form>
    </FormContainer>
  );
};
