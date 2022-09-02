import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { axiosInstance } from "../config";
const Register = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const generateError = (err) => toast.error(err,{
    position: "bottom-right"
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("http://localhost:5000/register", {
        ...values,
      },
      {
        withCredentials:true,
      }
      );
      if (data) {
        if (data.errors) {
            const {email,password} = data.errors;
            if(email) generateError(email)
            else if (password) generateError(password);
        } else {
          navigate('/')
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="authCont">
      <h2>Register Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="formElements"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="formElements"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button className="btn">Submit</button>
        <div>
          Already have an account?{" "}
          <Link to="/login" className="spanImpo">
            Login
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
