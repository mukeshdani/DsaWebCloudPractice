public class SetIthBit {

    public static int setIthBit(int n, int k) {
        // Create a mask with the k-th bit set to 1
        int mask = 1 << (k - 1);
        // Use bitwise OR to set the k-th bit of n
        return n | mask;
    }
    
    public static void main(String[] args) {
        int n = 10110110; // Example number
        int k =5; // Position of the bit to set (1-based index)
        int result = setIthBit(n, k);
        System.out.println("The number after setting the " + k + "th bit is: " + result);
    }
}
