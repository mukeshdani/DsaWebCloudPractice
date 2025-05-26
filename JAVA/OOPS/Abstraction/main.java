package JAVA.OOPS.Abstraction;

public class main {
    public static void main(String[] args) {
        MyChild myChild= new MyChild();
        myChild.cal();
        myChild.launchRocket();

        MyClass myClass = new MyChild();
        myClass.cal();
        myChild.launchRocket();
    }
}
