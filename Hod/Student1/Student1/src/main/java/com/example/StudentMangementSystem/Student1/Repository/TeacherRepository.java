package com.example.StudentMangementSystem.Student1.Repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentMangementSystem.Student1.Entity.Student;
import com.example.StudentMangementSystem.Student1.Entity.Teacher;


@Repository
public interface TeacherRepository extends JpaRepository<Teacher,Long>{
    Teacher findBySubCode(String subCode);
     List<Teacher>  findByYear(String year);
    void save(Student student);
    Optional<Teacher> findBySubNameAndYearAndTeacherName(String subName, String year, String teacherName);
    boolean existsBySubCode(String subCode);
    List<Teacher> findByTeacherName(String teacherName);

}
