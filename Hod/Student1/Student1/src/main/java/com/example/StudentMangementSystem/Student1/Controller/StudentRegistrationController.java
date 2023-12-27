package com.example.StudentMangementSystem.Student1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentMangementSystem.Student1.Entity.StudentRegistration;
import com.example.StudentMangementSystem.Student1.Service.StudentRegistrationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/Student")
@CrossOrigin(origins="http://localhost:3000")
public class StudentRegistrationController {

    String year; // Variable to store the returned year value

    @Autowired
    private StudentRegistrationService studentRegistrationService; // Correct autowiring for service

    @PostMapping("/StudentRegistrations")
    public String studentRegistration(@Valid @RequestBody StudentRegistration studentRegistration) {
        year = studentRegistrationService.studentRegistration(studentRegistration);

        // Here you can use the 'year' variable or return it as per your requirement
        return "Registered Successful";
    }
}
