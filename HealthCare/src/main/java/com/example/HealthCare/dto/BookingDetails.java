package com.example.HealthCare.dto;

public class BookingDetails {
	private String testName;
	private String centerName;
	private String slot;
	private String username;
	private String contactNo;
	private String address;
	public BookingDetails(String testName, String centerName, String slot, String username, String contactNo,
			String address) {
		super();
		this.testName = testName;
		this.centerName = centerName;
		this.slot = slot;
		this.username = username;
		this.contactNo = contactNo;
		this.address = address;
	}
	public BookingDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getTestName() {
		return testName;
	}
	public void setTestName(String testName) {
		this.testName = testName;
	}
	public String getCenterName() {
		return centerName;
	}
	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}
	public String getSlot() {
		return slot;
	}
	public void setSlot(String slot) {
		this.slot = slot;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	

}
