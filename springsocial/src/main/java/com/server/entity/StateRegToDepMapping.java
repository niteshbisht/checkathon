package com.server.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "stateregtodepmapping")
public class StateRegToDepMapping implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5967708600311083519L;

	@Id
	private String id;
	
	@NotNull
	private String stateregid;

	@NotNull
	private String depid;

	public String getStateregid() {
		return stateregid;
	}

	public void setStateregid(String stateregid) {
		this.stateregid = stateregid;
	}

	public String getDepid() {
		return depid;
	}

	public void setDepid(String depid) {
		this.depid = depid;
	}
	
}
