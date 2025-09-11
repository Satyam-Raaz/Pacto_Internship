package com.example.HealthCare.dto;

public class UserRequest {
	private String username;
	private String address;
	private String contactNo;
	private String email;
	public UserRequest(String username, String address, String contactNo,String email) {
		super();
		this.username = username;
		this.address = address;
		this.contactNo = contactNo;
		this.email=email;
	}
	public UserRequest() {
		super();
		// TODO Auto-generated constructor stub
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
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "UserRequest [username=" + username + ", address=" + address + ", contactNo=" + contactNo + "]";
	}
	
	

}
