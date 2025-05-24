package DesignPattern.CreationalPatterns.AbstractDesignPattern;

public class AndroidFactory extends EmployeeAbstractFactory{
    @Override
    public Employee createEmployee() {
        return new AndroidDeveloper();
    }
}
