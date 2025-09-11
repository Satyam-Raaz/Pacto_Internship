package com.example.HealthCare.dto;

public class BookingRequest {
	
	private String testName;
	private String centerName;
	private String imageUrl;
	
	


	
	

	public BookingRequest(String testName, String centerName ,String imageUrl) {
		super();
		this.testName = testName;
		this.centerName = centerName;
		this.imageUrl=imageUrl;

	}





	public BookingRequest() {
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
	

	public String getImageUrl() {
		return imageUrl;
	}



	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	













	@Override
	public String toString() {
		return "BookingRequest [testName=" + testName + ", centerName=" + centerName + "]";
	}
	
	

}
