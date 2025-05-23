package DesignPattern.CreationalPatterns.Singleton;

public class example {

    public static void main(String[] args) {
        Samosa samosa= Samosa.getSamosa();
        System.out.println("samosa1: " + samosa.hashCode());

        Samosa samosa2= Samosa.getSamosa();
        System.out.println("samosa2: " + samosa2.hashCode());

        System.out.println("Jalebi1. " + Jalebi.getJalebi().hashCode());
        System.out.println("Jalebi2. " +Jalebi.getJalebi().hashCode());

    }
    
}
