const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'input.txt');

const outputFilePath = path.join(__dirname, 'output.txt')
const readStarem = fs.createReadStream(inputFilePath, {encoding:'utf-8'})

const writeStream = fs.createWriteStream(outputFilePath)

readStarem.pipe(writeStream)

writeStream.on('finish', ()=>{
    console.log('Data has been written!!')
})