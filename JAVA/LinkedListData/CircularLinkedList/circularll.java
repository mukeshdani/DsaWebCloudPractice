package CircularLinkedList;

public class circularll {
    
    private Node head;
    private Node tail;
    
    public circularll(){
        this.head = null;
        this.tail = null;
    }

    //Add form biginning (Add Front)
    public void addFront(int data){
        //crete new Node 
        Node newNode = new Node(data);
        if(head == null){
            this.head = newNode;
            this.tail = newNode;
            
            head.next = head;
            head.prev = head;

        }else {
            newNode.next = head;
            newNode.prev = tail;
            head.prev = newNode;
            tail.next = newNode;
            head = newNode;
        }

    }

    public void addEnd(int data){
        Node newNode = new Node(data);
        if(tail == null){
            this.head = newNode;
            this.tail = newNode;
            head.next = head;
            head.prev = head;
        } else {
            newNode.prev = tail;
            newNode.next = head;
            tail.next = newNode;
            head.prev = newNode;
            tail = newNode;
        }
    }

    //Delete from Front
    public void deleteFront(){
        if(head == null){
            System.out.println("Emplty List");
            return;
        }else if(head == tail) {
            head = null;
            tail = null;
            return;
        }else {
            head = head.next;
            head.prev = tail;
            tail.next = head;
        }
    }

    //Delete from End
    public void deleteEnd(){
        if(head == null){
            System.out.println("Emplty List");
            return;
        }else if(head == tail) {
            head = null;
            tail = null;
            return;
        }else{
            tail = tail.prev;
            tail.next = head;
            head.prev = tail;
        }
    }
    
    //Display Forward
    public void displayForward(){
        if(head == null){
            System.out.println("List is Empty!!!");
        }

        Node temp = head;
        do{
          System.out.print(temp.data+"\t");
          temp = temp.next;
        }while(temp != head);
        System.out.println();
    }


    //Display Backward
    public void displayBackward(){
        if(tail == null){
            System.out.println("List is Emplty");
            return;
        }

        Node temp = tail;
        do{
         System.out.println(temp.data + '\t');
         temp = temp.prev;
        }while(temp != tail);
         System.out.println();
    }

    //1. Search data and print yes of found and otherise Not Found 
    //2. Create Menu driven program to perform all the operation
    
}
