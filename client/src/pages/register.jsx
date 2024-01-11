import React, { useState } from "react";
import { FormContainer } from "../components/form-container";
import { InputField } from "../components/input-field";
import { ToastContainer, toast } from "react-toastify";

import { Link, Navigate, useNavigate } from "react-router-dom";

const initialFormValue = {
  emailid: "",
  userid: "",
  fullname: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialFormValue);

  const handleValidation = () => {
    const { emailid, userid, fullname, password, confirmPassword } = formValues;
    const toastOptions = {
      position: "top-right",
      autoClose: 8000,
      pauseOnHover: true,
    };
    if (!emailid || !userid || !fullname) {
      toast.error("Please fill all the fields to register", toastOptions);
    } else if (userid.length < 3) {
      toast.error("UserId should have atleast 3 characters", toastOptions);
    } else if (password.length < 8) {
      toast.error("Password should have atleast 8 characters", toastOptions);
    } else if (password !== confirmPassword) {
      toast.error("Password and Confirm Password don't match", toastOptions);
    } else {
      toast.success(
        "Registered successfully..! Login to continue",
        toastOptions
      );
      return true;
    }
    return false;
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(formValues);
    if (handleValidation()) {
      navigate("/chatterbox/login");
    }
  };

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <>
      <FormContainer>
        <form
          onSubmit={handleRegister}
          className="flex flex-col w-full gap-4 p-8 justify-center"
        >
          <InputField
            name="fullname"
            placeholder="Full Name"
            type="text"
            label="Name"
            className="w-60 sm:w-auto"
            onChange={handleChange}
          />
          <InputField
            name="emailid"
            placeholder="Email ID"
            type="email"
            label="Email ID"
            className="w-60 sm:w-auto"
            onChange={handleChange}
          />
          <InputField
            name="password"
            placeholder="Password"
            type="password"
            label="Password"
            onChange={handleChange}
          />
          <InputField
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            label="Confirm Password"
            onChange={handleChange}
          />
          <button type="submit" className="p-4 border bg-secondary">
            Register
          </button>
          <div className="w-full flex justify-center">
            <p className="">
              Already signed in?{" "}
              <span className="text-blue-600 underline">
                <Link to="/chatterbox/login">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};
