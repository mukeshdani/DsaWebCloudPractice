package JAVA.OOPS.Abstraction.Interface;

//The type Circle must implement the inherited abstract method Shape.calculateArea()
public class Circle implements Shape {

    @Override
    public void calculateArea() {
        System.out.println("Area of Circle is ");
    }
    
}
