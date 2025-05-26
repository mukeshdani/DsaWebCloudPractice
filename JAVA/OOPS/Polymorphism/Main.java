package JAVA.OOPS.Polymorphism;

public class Main {
    
    public static void main(String[] args) {
        // System.out.println("This is just testing");
        // Student student = new Student();
        // student.read();
        // student.read("abc");

        // Person person = new Person();
        // Person person = new Employee();
        Person person = new Shyam();
        Ram ram = new Ram();
        ram.doWork(person);
    }
}
