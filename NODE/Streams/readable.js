const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'input.txt');

const readStarem = fs.createReadStream(inputFilePath, {encoding:'utf-8'})

readStarem.on('data', (chunk)=>{
    console.log('Received a chunk of data: ', chunk);
})

readStarem.on('end', ()=>{
    console.log('Finished reading the file')
})

readStarem.on('error', (err)=>{
    console.log('An Error occurred: ', err.message)
})