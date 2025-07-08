package JAVA.Sorting.InsertionSortAlgorithm;

import java.util.Arrays;

public class main{

    public static void insertionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    swap(arr, j, j - 1);
                } else {
                    break;
                }
            }
        }
    }

    public static void swap(int[] arr, int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    public static void main(String[] args) {
        int[] arr = {5,3,1,2,4};
        insertionSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}


// Insertion Sort Algorithm
// try sort parts by parts
// every pass left part will be sorted 
// Complexity: O(n^2) wrost case
// best case: O(n)
// 
// 