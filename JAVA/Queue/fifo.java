package JAVA.Queue;

public class fifo {
    
}


/*
 * Queue is a linear DS that follow first in first out priciple
 * 
 * Key Operations:
 * 1. Enqueue: adding an element to the end of the queue
 * 2. Dequeue: Removing an element form the front of the queue
 * 3. Peek/Front
 * 4. isEmpty
 * 5. isFull
 * 
 * Type of Queue
 * -------------
 * 1. Simple queue:
 * Limitation: Once the queue is full no more elements can be added even if some are removed(unless implemneted as circular)
 * USE CASE: Customer serice ticket 
 * 
 * 2. Circular Queue:
 * A queue where the rear pointer wraps arounds to the front when the 
 * end of the array is reached, making better use if stoarge.
 * 
 * 3. Priority Queue:
 * A queue where each element has a priority. Elements with higher priority 
 * are dequeued befored those whith lower priority, regardless of their order of arrival.
 * 
 * 4. Deque:
 * double ended queue : A queue where elements can be added or remove from both the end
 * 4.1 Input Restricted
 * 4.2 Output Restricted
 * 
 * 5. Double Priority Queue
 * A priority queue that allows removal of both the highest and lowest-priority element
 * 
 * Removal Happens based on either maximum or minimum priority
 * Usecase: Complex scheduling system.
 * 
 * 6. Concrurrent Queue: 
 * A thread safe queue designed for use in multi threaded env.
 * 
 * 
 * 
 * 
 * 
 */