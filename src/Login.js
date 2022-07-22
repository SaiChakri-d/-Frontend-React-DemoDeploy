import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {},
  });
  return (
    <>
      <div className="container">
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
            Don't have an account? Please <Link to={"/register"}>Sign-Up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
