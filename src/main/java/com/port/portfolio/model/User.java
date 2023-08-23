package com.port.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {
    @Id
    @Column(name="name")
    private String name;
    @Column(name="email")
    private String email;



    @Column(name="password")
    private String password;
    @Column(name = "confirmPassword")
    private String confirmPassword;

    public  User() { }
    public User(String name, String email, String password, String confirmPassword){
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword= confirmPassword;

    }
    public String getName(){
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }


}