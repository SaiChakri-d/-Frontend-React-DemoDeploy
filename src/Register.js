import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { config } from "./config";
import axios from "axios";

function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async function (values) {
      try {
        const register = await axios.post(`${config.api}/register`, values);
        alert(register.data.message);
      } catch (error) {
        console.error(error);
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
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div className="col-lg-12">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="col-lg-12">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div className="col-lg-12 mt-2">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
            <p>
              Already have an account? Please <Link to={"/"}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
