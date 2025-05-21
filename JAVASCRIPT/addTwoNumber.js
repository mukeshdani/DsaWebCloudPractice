//Add two linkedlist numbers
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;
    
    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return dummyHead.next;
}
// Example usage:
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
let current = result;   
let resultArray = [];
while (current !== null) {
    resultArray.push(current.val);
    current = current.next;
}
console.log("This  is From Function", resultArray); // Output: [7, 0, 8]

//Using Class

class ListNode2 {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class AddTwoNumbers {
    constructor(l1, l2) {
        this.l1 = l1;
        this.l2 = l2;
    }
    
    add() {
        let dummyHead = new ListNode2(0);
        let p = this.l1, q = this.l2, current = dummyHead;
        let carry = 0;
        
        while (p !== null || q !== null) {
            let x = (p !== null) ? p.val : 0;
            let y = (q !== null) ? q.val : 0;
            let sum = carry + x + y;
            carry = Math.floor(sum / 10);
            current.next = new ListNode2(sum % 10);
            current = current.next;
            
            if (p !== null) p = p.next;
            if (q !== null) q = q.next;
        }
        
        if (carry > 0) {
            current.next = new ListNode2(carry);
        }
        
        return dummyHead.next;
    }
}
// Example usage:
let l1Instance = new ListNode2(2, new ListNode(4, new ListNode(3)));
let l2Instance = new ListNode2(5, new ListNode(6, new ListNode(4)));

let addTwoNumbersInstance = new AddTwoNumbers(l1Instance, l2Instance);
let resultInstance = addTwoNumbersInstance.add();
let currentInstance = resultInstance;
let resultArrayInstance = [];
while (currentInstance !== null) {
    resultArrayInstance.push(currentInstance.val);
    currentInstance = currentInstance.next;
}
console.log('This is from Class',resultArrayInstance); // Output: [7, 0, 8]
