package JAVA.OOPS;

public class main {
    public static void main(String[] args) {
        //Now creating object of student
        Student student = new Student();// using new keyword we allocate dynamic memory 
        student.study();
        student.showFullDetails();

        Student student2 = new Student(20);
        student2.showFullDetails();
    }
}
