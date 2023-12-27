package com.example.StudentMangementSystem.Student1.Service;

import org.springframework.stereotype.Service;

import com.example.StudentMangementSystem.Student1.Entity.Login;
import com.example.StudentMangementSystem.Student1.Entity.StudentRegistration;
import com.example.StudentMangementSystem.Student1.Repository.LoginHodRepository;
import com.example.StudentMangementSystem.Student1.Repository.LoginStudentRepository;
import com.example.StudentMangementSystem.Student1.Repository.LoginTeacherRepository;

@Service
public class LoginServiceImp implements LoginService {

    private final LoginStudentRepository loginStudentRepository;
    private final LoginHodRepository hodRepository;
    private final LoginTeacherRepository loginTeacherRepository;
    
    public LoginServiceImp(LoginStudentRepository loginStudentRepository, LoginHodRepository hodRepository,LoginTeacherRepository loginTeacherRepository) {
        this.loginStudentRepository = loginStudentRepository;
        this.hodRepository = hodRepository;
        this.loginTeacherRepository=loginTeacherRepository;
    }
    
    public StudentRegistration studentLogin(String emailId, String registrationNumber) {
     
        if (emailId == null || registrationNumber == null) {
          
            return null;
        }

        StudentRegistration studentRegistration = loginStudentRepository.findByEmailIdAndRegistrationNumber(emailId, registrationNumber);
        return studentRegistration;
    }

    public Login HodLogin(String username, String password) {
    
        if (username == null || password == null) {
         
            return null;
        }

        Login login = hodRepository.findByUsernameAndPassword(username, password);
        return login;
    }

    @Override
    public Login TeacherLogin(String username, String password) {
      
          if (username == null || password == null) {
         
            return null;
        }

        Login login = loginTeacherRepository.findByUsernameAndPassword(username, password);
        return login;

    }

   

}
