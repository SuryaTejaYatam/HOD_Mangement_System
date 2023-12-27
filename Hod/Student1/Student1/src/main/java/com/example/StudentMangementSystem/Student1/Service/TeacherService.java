package com.example.StudentMangementSystem.Student1.Service;



import java.util.List;

import com.example.StudentMangementSystem.Student1.Entity.Teacher;
public interface TeacherService {

    List<Teacher> getAllSubByTeacherName(String teacherName);
    void placingMaterial(String subCode, Teacher teacher);

    Teacher updatingMaterial(String subCode, Teacher teacher);

   
    
}
