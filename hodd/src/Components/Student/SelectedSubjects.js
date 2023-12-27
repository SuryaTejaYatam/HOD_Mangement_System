import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import StudentNav from './StudentNav';
const SelectedSubjects = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8090/Student/Subject");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleDelete = async (subCode) => {
    try {
      await axios.delete(`http://localhost:8090/Student/deleteSubject/${subCode}`);
      loadStudents(); // Reload the subjects after deletion
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };

  return (
    <div><StudentNav />
    <section>
      {/* Your Search component can be added here */}
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Subject Name</th>
            <th>Subject Code</th>
            <th>Teacher Name</th>
            <th>URL</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students
            .filter((student) =>
              student.subName.toLowerCase().includes(search.toLowerCase())
            )
            .map((student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{student.subName}</td>
                <td>{student.subCode}</td>
                <td>{student.teacherName}</td>
                <td>{student.url}</td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.subCode)}
                  >
                    <FaTrashAlt /> Delete
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

export default SelectedSubjects;
