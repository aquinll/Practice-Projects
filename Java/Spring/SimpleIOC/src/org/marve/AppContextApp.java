package org.marve;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class AppContextApp {

	private String xmlFile;
	private ApplicationContext context;
	
	public AppContextApp(String xml) {
		System.out.println("Inversion of Control using ApplicationContext...");
		xmlFile = xml;
	}
	
	public void run() {
		context = new ClassPathXmlApplicationContext(xmlFile);
	}

	public Employee getRecord(String record) {
		return (Employee) context.getBean(record);
	}
	
	public void close() {
		((ClassPathXmlApplicationContext)context).close();
	}
}
