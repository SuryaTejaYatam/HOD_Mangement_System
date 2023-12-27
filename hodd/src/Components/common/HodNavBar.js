import React from 'react';
import { Link } from "react-router-dom";
const HodNavBar = () => {
  return (
    <div>
     	<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
         <div className="container-fluid">
				<Link className="navbar-brand"
                to="/">
					Home
				</Link>
			</div>
			<div className="container-fluid">
				<Link className="navbar-brand">
					Head Of The Department
				</Link>
			</div>
            </nav>
    </div>
  )
}

export default HodNavBar
