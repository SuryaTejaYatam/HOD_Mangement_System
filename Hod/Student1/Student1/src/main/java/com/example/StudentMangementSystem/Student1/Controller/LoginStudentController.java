package com.example.StudentMangementSystem.Student1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentMangementSystem.Student1.Entity.StudentRegistration;
import com.example.StudentMangementSystem.Student1.Service.LoginService;


@RestController
@RequestMapping("/StudentLogin")
@CrossOrigin(origins="http://localhost:3000")
public class LoginStudentController {
    @Autowired
    private LoginService loginStudentService;
    public String registration;
    public String years;
   @GetMapping("/{emailId}/{registrationNumber}")
    public String studentLogin(@PathVariable("emailId")String emailId, @PathVariable("registrationNumber")String registrationNumber)
    {
        StudentRegistration studentRegistration=loginStudentService.studentLogin(emailId,registrationNumber);
         registration=registrationNumber;
       
         if (studentRegistration != null) {
             years=studentRegistration.getYear();
            return "Login";
         }
         else{
            return "Login Failed";
         }
       
    }
    }

    


    
