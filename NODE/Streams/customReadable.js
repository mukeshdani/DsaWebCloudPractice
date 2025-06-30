const { Readable} = require('stream');

class CustomReadbleStream extends Readable{
        constructor(options){
            super(options);
            this.maxNumber = 10;
            this.generatedNumber = 0;
        }

        _read(){
            if(this.generatedNumber >= this.maxNumber){
                this.push(null);
            }else {
                const randomNumber = Math.floor(Math.random()*1000);
                const buffer = Buffer.from(randomNumber.toString(), 'utf8');
                this.push(buffer);
                this.generatedNumber +=1;
            }
        }
}

const randomNumberSream = new CustomReadbleStream();

randomNumberSream.on('data', (chunk)=>{
    console.log("Received: ", chunk.toString())
})

randomNumberSream.on('end', ()=>{
    console.log('Finished reading the file')
})

randomNumberSream.on('error', (err)=>{
    console.log('An Error occurred: ', err.message)
})