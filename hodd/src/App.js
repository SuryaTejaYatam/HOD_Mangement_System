import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddSubjectHod from "./Components/Hod/AddSubjectHod";
import AllSubHod from "./Components/Hod/AllSubHod";
import EditSubHod from "./Components/Hod/EditSubHod";
import HodLogin from "./Components/Hod/LoginHod";
import NavBar from "./Components/Hod/NavBarHod";
import AllSubStudent from "./Components/Student/AllSubStudent";
import SelectedSubjects from "./Components/Student/SelectedSubjects";
import StudentLogin from "./Components/Student/StudentLogin";
import StudentReg from "./Components/Student/StudentReg";
import AddUrlTeacher from "./Components/Teacher/AddUrlTeacher";
import AllSubTearcher from "./Components/Teacher/AllSubTearcher";
import EditUrlTeacher from "./Components/Teacher/EditUrlTeacher";
import TeacherLogin from "./Components/Teacher/TeacherLogin";
import NavBarTeacher from "./Components/common/NavBarTeacher";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/HodLogin" element={<HodNavBar />}/> */}
          <Route path="/Teacher" element={<NavBarTeacher />}/>
          <Route path="/TeacherLogin" element={<TeacherLogin />} />
          <Route path="/Hod" element={<NavBar />} />
          <Route path="/allSubjectsteacher" element={<AllSubTearcher />} />
          <Route path="/addUrl" element={<AddUrlTeacher />} />
          <Route path="/editUrl/:subCode" element={<EditUrlTeacher />} />
          <Route path="/StudentRegistration" element={<StudentReg />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/allSubjectsStudent" element={<AllSubStudent />} />
          <Route
            path="/selectedSubjectsStudent"
            element={<SelectedSubjects />}
          />
          <Route path="/addSubjects/:subCode" element={<SelectedSubjects />} />
          <Route path="/HodLogin" element={<HodLogin />} />
          <Route path="/allSubjects" element={<AllSubHod />} />
          <Route path="/addSubjects" element={<AddSubjectHod />} />
          <Route path="/editSubject/:year/:subName" element={<EditSubHod />} />
          {/* <Route path="/addSubjects/:subCode" element={<AddSubStudent />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
