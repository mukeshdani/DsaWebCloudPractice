package JAVA.Queue.CircularQueue;

public class main {
    public static void main(String[] args) {
        CircularQueue circularQueue = new CircularQueue(5);
        circularQueue.enqueue(10);
        circularQueue.enqueue(80);
        circularQueue.enqueue(40);
        circularQueue.enqueue(10);
        circularQueue.enqueue(80);
        circularQueue.enqueue(40);
        System.err.println("Size of circular queue is: " + circularQueue.size());
        circularQueue.display();
        circularQueue.dequeue();
        circularQueue.dequeue();
        circularQueue.display();
        System.err.println("Size of circular queue is: " + circularQueue.size());
        circularQueue.enqueue(10);
        circularQueue.enqueue(80);
        circularQueue.enqueue(40);
        circularQueue.display();
        System.err.println("Size of circular queue is: " + circularQueue.size());
        circularQueue.display();
        circularQueue.display();
    }
}
