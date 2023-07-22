package com.example.Logistics.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity

public class Inventry {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ProductId;
	private String ProductName;
	private int StockAvl;

}
