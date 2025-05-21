//Array ADT
// Why Array ADT?

/*
 * Array ADT: A collection of elements, each identified by at least one array index or key
 * Why Array ADT?
 * 1. To provide a way to store multiple values of the same type in a single variable
 * 
 * 
 */

 package JAVA.ARRAY;

 class ArraysADTImp implements ArraysADT {
    //array: to store data
    private int[] array;
    //index: to store the size of the array
    private int index;
    //size: to store the capacity of the array
    private int size;
    //constructor: to initialize the array
    public ArraysADTImp(int size) {
        this.size = size;
        this.index = 0;
        this.array = new int[this.size];
    }
    //insert: to insert an element in the array
    public void insert(int element){
        if(index == this.size){
            System.out.println("Array is full");
            return;
        }
        this.array[index] = element;
        index++;
    }
    //delete: to delete an element from the array
    public void delete(int deleteIndex){
        if(deleteIndex<0 || deleteIndex>this.index){
            System.out.println("Invalid index");
            return;
        }
        for(int i = deleteIndex; i<this.index-1; i++){
            this.array[i]  = this.array[i+1];
        }
        index--;
    }
    //search: to search an element in the array
    public int search(int value){
        for(int i = 0 ; i<this.index ; i++){
            if(this.array[i] == value){
                return i;
            }
        }
        return -1;
    }
    //get: to get an element from the array
    public int get(int getIndex){
        if(getIndex<0 || getIndex>this.index){
            System.out.println("Invalid index");
            return -1;
        }
        return this.array[getIndex];
    }
    //Traverse: to traverse the array
    public void traverse(){
        for(int i = 0 ; i<this.index ; i++){
            System.out.print(this.array[i] + " ");
        }
        System.out.println();
    }
    //getSize: to get the size of the array
    public int getSize(){
        return this.size;
    }
    //Update: to update an element in the array
    public void update(int index, int value){
        if(index<0 || index>this.index){
            System.out.println("Invalid index");
            return;
        }
        this.array[index] = value;
    }
 }