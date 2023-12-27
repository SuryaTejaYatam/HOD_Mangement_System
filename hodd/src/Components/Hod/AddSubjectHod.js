import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarHod from "./NavBarHod";
const AddSubjects = () => {
    let navigate = useNavigate();
    const [subjects, setSubjects] = useState({
        year: "",
        subName: "",
        subCode: "",
        teacherName: "",
    });

    const { year, subName, subCode, teacherName } = subjects;

    const handleInputChange = (e) => {
        setSubjects({
            ...subjects,
            [e.target.name]: e.target.value,
        });
    };

    const saveSubjects = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://localhost:8090/HOD/addTheSub",
                subjects
            );
            navigate("/allSubjects");
        } catch (error) {
            console.error("Error adding subject:", error);
            // Handle error states, show user a message, etc.
        }
    };

    return (
        <div>
            <NavBarHod />
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5">Add subjects</h2>
            <form onSubmit={(e) => saveSubjects(e)}>
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
                        value={year}
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
                        value={subCode}
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
                        value={teacherName}
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
                            to={"/allSubjects"}
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

export default AddSubjects;
