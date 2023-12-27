import React from "react";
import { Link } from "react-router-dom";

const NavBarTeacher = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand" 
				to="/Teacher">
					Teacher
				</Link>
			<div>
            <ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link active"
								aria-current="page"
								to="/allSubjectsteacher">
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
								to="/addUrl">
								Add URL
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

export default NavBarTeacher;