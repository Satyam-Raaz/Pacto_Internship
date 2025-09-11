package com.example.HealthCare.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.HealthCare.dto.BookingDetails;
import com.example.HealthCare.dto.BookingDoctorRequest;
import com.example.HealthCare.dto.BookingRequest;
import com.example.HealthCare.dto.UserRequest;
import com.example.HealthCare.entity.Booking;
import com.example.HealthCare.entity.BookingDoctor;
import com.example.HealthCare.entity.Center;
import com.example.HealthCare.entity.Clinic;
import com.example.HealthCare.entity.Test;
import com.example.HealthCare.entity.User;
import com.example.HealthCare.service.BookingDoctorService;
import com.example.HealthCare.service.BookingService;
import com.example.HealthCare.service.CenterService;
import com.example.HealthCare.service.ClinicService;
import com.example.HealthCare.service.EmailSenderService;
import com.example.HealthCare.service.UserService;


@RestController
@RequestMapping("/diagnostic/user")
@CrossOrigin(origins = {"http://localhost:5173"})
public class UserController {

	
	@Autowired
	private CenterService centerService;
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private BookingDoctorService bookingDoctorService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ClinicService clinicService;  
	
	
	@Autowired
	private EmailSenderService senderService;
	
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
	
	@GetMapping("/getTest/{id}")
	public ResponseEntity<List<Test>> getTestById(@PathVariable Long id) {
		return new ResponseEntity<>(centerService.getTestById(id),HttpStatus.OK);
		
	}
	
	
	@GetMapping("/getCentername/{id}")
	public ResponseEntity<String> getCenterName(@PathVariable Long id) {
		return new ResponseEntity<>(centerService.getCenterName(id),HttpStatus.OK);
		
	}
	

	
	@GetMapping("/search/{name}")
	public ResponseEntity<List<Center>> getCenterByTest(@PathVariable String name){
		return new ResponseEntity<>(centerService.getCenterByTest(name),HttpStatus.OK);
	}
	
	@PostMapping("/booking/{id}")
	public ResponseEntity<Booking> addBooking(@RequestBody BookingRequest booking ,@PathVariable Long id) {
		User user=userService.getUserById(id);
		senderService.sendSimpleEmail(user.getEmail(),"This is email body","This is email subject");
		return new ResponseEntity<>(bookingService.addBooking(booking,id),HttpStatus.OK);
	}
	
	@GetMapping("/getBookingDetails/{id}")
	public ResponseEntity<List<BookingDetails>> getBookingDetails(@PathVariable Long id) {
		return new ResponseEntity<>(bookingService.getBooking(id),HttpStatus.OK);
	}
	
	@GetMapping("/getUser/{id}")
	public ResponseEntity<User> getUser(@PathVariable Long id) {
		return new ResponseEntity<>(userService.getUserById(id),HttpStatus.OK);
		
	}
	
	@GetMapping("/getAllDoctors")
	public ResponseEntity<List<Clinic>> getAllDoctors(){
		return new ResponseEntity<>(clinicService.getAll(),HttpStatus.OK);
	}
	

	
	@PutMapping("/updateUser/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody UserRequest user) {
		return new ResponseEntity<>(userService.updateUser(id, user),HttpStatus.OK);
	}
	
	@PostMapping("/bookingDoctor/{id}")
	public ResponseEntity<BookingDoctor> addBookingDoctor(@RequestBody BookingDoctorRequest booking ,@PathVariable Long id) {
		return new ResponseEntity<>(bookingDoctorService.addBooking(id,booking),HttpStatus.OK);
	}
	
	
	@GetMapping("/getBookingDetailsDoctors/{id}")
	public ResponseEntity<List<BookingDoctor>> getBookingDetailsDoctor(@PathVariable Long id) {
		return new ResponseEntity<>(bookingDoctorService.getById(id),HttpStatus.OK);
	}
	
	
	@GetMapping("/getAllClinicPage")
	public ResponseEntity<Page<Clinic>> getAllWithPage(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size){
		return new ResponseEntity<>(clinicService.getAllWithPage(page, size),HttpStatus.OK);

	}
	
	
	@GetMapping("/getAllCenterPage")
	public ResponseEntity<Page<Center>> getAllCenterWithPage(@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size){
		return new ResponseEntity<>(centerService.getAllWithPage(page, size),HttpStatus.OK);

	}
	
	

	
	
}