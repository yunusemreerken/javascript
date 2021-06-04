let array1  = Array.of(1,2,3); //sadece sayılardan dizi oluşturur. "of"

let array2  = Array.from("word");//karakter ya da baska bir diziden türetme yapılır. 

let array3  = Array.from(array1,(value) => value * 2);

for (let val of array3) document.write(`Array Val :  ${val} <br>`);


var randSet = new Set();

randSet.add(10);
randSet.add("Word");

document.write(`Has 10 :  ${randSet.has(10)}`);
document.write(`Set size  : ${randSet.size}<br/ >`);
randSet.delete(10);
for(let val of randSet) document.write(`Set Val  : ${val}<br/>`);

//map fonksiyonu
var randMap  = new Map();
randMap.set("key1","Random Strig");
randMap.set("key2",10);

document.write(`key1 : ${randMap.get("key1")}<br/>`);
document.write(`key2 : ${randMap.get("key2")}<br/>`);

document.write(`Map Size : ${randMap.size}<br/>`);
randMap.forEach(function(value, key){
    document.write(`${key} : ${value}<br/>`);
})

