package org.marve;

public class Employee {

	static int count = 0;
	private String employeeId;
	private String employeeName;
	private int employeeAge;
	private String homeAddress;
	
	public Employee() {
		System.out.println("** Employee (" + (++count) + ") Constructed **");
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}

	public String getEmployeeName() {
		return employeeName;
	}

	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}

	public int getEmployeeAge() {
		return employeeAge;
	}

	public void setEmployeeAge(int employeeAge) {
		this.employeeAge = employeeAge;
	}

	public String getHomeAddress() {
		return homeAddress;
	}

	public void setHomeAddress(String homeAddress) {
		this.homeAddress = homeAddress;
	}

	@Override
	public String toString() {
		return "Employee [ employeeId: " + employeeId +
				"\n         , employeeName: " + employeeName +
				"\n         , employeeAge: " + employeeAge +
				"\n         , homeAddress: " + homeAddress + " ]";
	}

}
