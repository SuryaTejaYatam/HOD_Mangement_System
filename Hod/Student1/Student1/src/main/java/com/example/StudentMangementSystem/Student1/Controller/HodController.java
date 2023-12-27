package com.example.StudentMangementSystem.Student1.Controller;


import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import  com.example.StudentMangementSystem.Student1.Entity.Subjects;
import com.example.StudentMangementSystem.Student1.Service.HodServiceImp;

@RestController
@RequestMapping("/HOD")
@CrossOrigin(origins="http://localhost:3000")
public class HodController {

    @Autowired
    private HodServiceImp hodService;
    @PostMapping("/addTheSub")
    public ResponseEntity<String> addTheSub(@RequestBody Subjects subjects)
    {
        hodService.addTheSub(subjects);
        return ResponseEntity.status(HttpStatus.CREATED).body("SAVED");
    }

    @GetMapping("/AllSubjects")
    public ResponseEntity<List<Subjects>> getAllSubjects()
    {
        List<Subjects> subjects=hodService.getAllSubjects();
        if (Objects.nonNull(subjects)) {
          return  ResponseEntity.status(HttpStatus.ACCEPTED).body(subjects);
        }
        else{
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        
    }
    @GetMapping("/Subjects/{year}/{subName}")
    public ResponseEntity<Subjects>  getSubByDetails(@PathVariable("year")String year,@PathVariable("subName") String subName){

        Subjects subjects=hodService.getSubByDetails(year,subName);
        if (Objects.nonNull(subjects)) {
          return  ResponseEntity.status(HttpStatus.ACCEPTED).body(subjects);
        }
        else{
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        
    }
    @PutMapping("/updateSujectsDetails/{year}/{subName}")
     public ResponseEntity<Subjects>  updateSubByDetails(@PathVariable("year")String year,@PathVariable("subName") String subName ,@RequestBody Subjects subjects){

    
         Subjects subject=hodService.updateSubByDetails(year,subName,subjects);

        if (Objects.nonNull(subject)) {
          return  ResponseEntity.status(HttpStatus.ACCEPTED).body(subject);
        }
        else{
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
     }
      @DeleteMapping("/Delete/{year}/{subName}")
      public String deleteSubDetails(@PathVariable("year")String year,@PathVariable("subName") String subName)
      {
        hodService.deleteSubDetails(year,subName);
        return "Deleted";

      }
    
}
