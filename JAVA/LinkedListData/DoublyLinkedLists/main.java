package DoublyLinkedLists;

public class main {

    public static void main(String args[]){
        DoublyLl doublyLl = new DoublyLl();
        doublyLl.addFront(10);
        doublyLl.addFront(50);
        doublyLl.addRear(25);
        doublyLl.addSpecificPosition(15,2);
        System.out.println(doublyLl.searchData(50));
        // doublyLl.deleteAtBeginning();
        // doublyLl.deleteAtEnd();
        // doublyLl.deleteAtSpecificPosition(1);
        // doublyLl.deleteAtSpecificPosition(0);

        doublyLl.printData();
    }
    
}
