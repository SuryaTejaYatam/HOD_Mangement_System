package com.example.StudentMangementSystem.Student1.Repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.StudentMangementSystem.Student1.Entity.Subjects;

public interface HodRepository extends JpaRepository<Subjects,Long>{

    public Subjects findByYearAndSubName(String year, String subName);

    public List<Subjects>  findByTeacherName(String teacherName);
}


