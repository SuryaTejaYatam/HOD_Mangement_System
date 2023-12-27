package com.example.StudentMangementSystem.Student1.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentMangementSystem.Student1.Entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

   List<Student> findByRegistrationNumber(String registrationNumber);

    Student findByRegistrationNumberAndSubCode(String registrationNumber,String subCode);


}
