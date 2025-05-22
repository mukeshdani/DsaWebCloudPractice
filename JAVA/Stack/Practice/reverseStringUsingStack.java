package JAVA.Stack.Practice;

import java.util.Stack;

public class reverseStringUsingStack {
    //"hello" -> "olleh"
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public static void main(String[] args) {
        Stack stc = new Stack<>();
        String str = "hello";
        for(int i = 0 ; i<str.length() ; i++){
            stc.push(str.charAt(i));
        }
        String result = "";
        while(!stc.isEmpty()) {
        result += stc.pop();
        }
        System.out.println("-----------------------------------");
        System.out.println("Final reverse String using Stack is : " + result);
        System.out.println("-----------------------------------");
    }
}
