package com.example.HealthCare.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.HealthCare.dto.LoginRequest;
import com.example.HealthCare.dto.SignupRequest;
import com.example.HealthCare.entity.User;
import com.example.HealthCare.security.JwtUtil;
import com.example.HealthCare.service.EmailSenderService;
import com.example.HealthCare.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = {"http://localhost:5173"})
public class AuthController {
	
	@Autowired 
	JwtUtil jwtUtil;
	
	@Autowired
	UserService service;
	
	@Autowired
	private EmailSenderService senderService;
	
	@PostMapping("/signup")
	public ResponseEntity<?>  register(@RequestBody SignupRequest signup) {
		User user=new User();
		user.setEmail(signup.getEmail());
		user.setPassword(signup.getPassword());
		user.setUsername(signup.getUsername());
		user.setRole(signup.getRole());
		
	    service.Signup(user);
	    Map<String, String> response = new HashMap<>();
	    response.put("message", "User Registered Successfully");
		senderService.sendSimpleEmail(user.getEmail(),"Healthcare Signup Process","Successfully registred in Healthcare Website");
	    return ResponseEntity.ok(response);
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginRequest login ){
        boolean valid = service.validateCredentials(login.getEmail(), login.getPassword());
        if (!valid) {
            return ResponseEntity.status(401).body("Invalid Creds");
        }
        User user = service.getByEmail(login.getEmail());
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", user.getId());
        String token = jwtUtil.generateToken(login.getEmail(), claims);
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("username", user.getUsername());
        response.put("role", user.getRole());
        response.put("id", user.getId());
        return ResponseEntity.ok(response);
	}
	

}
