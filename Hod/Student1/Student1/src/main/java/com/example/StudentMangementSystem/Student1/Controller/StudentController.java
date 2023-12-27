package com.example.StudentMangementSystem.Student1.Controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentMangementSystem.Student1.Entity.Student;
import com.example.StudentMangementSystem.Student1.Entity.Teacher;
import com.example.StudentMangementSystem.Student1.Service.StudentService;

@RestController
@RequestMapping("/Student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService studentService;

    private final LoginStudentController loginStudentController;

    @Autowired
    public StudentController(LoginStudentController loginStudentController,StudentRegistrationController studentRegistrationController) {
        this.loginStudentController = loginStudentController;
      
    }
 


 

    @GetMapping("/allSubjects")
    public ResponseEntity<List<Teacher>> getAllSub() {
      String year=loginStudentController.years;
        List<Teacher> teacher = studentService.getAllSub(year);

        if (Objects.nonNull(teacher)) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(teacher);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PostMapping("/Subject/{subCode}")
    public String addSubject(@PathVariable("subCode") String subCode, @RequestBody Teacher teacher) {
     
        String registration = loginStudentController.registration;
        studentService.addSubject(subCode, teacher,registration);
        return "Added";
    }


    @GetMapping("/Subject")
    public ResponseEntity<List<Student>> getSelectedSub( String getSelectedSub) {
        String registration = loginStudentController.registration;
        List<Student> students = studentService.getSelectedSub(getSelectedSub,registration);

        
        if (Objects.nonNull(students)) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(students);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @DeleteMapping("deleteSubject/{subCode}")
    public String deleteSubject( @PathVariable("subCode") String subCode) {
         String registration = loginStudentController.registration;    
        studentService.deleteSubject(registration, subCode);
        return "Deleted";
    }

}
