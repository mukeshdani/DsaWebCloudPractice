const {Duplex} = require('stream');
const xlip = require('zlip')

class CustomDeuplex extends Duplex{
        constructor(){
        super();
        }

        _read(){}
        _write(){}
        _final(){}
}

const duplexStream = new CustomDeuplex();

console.log(duplexStream)