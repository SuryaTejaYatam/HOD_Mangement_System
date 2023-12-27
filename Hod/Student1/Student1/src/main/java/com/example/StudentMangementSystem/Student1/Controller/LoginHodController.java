package com.example.StudentMangementSystem.Student1.Controller;


    import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentMangementSystem.Student1.Entity.Login;
import com.example.StudentMangementSystem.Student1.Service.LoginService;


@RestController
@RequestMapping("/Login")
@CrossOrigin(origins="http://localhost:3000")
public class LoginHodController {
    @Autowired
    private LoginService loginService;
   @GetMapping("/HodLogin/{username}/{password}")
    public String HodLogin(@PathVariable("username")String username, @PathVariable("password")String password)
    {
        Login login=loginService.HodLogin(username,password);
        
         if (login != null) {
            return "Login";
        } else {
            
            throw new IllegalStateException("Login failed");
        }
    }
    }
    

