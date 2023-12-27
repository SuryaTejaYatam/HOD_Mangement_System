package com.example.StudentMangementSystem.Student1.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentMangementSystem.Student1.Entity.Subjects;
import com.example.StudentMangementSystem.Student1.Repository.HodRepository;
@Service
public class HodServiceImp implements HodService{

    @Autowired
    private HodRepository hodRepository;
    
    public String  addTheSub(Subjects subjects)
    {
        hodRepository.save(subjects);
        return "SAVED";
    }

    public List<Subjects> getAllSubjects() {

        List<Subjects> subjects=hodRepository.findAll();
         return subjects;
    }

    public Subjects getSubByDetails(String year, String subName) {

        Subjects subjects=hodRepository.findByYearAndSubName(year, subName);
        return subjects;
    }

    public Subjects updateSubByDetails(String year, String subName, Subjects subjects) {

       
        Subjects sub=hodRepository.findByYearAndSubName(year, subName);

        
        sub.setYear(subjects.getYear());
        sub.setSubName(subjects.getSubName());
        sub.setSubCode(subjects.getSubCode());
        sub.setTeacherName(subjects.getTeacherName());

        hodRepository.save(sub);
        return sub;
      }

    public void deleteSubDetails(String year, String subName) {
        Subjects sub=hodRepository.findByYearAndSubName(year, subName);
        hodRepository.delete(sub);
    }

 
     
    }
    

