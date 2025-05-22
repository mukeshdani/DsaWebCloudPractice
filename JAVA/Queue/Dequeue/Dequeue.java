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

    public void insertRear(int data){
        if(isFull())return;
        if(isEmpty()){
            front = -1;
            rear = -1;
        }else if (rear==capacity){
            rear = 0;
        }else {
            rear++;
        }
        queue[rear] = data;
        size++;
    }

    public int deleteFront(){
           if(isEmpty())return -1;
           
           int value = queue[front];

           if(front == rear){
                rear=-1;
                front=-1;
           }else if(front == capacity-1){
                front = 0;
           }else {
                front++;
           }
           size--;
           return value;
    }

    public int deleteRear(){
        if(isEmpty())return -1;
        int value = queue[rear];
        if(front == rear){
            rear = -1;
            front =1;
        }else if(rear == 0){
            rear = capacity - 1;
        }else {
            rear --;
        }
        size--;
        return value;
    }

    public int getFront(){
        if(isEmpty())return -1;
        return queue[front];
    }
    public int getRear(){
        if(isEmpty())return -1;
        return queue[rear];
    }

    public void display(){
        if(isEmpty())return;
        
        for(int i = 0 ; i< size ; i++){
            System.out.print(queue[(front+1)%capacity] + " " + "\t");
        }
        System.out.println();
    }
}
