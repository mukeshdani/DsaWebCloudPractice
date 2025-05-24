package DesignPattern.CreationalPatterns.AbstractDesignPattern;

public class EmployeeFactory {
    public static Employee getEmployee(EmployeeAbstractFactory factory){
        return factory.createEmployee();
    }
}
