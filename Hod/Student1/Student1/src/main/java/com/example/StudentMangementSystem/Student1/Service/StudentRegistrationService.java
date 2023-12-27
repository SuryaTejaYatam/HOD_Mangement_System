package com.example.StudentMangementSystem.Student1.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentMangementSystem.Student1.Entity.StudentRegistration;
import com.example.StudentMangementSystem.Student1.Repository.StudentRegistrationRepository;

@Service
public class StudentRegistrationService {

    @Autowired
    private StudentRegistrationRepository studentRegistrationRepository;

    public String studentRegistration(StudentRegistration studentRegistration) {
       
        StudentRegistration savedStudentRegistration = studentRegistrationRepository.save(studentRegistration);
        
       
        String year = savedStudentRegistration.getYear();
        
        return year;
    }
}
