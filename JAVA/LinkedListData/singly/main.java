package singly;

public class main {

    public static void main(String[] args) {
        singlyll singlyll = new singlyll();
        singlyll.insertAtBinning(20);
        singlyll.insertAtSpecificPosition(100, 0);
        singlyll.insertAtSpecificPosition(101, 1);
        singlyll.insertAtLast(99);
        singlyll.insertAtSpecificPosition(103, 3);
        singlyll.deleteAtBeginning(0);
        singlyll.deleteAtEnd();
        System.out.println(singlyll.searchAtPostion(2));

        singlyll.printData();
    }

}
