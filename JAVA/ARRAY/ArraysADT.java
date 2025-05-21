package JAVA.ARRAY;

interface ArraysADT {
    //insert: to insert an element in the array
    void insert(int element);
    //delete: to delete an element from the array
    void delete(int deleteIndex);
    //search: to search an element in the array
    int search(int value);
    //get: to get an element from the array
    int get(int getIndex);
    //update: to update an element in the array
    void update(int index, int value);
    //traverse: to traverse the array
    void traverse();
    //getSize: to get the size of the array
    int getSize();
}