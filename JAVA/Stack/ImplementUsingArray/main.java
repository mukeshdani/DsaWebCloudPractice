package JAVA.Stack.ImplementUsingArray;

public class main {
    public static void main(String[] args) {
        Stack stack = new Stack(4);
        stack.pushData(10);
        stack.pushData(40);
        stack.pushData(200);
        stack.pushData(888);
        stack.displayStackElement();
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        stack.displayStackElement();
        System.out.println(stack.peek());
        stack.displayStackElement();
    }
}
