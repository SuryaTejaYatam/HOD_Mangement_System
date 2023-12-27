import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentNav from './StudentNav';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    emailId: '',
    registrationNumber: '',
  });

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(credentials); 
    try {
      const response = await axios.get(`http://localhost:8090/StudentLogin/${credentials.emailId}/${credentials.registrationNumber}`);
      
      // Check if the response indicates a successful login (adjust based on your backend response)
      if (response.status === 200) {
        console.log(response.data);
        console.log('Login successful');
        navigate('/allSubjectsStudent'); // Redirect to the dashboard or desired page
      } else {
        
        console.log('Invalid credentials'); // Log a message for invalid credentials
        // Handle invalid login attempt, display a message, or take appropriate action
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error or show a message to the user
    }
  };

  return (
    <div>
      <StudentNav />
      {/* HodNavBar or any other component related to header */}
      <div className='container w-50 mt-5'>
        <div className='card shadow p-3'>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <h2>Student</h2>
              <label htmlFor="exampleInputemailId1" className="form-label">emailId</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputemailId1"
                aria-describedby="emailIdHelp"
                name="emailId"
                value={credentials.emailId}
                onChange={changeHandler}
              />
              <div id="emailIdHelp" className="form-text">We'll never share your emailId with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputregistrationNumber1" className="form-label">registrationNumber</label>
              <input
                type="registrationNumber"
                className="form-control"
                id="exampleInputregistrationNumber1"
                name='registrationNumber'
                value={credentials.registrationNumber}
                onChange={changeHandler}
              />
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
