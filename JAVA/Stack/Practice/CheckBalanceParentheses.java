package JAVA.Stack.Practice;

import java.util.Stack;

public class CheckBalanceParentheses {
    public static void main(String[] args) {
        Stack<Character> stack1 = new Stack<>();
        String str = "({[]})";
        
        if (str.length() % 2 == 1) {
            System.out.println("Not a Valid Parentheses");
            return;
        }

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == '(' || ch == '{' || ch == '[') {
                stack1.push(ch);
            } else {
                if (stack1.isEmpty()) {
                    System.out.println("Not a Valid Parentheses");
                    return;
                }
                char top = stack1.pop();
                if ((ch == ')' && top != '(') ||
                    (ch == '}' && top != '{') ||
                    (ch == ']' && top != '[')) {
                    System.out.println("Not a Valid Parentheses");
                    return;
                }
            }
        }

        if (stack1.isEmpty()) {
            System.out.println("String is a Valid Parentheses");
        } else {
            System.out.println("Not a Valid Parentheses");
        }
    }
}
