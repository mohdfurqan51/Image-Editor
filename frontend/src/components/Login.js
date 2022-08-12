import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import "./css/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are now logged in",
      });
      res.json().then((data) => {
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
        navigate("/dragdrop");
      });
    } else if (res.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Something went wrong",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={userSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                      />
                      <label className="form-label" for="email">
                        Email address
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        id="password"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                      />
                      <label className="form-label" for="password">
                        Password
                      </label>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg buttonStyle"
                        
                      >
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <a href="/signup" className="link-danger">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          
        </div>
      </section>

      {/* <div className="col-md-4 mx-auto bg-light">
          <div className="card mt-5 ">
            <div className="card-body shadow">
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={userSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Sign-in Here</h3>
                    <hr />

                   
                    <label for="email" className="mt-4">Email</label>
                    <input
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      className="form-control"
                    />
                    

                   
                    <label for="password" className="mt-4">Password</label>
                    <input
                      value={values.password}
                      onChange={handleChange}
                      id="password"
                      type="password"
                      className="form-control"
                    />
                    
                    <button className="btn btn-primary mt-5">Login Now</button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div> */}
    </div>
  );
};

const pagestyles = {
  btn: {
    background: "red",
    color: "white",
    border: "1px solid black",
    padding: "10px",
  },
};

export default Login;
