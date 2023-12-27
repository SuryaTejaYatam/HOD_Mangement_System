import React from 'react';
import { Link } from "react-router-dom";

const StudentNavBar = () => {
	return (
	  <div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
		  <div className="container-fluid d-flex justify-content-start align-items-center">
			<Link className="navbar-brand" to="/">Home</Link>
			<span className="navbar-brand ml-3">Student</span>
		  </div>
		</nav>
	  </div>
	)
  }
  

  


export default StudentNavBar;
