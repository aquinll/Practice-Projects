package org.marve;

public class SimpleIoC {

	public void NativeIoC() {
		Employee peter = new Employee();
		peter.setEmployeeId("12345678");
		peter.setEmployeeName("Peter Apostle");
		peter.setEmployeeAge(70);
		peter.setHomeAddress("Mandaluyong City, Metro Manila");
		
		Employee john = new Employee();
		john.setEmployeeId("13345698");
		john.setEmployeeName("John Dreamer");
		john.setEmployeeAge(50);
		john.setHomeAddress("Quezon City, NCR");
		
		System.out.println(john);
		System.out.println(peter);		
	}
	
	public void BeanMethod() {
		BeanApp appCode = new BeanApp("records.xml");
		appCode.run();
		Employee emman = appCode.getRecord("emp1");
		System.out.println(emman);
	}
	
	public void AppContext() {
		AppContextApp appCode = new AppContextApp("records.xml");
		appCode.run();
		Employee emman = appCode.getRecord("emp2");
		System.out.println(emman);
		appCode.close();
	}
	
	public static void main(String[] args) {
		SimpleIoC myApp = new SimpleIoC();
		myApp.NativeIoC();
		myApp.BeanMethod();
		myApp.AppContext();
	}

}
