import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import NavBarHod from "./NavBarHod";
const EditSubHod = () => {
    const navigate = useNavigate();
    const { year, subName } = useParams(); 
    const [subject, setSubject] = useState({
        year: "",
        subName: "",
        subCode: "",
        teacherName: "",
        // Add more fields as needed for the subject
        // For example: position, salary, etc.
    });

    useEffect(() => {
        loadSubject();
    }, []);

    const loadSubject = async () => {
        try {
            const result = await axios.get(`http://localhost:8090/HOD/Subjects/${year}/${subName}`);
            setSubject(result.data);
        } catch (error) {
            console.error("Error loading subject:", error);
        }
    };

    const handleInputChange = (e) => {
        setSubject({
            ...subject,
            [e.target.name]: e.target.value,
        });
    };

    const { subCode, teacherName } = subject; // Destructuring subCode and teacherName from state

    const updateSubject = async (e) => {
        e.preventDefault();
        try {
            // Assuming subName is derived from the subject state
            const { year, subName } = subject;
    
            if (year && subName) {
                await axios.put(`http://localhost:8090/HOD/updateSujectsDetails/${year}/${subName}`, subject);
                
                navigate("/allSubjects");
            } else {
                console.log(subject);
                console.error("Year or subName is missing.");
            }
        } catch (error) {
            console.error("Error updating subject:", error);
        }
    };
    

    return (
        <div>
        <NavBarHod />
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Edit Subject</h2>
            <form onSubmit={(e) => updateSubject(e)}>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="year">
                        Year
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="year"
                        id="year"
                        required
                        value={subject.year} 
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="subName">
                        Subject Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="subName"
                        id="subName"
                        required
                        value={subName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="subCode">
                        Subject Code
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="subCode"
                        id="subCode"
                        required
                        value={subCode} // Using destructured subCode
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label className="input-group-text" htmlFor="teacherName">
                        Teacher Name
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="teacherName"
                        id="teacherName"
                        required
                        value={teacherName} // Using destructured teacherName
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                {/* Add other input fields for subject details */}
                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-outline-success btn-lg"
                        >
                            Save
                        </button>
                    </div>
                    <div className="col-sm-2">
                        <Link
                            to={"/view-subjects"}
                            className="btn btn-outline-warning btn-lg"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default EditSubHod;
