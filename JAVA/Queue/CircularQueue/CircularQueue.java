package JAVA.Queue.CircularQueue;

public class CircularQueue {
    private int[] queue;
    private int front;
    private int rear;
    private int size;
    private int capacity;

    public CircularQueue(int capacity) {
        this.capacity = capacity;
        this.queue = new int[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    public boolean isQueueFull() {
        if (size == capacity) {
            System.out.println("Queue is full");
            return true;
        } else {
            return false;
        }
    }

    public boolean isQueueEmpty() {
        if (size == 0) {
            System.out.println("Queue is Empty!!!");
            return true;
        }
        return false;
    }

    // Insert an element :[R]
    public void enqueue(int data) {
        if (isQueueFull()) {
            return;
        }
        // capacity = 10;
        // rear (9+1)%10 === 0;
        rear = (rear + 1) % capacity;
        queue[rear] = data;
        size++;
    }

    // Delete
    public int dequeue() {
        if (isQueueEmpty()) {
            return -1;
        }
        int value = queue[front];
        front = (front + 1) % capacity;
        size--;
        return value;
    }

    public int size() {
        return this.size;
    }

    public void display() {
        if (isQueueEmpty()) {
            return;
        }
        for (int i = 0; i <= size; i++) {
            System.out.print(queue[(front + i) % capacity] + " " + '\t');
        }
        System.out.println();
    }

}
