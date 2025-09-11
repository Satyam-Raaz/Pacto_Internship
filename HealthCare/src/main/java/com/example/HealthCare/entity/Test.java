package com.example.HealthCare.entity;

import jakarta.persistence.*;

@Entity
public class Test {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private double price;
	private int seats;
	
	public Test(String name, double price,int seats) {
		super();
		this.name = name;
		this.price = price;
		this.seats=seats;	
	}
	public Test() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	public int getSeats() {
		return seats;
	}
	public void setSeats(int seats) {
		this.seats = seats;
	}
	
	

	@Override
	public String toString() {
		return "Test [id=" + id + ", name=" + name + ", price=" + price + "]";
	}

}
