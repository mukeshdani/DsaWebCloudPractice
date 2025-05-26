package JAVA.OOPS;

public class Student {
    //Data members: instance variable 
    int studentId;
    String studentName;
    String studentCity;

    //Constructor
    public Student(){
        System.out.println("Constructor Called");
    }

    public Student(int studentId){
        this.studentId = studentId;
        System.out.println("parameterized Constructor Called");
    }

    //Behaviour: Member Method : methods : (functions)
    public void study(){
        System.out.println(studentName +" is studying.");
    } 
    //Method Overloading
    public void study(float f){
        System.out.println(studentName +" is studying.");
    } 
    public void showFullDetails(){
        System.out.println("My name is : "+ studentName);
        System.out.println("My id is : "+ studentId);
        System.out.println("My city is : "+ studentCity);
    } 
}
