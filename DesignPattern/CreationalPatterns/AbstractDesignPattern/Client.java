package DesignPattern.CreationalPatterns.AbstractDesignPattern;

public class Client {

    public static void main(String[] args) {
        Employee e1 = EmployeeFactory.getEmployee(new AndroidFactory());
        System.out.println(e1.salary());
        e1.name();

        Employee e2 = EmployeeFactory.getEmployee(new WebDevFactory());
        e2.name();
    }
    
}
