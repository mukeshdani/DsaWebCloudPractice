package JAVA.BinarySearch;
import java.util.*;

//binary search is a searching algorithm that finds the position of a target value within a sorted array.
// It compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie
// Time Complexity: O(log n)
// Space Complexity: O(1)
// Binary search can only be applied to sorted arrays.
// It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval,

public class BinarySearch {

    public static int binarySearchTarget(int arr[] , int target){
        int start = 0, end = arr.length -1;
        while(start<=end){
            int mid = start + (end - start)/2;
            if(arr[mid] == target){
                return mid;
            }else if(arr[mid]<target){
                start  = mid +1;
            }else{
                end = mid - 1;
            }
        }
        return -1;
    }
    public static int createArraysortedOrder(int arr[]){
        Arrays.sort(arr);
        return arr.length;
    }

    public static void createArraysortedOrderCustom(int arr[]){
        int n = arr.length; 
        for(int i = 0 ; i<n ; i++){
            for(int j = i+1 ; j<n ; j++){
                if(arr[i]>arr[j]){
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    public static void main(String[] arrgs){
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int arr[] = new int[size];
        for(int i = 0 ; i< size; i++){
            arr[i] = sc.nextInt();
        }
        int target = sc.nextInt();
        sc.close();

        createArraysortedOrder(arr);

        // Function call
        int index = binarySearchTarget(arr, target);
        if(index == -1){
            System.out.println("Element not found");
        }else{
            System.out.println("Element found at index " + index);
        }
    }
    
}
