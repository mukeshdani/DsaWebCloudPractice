package JAVA.Queue.Dequeue;

public class Dequeue {

    private int[] queue;
    private int capacity;
    private int front;
    private int rear;
    private int size;
    public Dequeue(int capacity){
        this.capacity = capacity;
        queue = new int[capacity];
        front = -1;
        rear = -1;
        size = 0;
    }

    public boolean isFull(){
        if(size == capacity){
            System.err.println("Queue is full !!!");
            return true;
        }
        return false;
    }
    public boolean isEmpty(){
        if(size == 0){
            System.err.println("Queue is Empty");
            return true;
        }
        return false;
    }

    //add front
    public void insertFront(int data){
         if(isFull()){
            return;
         }
        if(isEmpty()){
            front = 0;
            rear = 0;
        }
        else if(front == 0){
            front = capacity-1;
        }else {
            front--;
        }
        queue[front] = data;
        size++;
    }


    
}
