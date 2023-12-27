package com.example.StudentMangementSystem.Student1.Controller;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentMangementSystem.Student1.Entity.Teacher;
import com.example.StudentMangementSystem.Student1.Service.TeacherService;

@RestController
@RequestMapping("/Teacher")
@CrossOrigin(origins="http://localhost:3000")
public class TeacherController {

 
    private final LoginTeacherController loginTeacherController;

    @Autowired
    public TeacherController(LoginTeacherController loginTeacherController)
    {
        this.loginTeacherController=loginTeacherController;
    }

    @Autowired
    private TeacherService teacherService;

    @GetMapping("/")
    public List<Teacher> getAllSubByTeacherName()
    {
        String teacherName=loginTeacherController.name;
       return teacherService.getAllSubByTeacherName(teacherName);
      
    }
    @PostMapping("/material/{subCode}")
    public String placingMaterial(@PathVariable("subCode") String subCode,@RequestBody Teacher teacher)
    {

        teacherService.placingMaterial(subCode,teacher);
        return "Material is Posted";
    }
    @PutMapping("/material/{subCode}")
    public ResponseEntity<Teacher> updatingMaterial(@PathVariable("subCode") String subCode,@RequestBody Teacher teacher)
    {

        Teacher teacher2=teacherService.updatingMaterial(subCode,teacher);
          if (Objects.nonNull(teacher2)) {
          return  ResponseEntity.status(HttpStatus.ACCEPTED).body(teacher2);
        }
        else{
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
   
}
