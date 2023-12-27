import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBarTeacher from "./NavBarTeacher";

const EditUrlTeacher = () => {
    const navigate = useNavigate();
    const { subCode } = useParams(); 
    const [teacher, setTeacher] = useState({
        url: "",
        subName: "",
        subCode: subCode,
        teacherName: ""
    });

    useEffect(() => {
        loadTeacher();
    }, []);

    const loadTeacher = async () => {
        try {
            const result = await axios.get(`http://localhost:8090/Teacher/Teacher/${subCode}`);
            setTeacher(result.data); // Assuming the API response contains all the necessary teacher data
        } catch (error) {
            console.error("Error loading teacher:", error);
        }
    };

    const handleInputChange = (e) => {
        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value,
        });
    };

    const { url, subName, teacherName } = teacher;

    const updateTeacher = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8090/Teacher/material/${subCode}`, teacher);
            navigate("/allSubjectsteacher");
        } catch (error) {
            console.error("Error updating teacher:", error);
        }
    };

    return (
        <div>
            <NavBarTeacher />
            <div className="col-sm-8 py-2 px-5 offset-2 shadow">
                <h2 className="mt-5">Edit URL</h2>
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
                    {/* <div className="input-group mb-5">
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
                    </div> */}
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
                            disabled // Disable editing of subCode from the URL
                        />
                    </div>
                    {/* <div className="input-group mb-5">
                        <label className="input-group-text" htmlFor="teacherName">
                            Teacher Name
                        </label>
                        <input
                            className="form-control col-sm-6"
                            type="text"
                            name="teacherName"
                            id="teacherName"
                            required
                            value={teacherName}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div> */}
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

export default EditUrlTeacher;
