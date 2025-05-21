

// 'a.b.c.d.e' => {a:{b:{c:{d:e}}}}

const str = "a.b.c.d.e.f.g";
const arr = str.split(".");

const result = arr.reduceRight(cb);
function cb(acc, curr){
    return {
        [curr]: acc
    }
}
console.log(result);

//Simple way 
const str1 = 'a.b.c.d.e';
const arr1 = str.split(".");
const result1 = arr1.reduceRight((acc, curr) => ({ [curr]: acc }), {});
console.log(result1);