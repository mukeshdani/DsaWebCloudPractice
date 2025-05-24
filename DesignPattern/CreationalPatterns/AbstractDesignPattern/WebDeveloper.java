package DesignPattern.CreationalPatterns.AbstractDesignPattern;

public class WebDeveloper implements Employee{
    public int salary(){
      System.out.println("Web Developer");
      return 300000;
    }

    public String name() {
        System.out.println("I am Web Develper");
        return "WebDevelper";
    }
}
