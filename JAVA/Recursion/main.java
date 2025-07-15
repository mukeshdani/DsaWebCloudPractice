

public class main{

    public static void message(){
        System.out.println("Hello World");
    }

    public static void main(String[] args) {
        // message();
        System.out.println(fibo2(4));
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