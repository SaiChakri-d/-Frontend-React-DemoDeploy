import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { config } from "./config";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const login = await axios.post(`${config.api}/login`, values);
        localStorage.setItem("react_app_token", login.data.token);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <label>Username</label>
              <input
                type={"text"}
                placeholder={"Username"}
                className={"form-control"}
                name={"username"}
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-12">
              <label>Password</label>
              <input
                type={"text"}
                placeholder={"Password"}
                className={"form-control"}
                name={"password"}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-12 mt-2">
              <Link to={"/dashboard"}>
                <input type={"submit"} className={"btn btn-primary"} />
              </Link>
            </div>
            <p>
              Don't have an account? Please{" "}
              <Link to={"/register"}>Sign-Up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
