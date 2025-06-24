// step1: Create a Node class to store value and priority

import java.util.ArrayList;
import java.util.List;

class Node{
    String value;
    int priority;

    public Node(String value, int priority){
        this.value = value;
        this.priority  = priority;
    }
}

// Step2: Create the priority queue class
class PriorityQueue{
    private List<Node> queue;
    public PriorityQueue(){
        queue = new ArrayList<>();
    }

    // Add anew item to the queue
    public void enqueue(String value , int priority){
        Node newNode = new Node(value, priority);
        queue.add(newNode);

        // Sort the queue based on priority (Lower number = higher Priority)
        queue.sort((a,b)->a.priority - b.priority);
    }

    // Remove and Returm the highest priority item
    public String dequeue(){
        if(queue.isEmpty()){
            return "Queue is empty";
        }

        return queue.remove(0).value;
    }

    // Display the queue
    public void dispaly(){
        for(Node node:queue){
            System.out.println("Value: "+node.value +", Priority" + node.priority);
        }
    }
    
}


public class Main{
    public static void main(String[] args){
        PriorityQueue pq = new PriorityQueue();

        
        pq.enqueue("Cold patient", 5);
        pq.enqueue("Heart attack patient", 1);
        pq.enqueue("Broken leg patient", 2);

        System.out.println("Queue after adding patients:");
        pq.dispaly();

        System.out.println("\nServing patient: " + pq.dequeue());
        System.out.println("Queue after serving one patient:");
        pq.dispaly();
    }
}