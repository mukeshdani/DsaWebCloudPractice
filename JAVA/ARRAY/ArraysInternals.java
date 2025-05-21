// Arrays Internal Wokring 
// Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

/*
 * Basics
 * Internal Working of Arrays
 * ArrayADT
 * 
 * 
 * What is an Array?    
 * It allows storing multiple values in a single variable, instead of declaring separate variables for each value.
 * An array is a collection of elements of the same type, stored in contiguous memory locations.
 * Key Characteristics of Arrays:
 * Fixed Size: The size of an array is fixed at the time of declaration and cannot be changed during runtime.
 * Contiguous Memory: The elements of an array are stored in contiguous memory locations, which allows for efficient access and manipulation.
 * Indexing: Each element in an array can be accessed using its index, which is an integer value that represents the position of the element in the array.
 * Homogeneous: All elements in an array must be of the same data type, which allows for efficient storage and retrieval of data
 * startIndex: The index of the first element in an array is usually 0, and the index of the last element is size - 1.
 * 
 * Array Declaration:
 * int[] arr = new int[5]; // Declares an array of integers with a size of 5
 * int[] arr = {1, 2, 3, 4, 5}; // Declares and initializes an array of integers
 * int[] arr = new int[]{1, 2, 3, 4, 5}; // Declares and initializes an array of integers
 * 
 * Types of Arrays:
 * 1. One-Dimensional Array: A linear array that stores elements in a single row or column.
 * Example: int[] arr = {1, 2, 3, 4, 5};
 * Declare an array of integers with a size of 5
 * int[] arr = new int[5];
 * Declaration
 * int[] marks;
 * initialize an array of integers
 * marks ={90, 22, 33, 45, 58};
 * 
 * 
 * 2. Multi-Dimensional Array: An array that stores elements in multiple dimensions, such as a two-dimensional array (matrix) or three-dimensional array (cube).
 * 
 * How Arrays use contiguous memory?
 * Arrays are stored in contiguous memory locations, which means that the elements of an array are stored one after the other in memory. This allows for efficient access and manipulation of the elements in the array.
 * arr[] = {1, 2, 3, 4, 5};
 * arr conatins base address of 1st element
 * address of the element = base address + (index * size of data type)
 * 
 * 
 * Benefits of Using Contiguous Memory with Arrays:
 * 1. Fast Access: Since the elements are stored in contiguous memory locations, accessing an element using its index is very fast, as it requires only a simple calculation to find the address of the element.
 * 2. Cache Efficiency: Contiguous memory allocation improves cache performance, as accessing elements in a loop is more efficient due to spatial locality.
 * 3. Memory Management: Contiguous memory allocation simplifies memory management, as the operating system can allocate a single block of memory for the entire array, reducing fragmentation.
 * 4. Predictable Performance: Contiguous memory allocation provides predictable performance, as the time complexity for accessing an element is O(1), regardless of the size of the array.
 * 5. Simplicity: Contiguous memory allocation simplifies the implementation of data structures and algorithms, as it allows for easy traversal and manipulation of the elements in the array.
 * 6. Effective Index Based Access (0(1)): Contiguous memory allocation allows for effective index-based access to the elements in the array, making it easy to implement algorithms that require random access to elements.
 * 7. Efficient Memory Usage: Contiguous memory allocation allows for efficient use of memory, as the operating system can allocate a single block of memory for the entire array, reducing fragmentation and improving memory utilization.
 * 8. Easier to Manage Memory: Contiguous memory allocation makes it easier to manage memory, as the operating system can allocate a single block of memory for the entire array, reducing fragmentation and improving memory utilization.
 */


package JAVA.ARRAY;

import java.util.*;

//Array Example
//Create an array

// public class ArraysInternals {
// 	public static void main(String[] args) {
// 		//create an array if integers
//         //Declare an array of integers
//         //initialize an array of integers
//         int marks[]= {30, 70, 90, 22, 33, 45, 58};

//         int failedStudentMarks[];
//         failedStudentMarks = new int[5];

//         for(int i = 0 ; i<marks.length ; i++){
//             System.out.println(marks[i]);
//         }
// 	}
// }

// Practice Questions:

public class ArraysInternals {

    // Time Complexity: O(n)
    // Space Complexity: O(1)
    public static int findLargestElement(int[] arr) {
        int largest = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;
    }

    // Time Complexity: O(log n)
    // Space Complexity: O(1)
    // Binary Search Algorithm
    public static int findLargestUsingBinarySearch(int[]arr){
        int largest = arr[0];
        int low = 0 , high = arr.length -1;
        while(low<=high){
            int mid = low + (high - low /2);
            if(arr[mid]>largest){
                largest = arr[mid];
            }else if(arr[mid]<largest){
                low = mid + 1;
            }else {
                    high = mid - 1;
                }
        }
        return largest;
    }
    // Reverse an array
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    public static int[] reverseAnArray(int[]arr){
        int start = 0 ; 
        int end= arr.length -1;
        while(start<end){
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return arr;
    }
    //sumOfElements
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    public static int sumOfElements(int[]arr){
        int sum = 0 ;
        for(int i = 0 ; i<arr.length ;i++){
            sum +=arr[i];
        }
        return sum;
    }
    //countOccurrences
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    public static int countOccurrences(int[]arr, int element){
        int count = 0 ; 
        for(int i = 0 ; i<arr.length ;i++){
            if(arr[i] == element){
                count++;
            }
        }
        return count;
    }
    //countOccurrences using hashmap
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    public static int countOccurrencesUsingHashMap(int[] arr, int element){
        HashMap<Integer, Integer> hm = new HashMap<>();
        for(int i = 0 ; i<arr.length ; i++){
            if(hm.containsKey(arr[i])){
                hm.put(arr[i], hm.get(arr[i]) + 1);
            }else{
                hm.put(arr[i], 1);
            }
        }
        return hm.getOrDefault(element, 0);
    }
    //findSecondLargestElement
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    public static int findSecondLargestElement(int[] arr){
        int larget  = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        for(int i = 0 ; i< arr.length ; i++){
            if (arr[i]>larget){
                secondLargest = larget;
                larget = arr[i];
            }else if(arr[i]>secondLargest && arr[i]!= larget){
                secondLargest = arr[i];
            }else if(arr[i] == larget){
                continue;
            }
        }
        return secondLargest;
    }
    public static boolean isSorted(int[] arr){
        if(arr.length ==0 || arr.length == 1){
            return true;
        }
        for(int i = 0 ; i<arr.length -1 ; i++){
            if(arr[i]<arr[i+1]){
                return false;
            }
        }
        return true;
    }
    public static int[] moveAllZeroesToEnd(int[] arr){
        int high = arr.length - 1;
        int low = 0 ;
        while(low<high){
            if(arr[low] == 0){
                int temp = arr[low];
                arr[low] = arr[high];
                arr[high] = temp;
                high--;
            }else{
                low++;
            }
        }
        return arr;
    }
    public static int[] removeDuplicates(int[] arr){
        int[] temp =  new int[arr.length];
        int j = 0;
        for(int i = 0 ; i< arr.length - 1 ; i++){
            if(arr[i] != arr[i+1]){
                temp[j++] = arr[i];
            }
        }
        return Arrays.copyOf(temp, j);
    }
    public static int findMissingNumber(int[] arr){
        int n = arr.length + 1;
        int total = (n * (n + 1)) / 2;
        int sum = 0;
        for(int i = 0 ; i<arr.length ; i++){
            sum += arr[i];
        }
        return total - sum;
    }
    public static int[] rotateArray(int[] arr, int k){
        int n = arr.length;
        k = k % n;
        reverseAnArray(arr);
        reverseAnArray(Arrays.copyOfRange(arr, 0, k));
        reverseAnArray(Arrays.copyOfRange(arr, k, n));
        return arr;
    }
    //Time Complexity: O(n)
    public static void printArray(int[] arr){
        for(int i = 0 ; i< arr.length ; i++){
            print(arr[i]);
        }
    }
    public static int[] scanner(){
        Scanner scanner = new Scanner(System.in);
        int size = scanner.nextInt();
        int arr[] = new int [size];
        for(int i = 0 ; i<size ; i++){
            arr[i] = scanner.nextInt();
        }
        scanner.close();
        return arr;
    }
    public static void print(Object str){
        System.out.println(str);
    }
    
    public static void main(String []arrgs){
        int []arr = scanner();
        // 1. Find the largest element in an array.
        print("Largest element in the array is: " + findLargestElement(arr));
        print("Largest element in the array using binary search is: " + findLargestUsingBinarySearch(arr));
        //2. Reverse an array
        print("Reversed array is: " + reverseAnArray(arr));
        printArray(arr);
        //3. Sum of Elements in an Array
        print("Sum of elements in the array is: " + sumOfElements(arr));
        //4. Count the Occurrences of an element in an array
        print("Count of occurrences of an element in the array is: " + countOccurrences(arr, 2));
        print("Count of occurrences of an element in the array using hashmap is: " + countOccurrencesUsingHashMap(arr, 2));
        //5. Find the second largest element in an array
        print("Second largest element in the array is: " + findSecondLargestElement(arr));
        //6. Check if Array is Sorted
        print("Is the array sorted? " + isSorted(arr));
        //7. Move all zeroes to the end of the array
        print("Array after moving all zeroes to the end: " + moveAllZeroesToEnd(arr));
        printArray(arr);
        //8. Remove duplicates from a sorted array
        print("Array after removing duplicates: " + removeDuplicates(arr));
        printArray(arr);
        //9. Find Missing Number in an Array
        print("Missing number in the array is: " + findMissingNumber(arr));
        //10. rotate an array by k positions
        print("Array after rotating by k positions: " + rotateArray(arr, 2));
        printArray(arr);
    }
}