package JAVA.Queue.CircularQueue;

public class CircularQueue {
    private int[] queue;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    public CircularQueue(int capacity){
        this.capacity = capacity;
        this.queue = new int[capacity];
        this.front = 0 ;
        this.rear = -1;
        this.size = 0;
    }
    
    
}
