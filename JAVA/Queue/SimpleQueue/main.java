package JAVA.Queue.SimpleQueue;

public class main {
    public static void main(String[] args) {
        SimpleQueue simpleQueue = new SimpleQueue(5);
        simpleQueue.enqueu(40);
        simpleQueue.enqueu(50);
        simpleQueue.enqueu(60);
        simpleQueue.enqueu(70);
        simpleQueue.enqueu(80);
        simpleQueue.display();
        simpleQueue.dequeue();
        simpleQueue.enqueu(90);
        simpleQueue.dequeue();
        simpleQueue.display();
        System.out.println(simpleQueue.peek());
        simpleQueue.dequeue();
        simpleQueue.dequeue();
        simpleQueue.dequeue();
        simpleQueue.dequeue();
        simpleQueue.display();
    }
}
