package singly;

public class singlyll{
    Node head = null;

    //Insert at Beginning Method
    public void insertAtBinning(int item){
        Node newNode = new Node(item);
        if(head == null){
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;  
    }

    //Insert at Last Method
    public void insertAtLast(int item){
        Node newNode = new Node(item);
        if(head == null){
            head = newNode;
            return;
        }
        Node temp = head;
        while(temp.next != null){
            temp = temp.next;
        }

        temp.next = newNode;
    }

    //Insert at specific position
    public void insertAtSpecificPosition(int item, int position){
        if(position < 0){
            System.out.println( "Invalid Position");
            return;
        }
        Node newNode = new Node(item);
        if(position == 0){
            System.out.println( "At Position 0");
            newNode.next=head;
            head = newNode;
            return;
        }
        Node temp=head;
        int index=0;
        while(temp.next != null){
            if(index == position - 1)break;
            temp = temp.next;
            index++;
        }
        if(temp == null){
            System.out.println("Position out of the bond");
            return;
        }
        //Insert

        newNode.next = temp.next;
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
    
    //Delete at beginning
    public void deleteAtBeginning(int position){
       if(position<0){
        System.out.println("Invalid Postion");
        return;
       }
       if(position != 0){
        System.out.println("Please Call Different Function");
        return;
       }
       head = head.next;
    }

    //Delete at End
    public void deleteAtEnd(){
        Node temp = head;
        while(temp.next.next != null){
            temp = temp.next;
        }
        temp.next = null;
    }

    public int sizeOfLinkedList(Node head){
        int size = 1;
        Node temp = head;
        while(temp.next!=null){
            temp = temp.next;
            size++;
        }
        return size;
    }
   
    public void deleteAtSpecificPosition(int position) {
    if (position < 0 || position >= sizeOfLinkedList(head)) {
        System.out.println("Index out of bounds!!!!!");
        return;
    }

    if (position == 0) {
        deleteAtBeginning(0);
        return;
    }

    Node temp = head;
    int index = 0;

    while (temp != null && index < position - 1) {
        temp = temp.next;
        index++;
    }

    if (temp == null || temp.next == null) {
        System.out.println("Position out of bounds");
        return;
    }

    temp.next = temp.next.next;
}

    //Searching
    public int searchAtPostion(int position){
        if(sizeOfLinkedList(head) < position && position < 0){
            System.out.println("Index Out Of bound");
            return 0;
        }

        Node temp = head;
        int index = 0 ;
        while(temp.next != null && index < position - 1){
            temp = temp.next;
            index++;
        }
        System.out.println(index);
        return temp.next.data;
    }
    
    //Search Data
    public boolean searchData(int data){
        Node temp = head;
        while(temp.next!= null){
            if(temp.data == data)return true;
            temp=temp.next;
        }

        return false;
    }

}
