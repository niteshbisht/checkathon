package com.server.beans;

import java.util.List;

import com.server.entity.Department;

public class DepartmentWrapper {
	
	private String stateRegDepId;
	
	private List<Department> depList;

	/**
	 * @return the stateRegDepId
	 */
	public String getStateRegDepId() {
		return stateRegDepId;
	}

	/**
	 * @param stateRegDepId the stateRegDepId to set
	 */
	public void setStateRegDepId(String stateRegDepId) {
		this.stateRegDepId = stateRegDepId;
	}

	/**
	 * @return the depList
	 */
	public List<Department> getDepList() {
		return depList;
	}

	/**
	 * @param depList the depList to set
	 */
	public void setDepList(List<Department> depList) {
		this.depList = depList;
	}


	
}
