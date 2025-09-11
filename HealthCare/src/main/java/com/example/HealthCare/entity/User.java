package com.example.HealthCare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;






@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
    @Column( nullable = false)
	private String username;
	private String role;
    @Column(unique = true, nullable = false)
	private String email;
    @Column( nullable = false)
	private String password;
    
    private String address;
    private String contactNo;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(String role, String email, String password, String username) {
		super();
		this.role = role;
		this.email = email;
		this.password = password;
		this.username=username;
	}
	

	
	
	public User( String username, String role, String email, String password, String address,
			String contactNo) {
		super();
		this.username = username;
		this.role = role;
		this.email = email;
		this.password = password;
		this.address = address;
		this.contactNo = contactNo;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
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
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	
	
	
	
	
	

}
