import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBarTeacher from "./NavBarTeacher";

const AllSubTearcher = () => {
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    try {
      const response = await axios.get("http://localhost:8090/Teacher/");
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>    < NavBarTeacher />
    <section>
      {/* Your Search component can be added here */}
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>YEAR</th>
            <th>Subject Name</th>
            <th>Subject Code</th>
            <th>Teacher Name</th>
            <th>URL</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {teachers
            .filter((teacher) =>
              teacher.subName.toLowerCase().includes(search.toLowerCase())
            )
            .map((teacher, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{teacher.year}</td>
                <td>{teacher.subName}</td>
                <td>{teacher.subCode}</td>
                <td>{teacher.teacherName}</td>
                <td>{teacher.url}</td>
                
                <td className="mx-2">
                  <Link
                    to={`/editUrl/${teacher.subCode}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                {/* Add delete functionality here */}
              </tr>
            ))}
        </tbody>
      </table>
    </section>
    </div>
  );
};

export default AllSubTearcher;
