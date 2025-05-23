package DesignPattern.CreationalPatterns.Singleton;

public class Samosa {

    private static Samosa samosa;
    //constructor
    private Samosa(){}

    //Lazy way of creating singleton object
    //Thread environment: Create problem
    // we cant use method synchronized
    public static Samosa getSamosa1()
    {
        //object of this class
        if(samosa == null){
                samosa = new Samosa();
        }
        return samosa;
    }

    //synchronized blocked: good way 
    public static Samosa getSamosa2()
    {
        //object of this class
        if(samosa == null){
            synchronized(Samosa.class){
                if(samosa == null){
                  samosa = new Samosa();
                }
            }
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