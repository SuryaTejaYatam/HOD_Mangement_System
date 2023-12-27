import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Studentreg = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    branch: '',
    year: '',
    registrationNumber: '',
    phoneNumber: '',
  });

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(credentials);
    if (!credentials.registrationNumber.trim()) {
      console.error('Register Number cannot be empty.');
      return; // Do not proceed with form submission
    }

      try {
         await axios.post(
          "http://localhost:8090/Student/StudentRegistrations",credentials
        );
        navigate("/studentlogin");
      } catch (error) {
        console.error("Error adding StudentRegistration:", error);
        if (error.response) {
          console.log("Server response:", error.response.data);
          // You can handle specific error messages here
        }
      }
    };
    


  return (
    <div className='container w-50 mt-5'>
      <div className='card shadow p-3'>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <h2>STUDENT REGISTER</h2>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" className="form-control" name='firstName' value={credentials.firstName} onChange={changeHandler}/>
            
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" name='lastName' value={credentials.lastName} onChange={changeHandler}/>
            
            <label htmlFor="emailId" className="form-label">emailId address</label>
            <input type="emailId" className="form-control" name='emailId' aria-describedby="emailIdHelp" value={credentials.emailId} onChange={changeHandler}/>
            <div className="form-text">We'll never share your emailId with anyone else.</div>
            
            <label htmlFor="branch" className="form-label">Branch</label>
            <input type="text" className="form-control" name='branch' value={credentials.branch} onChange={changeHandler}/>
            
            <label htmlFor="year" className="form-label">Year</label>
            <input type="text" className="form-control" name='year' value={credentials.year} onChange={changeHandler}/>
            
            <label htmlFor="registrationNumber" className="form-label">Register Number</label>
            <input type="text" className="form-control" name='registrationNumber' value={credentials.registrationNumber} onChange={changeHandler}/>
            
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" name='phoneNumber' value={credentials.phoneNumber} onChange={changeHandler}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to="/studentlogin" className="mb-3">I'm already a user</Link>
      </div>
    </div>
  );

  }
export default Studentreg;
