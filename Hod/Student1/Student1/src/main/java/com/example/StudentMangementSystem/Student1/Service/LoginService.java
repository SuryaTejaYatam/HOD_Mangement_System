package com.example.StudentMangementSystem.Student1.Service;

import com.example.StudentMangementSystem.Student1.Entity.Login;
import com.example.StudentMangementSystem.Student1.Entity.StudentRegistration;

public interface LoginService {
    public StudentRegistration studentLogin(String emailId, String regestrationNumber);

    public Login HodLogin(String username, String password);

    public Login TeacherLogin(String username, String password);
}
