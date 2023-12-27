package com.example.StudentMangementSystem.Student1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentMangementSystem.Student1.Entity.Login;

@Repository
public interface LoginTeacherRepository extends  JpaRepository<Login,Long> {

    Login findByUsernameAndPassword(String username, String password);
    
}
