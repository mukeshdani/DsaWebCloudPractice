Buffer in NodeJS 
Javascript is great with Unicode-encoded strings, but it does  not handle binary data very well.

The Buffer class in Node.js is designed to handle raw biary data. it stores temporary storage in RAM. if our data is small peace than we can use Buffer.

In jS, there are no any mechanism to read binary data so that we used buffer class. it is used for fast transaction data, and its memory is very less so that why we should use small peace of data.

var buf = Buffer.from('how r u')
console.log(buf)

