package DoublyLinkedLists;

public class DoublyLl {
    private Node head;
    private Node tail;

    public void DoublyLinkedList(){
        head = null;
        tail = null;
    }

    //add the data to front(head)
     
    public void addFront(int data){
        Node newNode = new Node(data);

        if(head == null){
            head = newNode;
            tail = newNode;
        }else {
            newNode.next = head;
            head.prev = newNode;
            head = newNode;
        }

        return;
    }
    //add the data to end(rear)
    public void addRear(int data){
        Node newNode = new Node(data);
        if(head ==null){
            newNode = head;
            newNode = tail;
        }else {
            newNode.prev = tail;
            tail.next = newNode;
            tail = newNode;
        }
    }
    
    public void addSpecificPosition(int data, int position){
        Node newNode = new Node(data);
        if(position < 0){
            System.out.println("Invalid Position");
            return;
        }else if(position == 0){
            addFront(data);
            return;
        }
        Node temp = head;
        int index = 0 ;
        while(temp.next != null){
            if(index == position - 1)break;
            temp = temp.next;
            index++;
        }

        newNode.next = temp.next;
        newNode.prev = temp.next.prev;
        newNode.next.prev = newNode;
        temp.next = newNode;
    }
    
    public void printData(){
        Node temp = head;
        if(temp == null){
            System.out.println("Linked List is empty");
            return;
        }
        while(temp != null){
            if(temp.next == null){
               System.out.println(temp.data);
            }else {
               System.out.print(temp.data + "=>");
            }
            temp = temp.next;
        }
    }

    //Delete at front
    public void deleteAtBeginning(){
        if(head == null){
            System.out.println("List is Empty");
            return;
        }
        head = head.next;
        head.prev = null;
    }

    //Delete at end
    public void deleteAtEnd(){
        if(head == null){
            System.out.println("List is Empty");
            return;
        }
        tail=tail.prev;
        tail.next = null;

    }

    //Find Size
    public int sizeOfDoublyLl(){
        Node temp = head;
        int size = 0;
        while(temp.next != null){
            temp = temp.next;
            size++;
        }
        return size;
    }

    //Delete at Specific Position

    public void deleteAtSpecificPosition(int position) {
    if (position < 0 || position > sizeOfDoublyLl()) {
        System.out.println("Invalid Position OR out of boud");
        return;
    }

    if (position == 0) {
        // Delete head
        if (head.next != null) {
            head = head.next;
            head.prev = null;
        } else {
            head = null; // Only one node
        }
        return;
    }

    Node temp = head;
    int index = 0;

    while (index < position) {
        temp = temp.next;
        index++;
    }

    if (temp.next != null) {
        temp.next.prev = temp.prev;
    }

    if (temp.prev != null) {
        temp.prev.next = temp.next;
    }
}


    public boolean searchData(int data){
        Node temp = head;
        while(temp.next != null){
            if(temp.data == data)return true;
            temp = temp.next;
        }
        return false;
    }

}
