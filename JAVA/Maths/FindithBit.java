public class FindithBit {


    public static int findIthBit(int n, int k) {
        // Right shift n by (k-1) and perform bitwise AND with 1
        
        int mask = 1 << (k-1);
        int ithBit = n & mask;
        return ithBit != 0 ? 1 : 0; 
    }
    
    public static void main(String[] args) {
        int n = 10110110;
        int k = 2;
        int ithBit = findIthBit(n, k);
        System.out.println("The " + k + "th bit of " + n + " is: " + ithBit);
    }
}
