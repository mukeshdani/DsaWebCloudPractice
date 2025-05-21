package JAVA.Queue.SimpleQueue;

public class SimpleQueue {

    private int [] queue; // array to store data
    private int front; // for deletion
    private int rear; // for inserstion 
    private int capacity; // for identify sizing

    public SimpleQueue(int capacity){
        this.capacity = capacity;
        this.queue = new int[capacity];
        this.front = 0;
        this.rear = -1;
    }

    public boolean isFull(){
        if(rear == capacity -1){
         System.out.println("Queue is Full!!!!");
         return true;
        }
        return false;
    }
    
    public boolean isBlank(){
        if(front > rear){
            System.out.println("Queue is Empty!!!!");
            return true;
        }
        return false;
    }
    
    //Insert Data at rear: Enqueu
    public void enqueu(int data){
        if(isFull()){
            return;
        }
        rear++;
        queue[rear] = data;
        System.out.println(data + "   This is inserted into queue");
    }

    //Dequeue: remove the element form the queue
    public int dequeue(){
        if(isBlank()){
            return -1;
        }
        int data = queue[front];
        front++;
        return data;
    }

    //Peek
    public int peek(){
        if(isBlank()){
            return -1;
        }
        return queue[front];
    }

    //Display
    public void display(){
        if(isBlank()){
            return;
        }
        for(int i = front; i<= rear; i++){
            System.out.print(queue[i]+ " " + '\t');
        }
        System.out.println();
    }
}
