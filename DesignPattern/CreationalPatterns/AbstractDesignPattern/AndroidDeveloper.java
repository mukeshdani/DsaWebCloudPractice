package DesignPattern.CreationalPatterns.AbstractDesignPattern;

public class AndroidDeveloper implements Employee{
    public int salary(){
      System.out.println("Android Developer");
      return 500000;
    }

    public String name() {
        System.out.println("I am Android Develper");
        return "AndroidDevelper";
    }
}
