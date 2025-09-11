package com.example.HealthCare.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.HealthCare.dto.BookingDetails;
import com.example.HealthCare.entity.Center;
import com.example.HealthCare.entity.Clinic;
import com.example.HealthCare.entity.User;
import com.example.HealthCare.service.BookingService;
import com.example.HealthCare.service.CenterService;
import com.example.HealthCare.service.ClinicService;
import com.example.HealthCare.service.UserService;

@RestController
@RequestMapping("/diagnostic/admin")
@CrossOrigin(origins = {"http://localhost:5173"})
public class AdminController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	CenterService centerService;
	
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private  ClinicService clinicService;
	
	@PostMapping("/addCenter")
	public ResponseEntity<Center> addCenter(@RequestBody Center center) {
		System.out.print(center);
		return new ResponseEntity<>(centerService.addCenter(center),HttpStatus.CREATED);
	}
	
	@GetMapping("/getAllCenter")
	public ResponseEntity<List<Center>> getAll(){
		try {
			return new ResponseEntity<>(centerService.getAll(),HttpStatus.OK);
			
		}
		catch(Exception e) {
			e.printStackTrace();
			
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/getAllUser")
	public ResponseEntity<List<User>> getAllUser(){

		try {
			return new ResponseEntity<>(userService.getAll(),HttpStatus.OK);
		}
		catch(Exception e) {
			e.printStackTrace();
			
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
		

	}
	
	@GetMapping("/getBookinglist")
	public ResponseEntity<List<BookingDetails>> getAllBookingList(){
		return new ResponseEntity<>(bookingService.getAll(),HttpStatus.OK);

	}
	
	@PostMapping("/addClinic")
	public ResponseEntity<Clinic> addDoctor(@RequestBody  Clinic clinic){
		return new ResponseEntity<>(clinicService.addClinic(clinic),HttpStatus.OK);
		
	}
	
	@GetMapping("/getDoctors/{id}")
	public ResponseEntity<List<Clinic>> getDoctorsByUserId(@PathVariable Long id){
		return new ResponseEntity<>(clinicService.getClinicByUserId(id),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteClinic/{id}")
	public ResponseEntity<Boolean> deleteClinic(@PathVariable Long id){
		return new ResponseEntity<>(clinicService.deleteClinic(id),HttpStatus.OK);
	}
	
	
	@GetMapping("/getDoctorById/{id}")
	public ResponseEntity<Clinic> getDoctorsById(@PathVariable Long id){
		return new ResponseEntity<>(clinicService.getClinicById(id),HttpStatus.OK);
	}
	
	@PutMapping("/updateDoctor/{id}")
	public ResponseEntity<Clinic> updateUser(@PathVariable Long id,@RequestBody Clinic clinic) {
		return new ResponseEntity<>(clinicService.updateClinic(id,clinic),HttpStatus.OK);
	}
	
	
	
	
	
	

}
