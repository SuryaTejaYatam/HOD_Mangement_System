import React from "react";
import { Link } from "react-router-dom";

const NavBarHod = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/Hod">
					Head Of The Department
				</Link>
			<div>
            <ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/allSubjects">
								All Subjects
							</Link>
						</li>
					</ul>
            </div>
				<div
					className="collapse navbar-collapse justify-content-between " // Use justify-content-between class to space items
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/addSubjects">
								Add Subjects
							</Link>
						</li>
					</ul>
                  
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link"
								to="/">
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBarHod;