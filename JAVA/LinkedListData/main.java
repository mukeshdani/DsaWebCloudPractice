public class main {
    

    public static void main(String[] args){
        Node node1Node = new Node(35);
        System.out.println(node1Node.data);
        System.out.println(node1Node.next);
        Node node2Node = new Node(60);
        node1Node.next = node2Node;
        System.err.println(node1Node.next.data);
    }
}
