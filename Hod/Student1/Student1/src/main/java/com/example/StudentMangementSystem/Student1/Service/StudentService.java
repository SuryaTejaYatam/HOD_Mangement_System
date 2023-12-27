package com.example.StudentMangementSystem.Student1.Service;

import java.util.List;

import com.example.StudentMangementSystem.Student1.Entity.Student;
import com.example.StudentMangementSystem.Student1.Entity.Teacher;

public interface StudentService {

    List<Teacher> getAllSub(String year);



    List<Student> getSelectedSub(String registrationNumber,String getSelectedSub);

    void deleteSubject(String registrationNumber, String subCode);

    void addSubject(String subCode, Teacher teacher, String registration);
}
