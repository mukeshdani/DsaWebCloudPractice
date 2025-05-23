package DesignPattern.CreationalPatterns.Singleton;

public class Jalebi {
    private static Jalebi jalebi = new Jalebi();
    //Eager way of creating singleton object 
    // This is not good for big project base
    public static Jalebi getJalebi(){
        return jalebi;
    }
    
}
