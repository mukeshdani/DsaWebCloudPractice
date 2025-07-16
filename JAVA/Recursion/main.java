

public class main{

    public static void message(){
        System.out.println("Hello World");
    }

    public static void main(String[] args) {
        // message();
        // System.out.println(fibo2(4));
        int [] arr = {1,2,3,47,89,90,98,99,1002,30002};
        int target = 1002;
        System.out.println(binarySearch(arr, target, 0 , arr.length - 1));
        
    }

    static int binarySearch(int[] arr, int target, int s, int e){
        if(s>e){
            return -1;
        }
        int m = s + (e-s)/2;
        if(arr[m] == target){
            return m;
        }else if(target < arr[m]){
            return binarySearch(arr , target, s , m - 1);
        }else {
            return binarySearch(arr , target,  m + 1, e);
        }
    }

    static int fibo(int n ){
        if(n < 2){
            return n;
        }
        return fibo(n-1) + fibo(n-2);
    }

    static int fibo2(int n){
        int curr = 1, prev = 0;
        for(int i = 1 ; i< n; i++){
               int temp = curr + prev;
               prev = curr;
               curr = temp;
        }
        return curr;
    }

}