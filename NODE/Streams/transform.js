const fs = require('fs');
const path = require('path');

const {Transform} = require('stream')

const inputFilePath = path.join(__dirname, 'input.txt');
const transformOutputFilePath = path.join(__dirname, 'transformOutput.txt')

const readStarem = fs.createReadStream(inputFilePath, {encoding:'utf-8'})
const writeStream = fs.createWriteStream(transformOutputFilePath)

// Transform Data

const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

readStarem.pipe(uppercaseTransform).pipe(writeStream);
