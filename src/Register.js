import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="col-lg-12">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="col-lg-12">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="col-lg-12 mt-2">
            <Link to={"/dashboard"}>
              <input type={"submit"} className={"btn btn-primary"} />
            </Link>
          </div>
          <p>
            Already have an account? Please <Link to={"/"}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
