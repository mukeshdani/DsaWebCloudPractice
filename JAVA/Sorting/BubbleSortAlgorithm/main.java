package JAVA.Sorting.BubbleSortAlgorithm;

import java.util.Arrays;

public class main {

    public static void BubbleSort(int [] arr){
        boolean swap;
            //  run the steps n-1 time
            for(int i = 0 ; i< arr.length ; i++){
                swap = false;
                // for each step, max item will come at the last respective index
                for(int j = 1; j <= arr.length - i - 1; j++){
                    // swap if the item is smaller then prev item
                    if(arr[j] <arr[j-1]){
                        // swap
                        int temp = arr[j];
                        arr[j] = arr[j-1];
                        arr[j-1] = temp;
                        swap = true;
                    }
                }
                // if you did not swap for perticular value of i, it means the array is sorted hence stop the program 
                if(swap == false){
                    break;
                }
            }
    }

    public static void main(String[] args) {
        int[] arr = {1,32,4,5,6};
        BubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    
}


// Bubble sort is a cormparison sort method
// sort array step by step
// every comparing adjustent element
// it is also knows sinking sort and exchange sort
// with the first pass though the among, the largest element come to the end
// Space complexity: O(1)
// Consant space 
// Also knows as inplace sorting algorithm
// Time Compl:
// Best Case: O(n): when array is sorted
// Wrost Case: O(n^2): when array is sorted in reverse order
// As the size of array is growing the number of comparison is also growing
// Note: when j is never swap for a value of i, it means array is sorted, hence you can end the program
// Stability: in origin array order is always maintained
// order is maintained: Stable (Bubble Sort Is Stable)