package DesignPattern.CreationalPatterns.FactoryMethod;

public class EmployeeFactory {
    //Get the employee
    public static Employee getEmployee(String empType){
          if(empType.trim().equalsIgnoreCase("ANDROID_DEVELOPER")){
            return new AndroidDeveloper();
          }else if(empType.trim().equalsIgnoreCase("WEB_DEVELOPER")){
            return new WebDeveloper();
          }else {
            return null;
          }
    }
}
