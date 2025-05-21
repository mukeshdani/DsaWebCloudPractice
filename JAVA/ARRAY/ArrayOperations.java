package JAVA.ARRAY;

public class ArrayOperations {
    
    public static void main(String[] args){
        ArraysADT array = new ArraysADTImp(5);
        array.insert(30);
        array.insert(20);            
        array.insert(39);
        array.insert(40);
        array.insert(50);
        array.insert(68);
        array.traverse();
        System.out.println("Arrays Size: " + array.getSize());
        array.update(1, 55);
        array.traverse();
    }
}
