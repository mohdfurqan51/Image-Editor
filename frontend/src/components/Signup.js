import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import Navbar from "./Navbar";

const Signup = () => {
  const navigate = useNavigate();

  const userSubmit = async (formdata) => {
    console.log(formdata);

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting javascript object to json
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Well Done👍",
        text: "You have done a wonderful job!",
      });
      navigate("/login");
    } else {
      console.log("error occured");
    }
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  return (
    <div>
      <Navbar />
      <>
        {/* Section: Design Block */}
        <section className=" text-center text-lg-start">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n    .rounded-t-5 {\n      border-top-left-radius: 0.5rem;\n      border-top-right-radius: 0.5rem;\n    }\n\n    @media (min-width: 992px) {\n      .rounded-tr-lg-0 {\n        border-top-right-radius: 0;\n      }\n\n      .rounded-bl-lg-5 {\n        border-bottom-left-radius: 0.5rem;\n      }\n    }\n  ",
            }}
          />
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <Formik
                    initialValues={{
                      firstname: "",
                      lastname: "",
                      password: "",
                      mobile: "",
                      email: "",
                      age: "",
                    }}
                    onSubmit={userSubmit}
                    validationSchema={SignupSchema}
                  >
                    {({ values, handleChange, handleSubmit, errors }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                    
                          <TextField
                            value={values.firstname}
                            onChange={handleChange}
                            id="firstname"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="FirstName"
                            type="text"
                            className="form-control"
                          />
                          </div>
                        <div className="form-outline mb-2">
                          <TextField
                            value={values.firstname}
                            onChange={handleChange}
                            id="firstname"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="FirstName"
                            type="text"
                            className="form-control"
                          />
                          </div>
                        
                        <div className="form-outline mb-4">
                          <TextField
                            value={values.email}
                            onChange={handleChange}
                            id="email"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Email"
                            type="email"
                            // id="form2Example1"
                            className="form-control"
                          />
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                          <TextField
                            value={values.password}
                            onChange={handleChange}
                            id="password"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Password"
                            type="password"
                            className="form-control"
                          />
                        </div>
                        {/* 2 column grid layout for inline styling */}
                        <div className="row mb-4">
                          <div className="col d-flex justify-content-center">
                            {/* Checkbox */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="form2Example31"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form2Example31"
                              >
                                {" "}
                                Remember me{" "}
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            {/* Simple link */}
                            <a href="#!">Forgot password?</a>
                          </div>
                        </div>
                        {/* Submit button */}
                        <div style={{textAlign: "center"}}>
                        <button
                          type="submit"
                          sx={{ mt: 5 }}
                          className="btn btn-primary mb-4"
                        >
                          Sign up
                        </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </>

      {/*              
             <TextField value={values.name} onChange={handleChange} id="name" sx={{mt:5}} fullWidth label="Full Name" helperText={errors.name} error={errors.name ? true : false} />
             <TextField value={values.email} onChange={handleChange} id="email" sx={{mt:5}} fullWidth label="Email" />
             <TextField value={values.mobile} onChange={handleChange} id="mobile" sx={{mt:3}} fullWidth label="Mobile Number" />
             <TextField value={values.age} onChange={handleChange} id="age" sx={{mt:3}} fullWidth label="Age" />
             <TextField value={values.password} onChange={handleChange} id="password" sx={{mt:3}} fullWidth label="Password" type="password" />
             <Button type='submit' sx={{mt:5}}>Submit</Button>
             </form> */}
    </div>
  );
};

export default Signup;
