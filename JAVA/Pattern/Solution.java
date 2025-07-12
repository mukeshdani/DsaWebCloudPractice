package JAVA.Pattern;

public class Solution {
    public static void main(String[] args) {
        pattern4(5);
    }

    static void pattern4(int n ){
        for(int row = 1 ; row<= n ; row++){
            for(int col = 1; col <= row; col++ ){
                 System.out.print(col+ " ");
            }
            System.out.println();
        }
    }
    
    static void pattern3(int n ){
        for(int row = 1 ; row<= n ; row++){
            for(int col = 1; col <= n  - (row - 1) ; col++ ){
                 System.out.print("* ");
            }
            System.out.println();
        }
    }



    static void pattern1(int n ){
        for(int row = 1 ; row<= n ; row++){
            for(int col = 1; col <= n ; col++ ){
                 System.out.print("* ");
            }
            System.out.println();
        }
    }

    static void pattern2(int n) {
        // step 1: look patern how many lines
        for (int row = 1; row <= n; row++) {
            // for every row, run the col
            for (int col = 1; col <= row; col++) {
                System.out.print("* ");
            }
            // when one row is prented, we need to add a newline
            System.out.println();
        }
    }
}

// How to approach
// step1; no of lines = no of rows
// = no of times other loop will run

// step 2: Identify for every row no
// How many coloumns are there
// Type of element in column

// step 3: what do you need to print