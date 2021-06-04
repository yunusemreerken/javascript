//promisess
var p1  = Promise.resolve("Resolve me ");
p1.then((res)=> document.write(`${res}<br/>`))

var p2  = new Promise(function(resolve,reject){
    setTimeout(()=> resolve('Resolve Me 2'),2000);
});
// p2.then((res)=> document.write(`${res}<br/>`));


let randVal = 18;
var p3  = new Promise(function(resolve,reject){
    if (randVal  == 6) {
        resolve("Good Value");
    }else {
        reject("Bad value");
    }
});
p3.then((val)=> document.write(`${val}<br/>`),
(err) => document.write(`${err}<br/>`))


let randVal2 = 18;
var p4  = new Promise((resolve,reject) =>{
    if (randVal2  <= 6) {
        throw new Error("Can't Vote");
    }else {
        resolve("Can Vote");
    }
});
p4.then((val)=> document.write(`${val}<br/>`))
.catch((err) => document.write(`${err.message}<br/>`))