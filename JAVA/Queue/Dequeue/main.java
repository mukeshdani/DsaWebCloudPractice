package JAVA.Queue.Dequeue;

public class main {

    public static void main(String [] args){
        Dequeue dequeue = new Dequeue(4);
        dequeue.insertFront(10);
        dequeue.insertRear(30);
        dequeue.insertFront(500);
        dequeue.insertRear(900);
        System.out.println("size : " + dequeue.size());
        dequeue.deleteFront();
        dequeue.deleteRear();
        System.out.println("size : " + dequeue.size());
        dequeue.display();
    }
    
}
