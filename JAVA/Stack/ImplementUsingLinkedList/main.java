package JAVA.Stack.ImplementUsingLinkedList;

import java.util.Stack;

public class main {
    public static void main(String[] args) {
        stack newStackll= new stack();
        newStackll.push(20);
        newStackll.push(30);
        newStackll.push(44);
        newStackll.push(55);
        newStackll.display();
        System.out.println(newStackll.pop());
        newStackll.display();
        System.out.println(newStackll.pop());
        newStackll.display();
        System.out.println(newStackll.peek());
        newStackll.display();
    }
}
