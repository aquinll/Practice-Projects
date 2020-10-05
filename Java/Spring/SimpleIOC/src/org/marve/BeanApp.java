package org.marve;

import org.springframework.core.io.ClassPathResource;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;

public class BeanApp {

	String xmlFile;
	DefaultListableBeanFactory storage;
	XmlBeanDefinitionReader reader;

	public BeanApp(String xml) {
		System.out.println("Inversion of Control using Beans...");
		xmlFile = xml;
	}

	public void run( ) {
		storage = new DefaultListableBeanFactory();
		reader = new XmlBeanDefinitionReader((BeanDefinitionRegistry)storage);
		reader.loadBeanDefinitions(new ClassPathResource(xmlFile));
	}

	public Employee getRecord(String record) {
		return (Employee) storage.getBean(record);
	}

}
