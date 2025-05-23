package DesignPattern.CreationalPatterns.FactoryMethod;

public class DeveloperClient {

    public static void main(String[] args) {
       Employee employee =  EmployeeFactory.getEmployee("ANDROID_DEVELOPER");
       System.out.println("ANDROID_DEVELOPER: " + employee.salary());
       Employee employee2 = EmployeeFactory.getEmployee("WEB_DEVELOPER");
       System.out.println("WEB_DEVELOPER: " + employee2.salary());
    }
}
