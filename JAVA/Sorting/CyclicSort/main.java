package JAVA.Sorting.CyclicSort;

import java.util.Arrays;

public class main {

    public static void CyclicSort(int[] arr){
        int i = 0 ;
        while (i<arr.length) {
            int correctIndex = arr[i] -1;
            if(arr[i] != arr[correctIndex]){
                swap(arr, i, correctIndex);
            }else {
                i++;
            }
        }
    }
    public static void swap(int[] arr, int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    public static void main(String[] args) {
        int[] arr = {2,3,4,1};
        CyclicSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    
}


// What is cyclic sort
// cyclic sort is used 
// Pattern
// When given nos. form range 1,N => use cyclic sort
// Time: O(N)