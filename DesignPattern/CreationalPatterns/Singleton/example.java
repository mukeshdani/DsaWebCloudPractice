package DesignPattern.CreationalPatterns.Singleton;
public class example {

    public static void main(String[] args) throws Exception{
        // Samosa samosa= Samosa.getSamosa1();
        // System.out.println("samosa1: " + samosa.hashCode());

        // Samosa samosa2= Samosa.getSamosa1();
        // System.out.println("samosa2: " + samosa2.hashCode());

        // System.out.println("Jalebi1. " + Jalebi.getJalebi().hashCode());
        // System.out.println("Jalebi2. " +Jalebi.getJalebi().hashCode());

        /*
         * 1. Reflection API to break singleton pattern
         * Solution: 1. if object is there ==> throw exception from inside constructor
         * 2. Use enum
         * 
         * 2. Deserialization
         * Solution: implementing readresolve Method
         * 
         * 3.Object Cloning
         * 
         * 
         */


        // Break singleton pattern
        // Samosa s1 = Samosa.getSamosa1();
        // System.out.println("----------------------------------------------"+ s1.hashCode());

        // Constructor<Samosa> constructor= Samosa.class.getDeclaredConstructor();
        // constructor.setAccessible(true);
        // Samosa s2 = constructor.newInstance();
        // System.out.println(s2.hashCode());

        // Samosa s1 = Samosa.getSamosa1();
        // ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("abc.ob"));
        // oos.writeObject(s1);

        // System.out.println("serialization done..." + s1.hashCode());

        // ObjectInputStream ois = new ObjectInputStream(new FileInputStream("abc.ob"));
        // Samosa s2 = (Samosa)ois.readObject();
        // System.out.println(s2.hashCode());

    }
    
}
