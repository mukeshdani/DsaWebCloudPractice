package JAVA.LinearSearch;

import java.util.*;

public class linearSearch {

    public static int linearSearchTarget(int arr[], int target){
        for(int i = 0 ; i<arr.length ; i++){
            if(arr[i] == target){
                return i;
            }
        }
        return -1;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size  = sc.nextInt();
        int arr[] = new int[size];
        for(int i = 0 ; i<size ; i++){
            arr[i] = sc.nextInt();
        }
        int target = sc.nextInt();
        sc.close();
        
        // Function call
        int index = linearSearchTarget(arr, target);
        if(index == -1){
            System.out.println("Element not found");
        }else{
            System.out.println("Element found at index " + index);
        }
    }
}
