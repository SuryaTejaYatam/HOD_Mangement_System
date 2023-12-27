import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavBarHod from "./NavBarHod";

const AllSubHod = () => {
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      const response = await axios.get("http://localhost:8090/HOD/AllSubjects");
      setSubjects(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleDelete = async (year, subName) => {
    try {
      await axios.delete(`http://localhost:8090/HOD/Delete/${year}/${subName}`);
      loadSubjects(); // Reload the subjects after deletion
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return (
    <div>
      <NavBarHod />
      <section>
        <table className="table table-bordered table-hover shadow">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>YEAR</th>
              <th>Subject Name</th>
              <th>Subject Code</th>
              <th>Teacher Name</th>
              <th colSpan="3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {subjects
              .filter(
                (subject) =>
                  subject.subName.toLowerCase().includes(search.toLowerCase()) ||
                  subject.year.toLowerCase().includes(search.toLowerCase())
              )
              .map((subject, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{subject.year}</td>
                  <td>{subject.subName}</td>
                  <td>{subject.subCode}</td>
                  <td>{subject.teacherName}</td>

                  <td className="mx-2">
                    <Link
                      to={`/editSubject/${subject.year}/${subject.subName}`}
                      className="btn btn-warning"
                    >
                      <AiFillEdit /> {/* Changed to AiFillEdit icon */}
                    </Link>
                  </td>
                  <td className="mx-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(subject.year, subject.subName)}
                    >
                      <AiFillDelete /> {/* Changed to AiFillDelete icon */}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AllSubHod;
