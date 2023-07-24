// Order.java (Entity)
package com.example.Logistics.Entity;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "pname")
    private String pname;

    @Column(name = "pid")
    private Long pid;

    @Column(name = "quantity")
    private int quantity;



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getPname() {
		return pname;
	}



	public void setPname(String pname) {
		this.pname = pname;
	}



	public Long getPid() {
		return pid;
	}



	public void setPid(Long pid) {
		this.pid = pid;
	}



	public int getQuantity() {
		return quantity;
	}



	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public Order(Long id,String firstName,String lastName,String address,String city,String pname,Long pid,int quantity) {
		super();
		this.id=id;
		this.firstName=firstName;
		this.lastName=lastName;
		this.address=address;
		this.city=city;
		this.pname=pname;
		this.pid=pid;
		this.quantity=quantity;
		
		
	}
}
