import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HodNavBar from './HodNavBar';

const LoginHod = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8090/Login/HodLogin/${credentials.username}/${credentials.password}`);
      console.log(response.data); // Log the response data if needed
      navigate('/Hod');
    } catch (error) {
      console.error('Error:', error);
      // Handle error or show a message to the user
    }
  };

  return (
    <div>
      <HodNavBar />
      {/* HodNavBar or any other component related to header */}
      <div className='container w-50 mt-5'>
        <div className='card shadow p-3'>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <h2>HOD</h2>
              <label htmlFor="exampleInputusername1" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputusername1"
                aria-describedby="usernameHelp"
                name="username"
                value={credentials.username}
                onChange={changeHandler}
              />
              <div id="usernameHelp" className="form-text">We'll never share your username with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name='password'
                value={credentials.password}
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

export default LoginHod;
