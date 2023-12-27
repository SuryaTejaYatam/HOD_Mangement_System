package com.example.StudentMangementSystem.Student1.Service;

import java.util.List;

import com.example.StudentMangementSystem.Student1.Entity.Subjects;

public interface HodService {

    String addTheSub(Subjects subjects);
    List<Subjects> getAllSubjects();
    public Subjects getSubByDetails(String year, String subName);
    public void deleteSubDetails(String year, String subName);
  
    
    
}
