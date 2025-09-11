package com.example.HealthCare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.HealthCare.dto.UserRequest;
import com.example.HealthCare.entity.User;
import com.example.HealthCare.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository userRepo;
	
	public User Signup(User user) {
		if(userRepo.existsByEmail(user.getEmail())) throw new RuntimeException("Email Exists"); 
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepo.save(user);
		
	}
	
	public User getByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	
    public boolean validateCredentials(String email, String rawPassword) {
        User userOpt = userRepo.findByEmail(email);
        return userOpt!=null && passwordEncoder.matches(rawPassword, userOpt.getPassword());
    }
    
    public List<User> getAll(){
    	return userRepo.findAll();
    }
    
    public User getUserById(Long id) {
    	return userRepo.findById(id).get();
    }
    
    public User updateUser(Long id,UserRequest user) {
    	User fetchUser=userRepo.findById(id).get();
    	fetchUser.setUsername(user.getUsername());
    	fetchUser.setAddress(user.getAddress());
    	fetchUser.setContactNo(user.getContactNo());
    	return userRepo.save(fetchUser);
    }
    
    
    
    

}
