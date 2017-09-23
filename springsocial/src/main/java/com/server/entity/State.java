package com.server.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "state", uniqueConstraints = { @UniqueConstraint(columnNames = { "statename" }) })
public class State implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 3014062455613969622L;

	@Id
	private String id;
	
	@NotNull
	@JsonIgnore
	private String statename;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStatename() {
		return statename;
	}

	public void setStatename(String statename) {
		this.statename = statename;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	

}
