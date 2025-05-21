package JAVA;

class Test{

    public static Integer complieFunction(int a , int b){
        System.out.println("Compile Function");
        return a+b;
    }
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        int answer = complieFunction(1,2);
        System.out.println("The final answer is: " + answer);
    }
}