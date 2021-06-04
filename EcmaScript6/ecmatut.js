
if (true) {
    var x = 20;//global variable
    document.write("x = " + x + "<br />");

}
document.write("x = " + x + "<br />");

//scope
if (true) {
    let y = 10;//sadece özel alanlarda çağrım yapılır yani 
    //if blogunun içinde olan yerler gibi global tanım değil
    document.write("y = " + y + "<br />");

}
// document.write("y = " + y + "<br />");

var t = 10;
if (true) {
    let t = 20;
}
document.write("t = " + t + "<br />");

const PI = 3.14159;
//PI = 3;

if(true){
    const PI = 3;
    document.write("PI " + PI + "<br/>");
}
document.write("PI " + PI + "<br/><br/>");

//Next Lesson
document.write("next lesson<br/> <br/>");

document.write(typeof true + "<br />");
document.write(typeof 3.14 + "<br />");
document.write(typeof "string" + "<br />");
document.write(typeof Symbol() + "<br />");
document.write(typeof {a:1} + "<br />");
document.write(typeof [1,2,3] + "<br />");
document.write(typeof undefined + "<br /><br/>");


//Next Lesson
document.write("next lesson<br/> <br/>");

let FName = "Yunus"
let LName = "Emre"

document.write(`${FName} ${LName}<br/>`);



let num1 = 10;
let num2 =5;

document.write(`10*5 = ${num1 * num2} <br/>`);


//Next Lesson
document.write("next lesson<br/> <br/>");

function doMath(strings, ...values){
    if (strings[0] == 'Add') {
        document.write(`${values[0]} + ${values[1]} =  ${values[0] + values[1]}<br/>`);
    }
    else if (strings[0] === 'Sub') {
        document.write(`${values[0]} - ${values[1]} =  ${values[0] - values[1]}<br/>`);
    }
}

doMath `Add${10} ${13}`;
doMath `Sub${13} ${33}`;

for (let c of FName){
    document.write(`${c}<br/>`);
}

document.write("Hello ".repeat(3) + "<br/>");

document.write(FName.startsWith("Yu") + "<br/>");

document.write(FName.endsWith("nus") + "<br/>");


document.write(FName.includes("u") + "<br/>");

// let multilineStr = "This is \
// a multine \
// string";
let multilineStr =  `This is 
a multine 
string`;
document.write(`${multilineStr}<br/>`);

