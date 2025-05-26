package JAVA.OOPS.Abstraction;

//The type MyChild must implement the inherited abstract method MyClass.launchRocket()
//If not then this class also become abstract
public class MyChild extends MyClass{
    @Override
    public void launchRocket() {
        System.out.println("My Child class is going to launch rocket from NASA");
    }
}
