public class Reset {

    public static int resetIthBit(int n, int k) {
        // Create a mask with the k-th bit set to 0
        int mask = ~(1 << (k - 1));
        System.out.println(mask);
        // Use bitwise AND to reset the k-th bit of n
        return n & mask;
    }
    public static void main(String[] args) {
        int n = 0110; // Example number
        int k = 0; // Position of the bit to reset (1-based index)
        int result = resetIthBit(n, k);
        System.out.println("The number after resetting the " + k + "th bit is: " + result);
    }
}
