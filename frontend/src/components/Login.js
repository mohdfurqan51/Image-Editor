import React from 'react'
import { Formik } from 'formik';
import Swal from "sweetalert2";
import Navbar from './Navbar';
import './css/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();


    const userSubmit = async (formdata) => {
      console.log(formdata);
  
  
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(formdata),
        headers : {
          'Content-Type' : 'application/json'
        }
      })
  
      if(res.status === 200) {
        Swal.fire({
          icon : 'success',
          title : 'Login Successful',
          text : 'You are now logged in'
        })
        res.json().then(data => {
          console.log(data);
          sessionStorage.setItem('user', JSON.stringify(data));
          navigate('/dragdrop');
        })
      } else if(res.status === 400) {
        Swal.fire({
          icon : 'error',
          title : 'Login Failed',
          text : 'Invalid username or password'
        })
      } else {
        Swal.fire({
          icon : 'error',
          title : 'Login Failed',
          text : 'Something went wrong'
        })
      }
    };
  
    return (
      <div>
      <Navbar/>
        <div className="col-md-4 mx-auto bg-light">
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
        </div>
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
  