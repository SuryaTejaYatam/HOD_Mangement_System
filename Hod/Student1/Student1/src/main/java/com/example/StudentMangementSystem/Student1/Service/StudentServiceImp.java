package com.example.StudentMangementSystem.Student1.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentMangementSystem.Student1.Entity.Student;
import com.example.StudentMangementSystem.Student1.Entity.Teacher;
import com.example.StudentMangementSystem.Student1.Repository.StudentRepository;
import com.example.StudentMangementSystem.Student1.Repository.TeacherRepository;

@Service
public class StudentServiceImp implements StudentService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;


    @Override
    public List<Teacher> getAllSub(String year) {

        List<Teacher> teachers = teacherRepository.findByYear(year);

        return teachers;
    }

    @Override
    public void addSubject(String subCode, Teacher teacher,String registration) {

        Teacher teachers = teacherRepository.findBySubCode(subCode);

        Student student = new Student();

        student.setSubName(teachers.getSubName());
        student.setUrl(teachers.getUrl());
        student.setTeacherName(teachers.getTeacherName());
        student.setSubCode(teachers.getSubCode());
        student.setRegistrationNumber(registration);

        studentRepository.save(student);
    }

    @Override
    public List<Student> getSelectedSub(String registrationNumber,String getSelectedSub) {

        List<Student> students = studentRepository.findByRegistrationNumber(getSelectedSub);
        return students;

    }

    @Override
    public void deleteSubject(String registrationNumber, String subCode) {

        Student student = studentRepository.findByRegistrationNumberAndSubCode(registrationNumber, subCode);

        studentRepository.delete(student);
    }
}
