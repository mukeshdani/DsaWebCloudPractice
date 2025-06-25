package JAVA.Sorting.SelectionSortAlgorithm;

import java.util.Arrays;

public class main {

    public static void SelectionSort(int [] arr){
         for(int i = 0 ; i< arr.length; i++){
            // find the max item in the remaining array and swap with correct index
            int last = arr.length - i - 1;
            int maxIndex = getMaxIndex(arr, 0 , last);
            swap(arr, maxIndex, last);

         }
    }
    public static void swap(int[] arr, int first , int second){
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    public static int getMaxIndex(int [] arr, int start , int last){
          int max = start;
          for(int i = start; i<=last ; i++){
               if(arr[max] < arr[i]){
                max = i ;
               }
          }
          return max;
    }

    public static void main(String[] args) {
        int[] arr = {1000,2,4,72,232};
        SelectionSort(arr);
        System.out.println(Arrays.toString(arr));
        
    }
    
}

// Selection Sort Algorithm

// Select an item and put it in its right position
// Complexity:
// Time: O(n^2) (best and worst case)
// Space: constant
// Stable: No not stable
// use case: peroform well on small list array 
