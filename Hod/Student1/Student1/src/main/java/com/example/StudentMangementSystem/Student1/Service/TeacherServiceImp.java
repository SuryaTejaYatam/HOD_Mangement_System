package com.example.StudentMangementSystem.Student1.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentMangementSystem.Student1.Entity.Subjects;
import com.example.StudentMangementSystem.Student1.Entity.Teacher;
import com.example.StudentMangementSystem.Student1.Error.detailsNotFoundException;
import com.example.StudentMangementSystem.Student1.Repository.HodRepository;
import com.example.StudentMangementSystem.Student1.Repository.TeacherRepository;

@Service
public class TeacherServiceImp implements TeacherService {

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private HodRepository hodRepository;


    @Override
    public List<Teacher> getAllSubByTeacherName(String teacherName) {
        List<Subjects> subjects = hodRepository.findByTeacherName(teacherName);
        List<Teacher> teachersList = new ArrayList<>();

        for (Subjects subject : subjects) {
            String subCode = subject.getSubCode();

            // Check if the subCode already exists in the TeacherRepository
            if (!teacherRepository.existsBySubCode(subCode)) {
                Teacher teacher = new Teacher();

                teacher.setSubName(subject.getSubName());
                teacher.setYear(subject.getYear());
                teacher.setTeacherName(subject.getTeacherName());
                teacher.setSubCode(subCode);

                teachersList.add(teacher);
            }
        }

        // Save only the unique teachers to TeacherRepository
         teacherRepository.saveAll(teachersList);
        List<Teacher> teachers=teacherRepository.findByTeacherName(teacherName);
        return teachers;
    }



  @Override
  public void placingMaterial(String subCode, Teacher teacher) {

    Teacher teacher2 = teacherRepository.findBySubCode(subCode);
    if (Objects.nonNull(teacher2)) {
      teacher2.setUrl(teacher.getUrl());
      teacherRepository.save(teacher2);
    } else {
      throw new detailsNotFoundException("THERE IS NO SUBJECT WITH THE CODE ");
    }
  }

  @Override
  public Teacher updatingMaterial(String subCode, Teacher teacher) {

    Teacher teacher2 = teacherRepository.findBySubCode(subCode);

    if (Objects.nonNull(teacher2)) {
      teacher2.setUrl(teacher.getUrl());
      teacherRepository.save(teacher2);
      return teacher2;
    } else {
      throw new detailsNotFoundException("THERE IS NO SUBJECT WITH THE CODE ");
    }

  }

}
