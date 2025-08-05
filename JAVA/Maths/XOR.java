public class XOR {


    public static int xorArray(int[] arr) {
        int result = 0;
        for(int i = 0 ; i<arr.length ; i++){
            result ^= arr[i];
        }
        return result;
    }

    public static void main(String[] args) {
        int a = 5; // Example value
        int b = 3; // Example value
        int result = a ^ b; // XOR operation
        System.out.println("The result of " + a + " XOR " + b + " is: " + result);

        int arr[] = {10, 2,2,3,4,3,4}; // Example array
        int xorResult = xorArray(arr);
        System.out.println("The XOR of the array is: " + xorResult);
    }
}


