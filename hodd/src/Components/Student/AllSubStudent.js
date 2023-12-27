import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import StudentNav from './StudentNav';
const AllSubStudent = () => {
  const navigate = useNavigate();
  const [Students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8090/Student/allSubjects");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleAddClick = async (subCode) => {
    try {
     
      await axios.post(`http://localhost:8090/Student/Subject/${subCode}`, {
      
        subCode: subCode 
     
    
      });
      // Perform any other actions after successful post if needed
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  return (
    <div>
      <StudentNav />
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
            <th>ACTION</th>
          
          </tr>
        </thead>
        <tbody className="text-center">
          {Students
            .filter((Student) =>
              Student.subName.toLowerCase().includes(search.toLowerCase())
            )
            .map((Student, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{Student.year}</td>
                <td>{Student.subName}</td>
                <td>{Student.subCode}</td>
                <td>{Student.teacherName}</td>
                <td>{Student.url}</td>
                
                <td className="mx-2">
                <button
                      className="btn btn-success"
                      onClick={() => handleAddClick(Student.subCode)} // Pass subCode to the handler
                    >
                      <FaPlus />
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

export default AllSubStudent;
