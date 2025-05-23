package DesignPattern.CreationalPatterns.Singleton;

public class Samosa {

    private static Samosa samosa;
    //constructor
    private Samosa(){}

    public static Samosa getSamosa(){
        //object of this class
        if(samosa == null){
            samosa = new Samosa();
        }
        return samosa;
    }
}
/*
 * 1. constructor private
 * 2. Object create with the help of method
 * 3. create field to store object is private
 * 
 */