package com.example.StudentMangementSystem.Student1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentMangementSystem.Student1.Entity.StudentRegistration;



@Repository
public interface LoginStudentRepository extends JpaRepository<StudentRegistration, Long> {

    StudentRegistration findByEmailIdAndRegistrationNumber(String emailId, String registrationNumber);

}
