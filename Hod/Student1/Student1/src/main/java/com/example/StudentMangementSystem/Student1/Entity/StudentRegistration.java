package com.example.StudentMangementSystem.Student1.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "StudentRegistration")
public class StudentRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
   
    private String firstName;
    private String lastName;
     @NotBlank(message = "Registration Number is required")
    private String registrationNumber;
    @Email(message = "Email should be valid")
    private String emailId;
    private String phoneNumber;
    private String branch;
    private String year;


    
}

