String and StringBuilder:

Everthing start with a capyial letter in java is a class

String str  = "Mukesh Dani"

"Mukesh Dani"-> Object
str -> reference variable
String = -> Data type (S -> Class)

String a = "Mukesh"
String b = "Mukesh"

is this crete two different object or same ko point kr rhe honge

Two concept Two understand here:
1. String Pool: 
2. Immutabiliy:


1. String Pool: 
String name = "Mukesh"

name is in stack and point to Kunal which is prenet in heap
String pool is a separtae memory staruture inside the heep

![alt text](image.png)

![alt text](image-1.png)

it check is this presnet in the pool if present then it will point the same

two refernce varible ponint same object 
so 
we can not change this object 
string are immutable in java


Why we can't modify string object?
![alt text](image-2.png)


Comparison of String:

1. == method
comparator ==

Check if reference varable are poining to same object

How to create different object of same value
String a = new String("Mukesh");
String b = new String("Mukesh");

<!-- Creating these vlaue outside the pool but in heap -->

![alt text](image-3.png)

When we only need to check value, use .equals method.

== this is comerator 
.equals is a method


when we print any thing which behind call valueof then value off call toString 
either you prenet int it will also called valueof then toString 
and same for other

if you want to override the funtion then you can change the way 

and or wrapper class also use toString behind

int primitive are stored in stack memory 
and non-premitive are stored in heap memory 

wrapper class are also stored in soted in heap





