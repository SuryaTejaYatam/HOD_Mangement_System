import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBarTeacher from "./NavBarTeacher";

const AddUrlTeacher = () => {
    const navigate = useNavigate();
    const { subCode: paramSubCode } = useParams();
    const [teacher, setTeacher] = useState({
        url: "",
        subName: "",
        subCode: paramSubCode,
        teacherName: ""
    });

    const handleInputChange = (e) => {
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value,
        });
    };

    const { url, subCode, teacherName } = teacher;

    const updateTeacher = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8090/Teacher/material/${subCode}`, teacher);
            navigate("/allSubjectsteacher");
        } catch (error) {
            console.error("Error updating teacher:", error);
        }
    };

    return (
        <div>
            <NavBarTeacher />
            <div className="col-sm-8 py-2 px-5 offset-2 shadow">
                <h2 className="mt-5">Add URL</h2>
                <form onSubmit={(e) => updateTeacher(e)}>
                    <div className="input-group mb-5">
                        <label className="input-group-text" htmlFor="url">
                            URL
                        </label>
                        <input
                            className="form-control col-sm-6"
                            type="text"
                            name="url"
                            id="url"
                            required
                            value={url}
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
                            value={subCode}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
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
                                to={"/allSubjectsteacher"}
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

export default AddUrlTeacher;
