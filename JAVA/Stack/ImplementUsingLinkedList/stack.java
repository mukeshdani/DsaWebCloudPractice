package JAVA.Stack.ImplementUsingLinkedList;

public class stack {
    
    private Node top;
    public stack(){
        this.top = null;
    }

    //push
    public void push(int data){
        Node newNode = new Node(data);
        newNode.next = top;
        top = newNode;
    }

    //pop
    public int pop(){
        if(isEmpty()){
            return -1;
        }else {
            int value = top.data;
            top = top.next;
            return value;
        }
    }

    //peek
    public int peek(){
        if(isEmpty()){
            return -1;
        }else {
            return top.data;
        }
    }

    //display
    public void display(){
        if(isEmpty()){
            return;
        }else {
            Node temp = top;
            while(temp!=null){
                System.out.print(temp.data+ "  " + '\t');
                temp = temp.next;
            }
            System.out.println();
        }
    }

    //isEmpty
    public boolean isEmpty(){
        if(this.top == null){
            System.out.println("Stack is Empty!!");
            return true;
        }
        return false;
    }
}
