package JAVA.Stack.ImplementUsingArray;

public class Stack {
   private int[] array;
    private int maxSize;
    private int top = 0;
    public Stack(int maxSize){
         this.array = new int[maxSize];
         this.maxSize = maxSize;
         this.top = -1;
    }

    // Push opeartion
    public void pushData(int data){
        if(top == maxSize -1 ){
            System.out.println("Stack overflow or full !!!!!!!!!!!!");
            return;
        }else {
            top++;
            array[top] = data;
        }
    }

    public boolean isEmplty(){
        if(top == -1){
            System.out.println("Stack is Empty");
            return true;
        }
        return false;
    }
    
    public void displayStackElement(){
          if(isEmplty())return;
          for(int i = 0 ; i<=top ; i++){
            System.out.print(array[i]+"\t");
          }
          System.out.println();
    }

    //Pop Operation

    public int pop(){
        if(isEmplty()){
            return -1;
        }
        else {
            int popElement = array[top];
            top--;
            return popElement;
        }
    }

    //peek element
    public int peek(){
        if(isEmplty()){
            return -1;
        }else {
            return array[top];
        }
    }


}
