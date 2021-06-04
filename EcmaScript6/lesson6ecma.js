//symbol

let capital = Symbol("State capital");

let pennysylvsnia = {};
pennysylvsnia[capital] = "Harrisburg";
document.write(`Capital of PA : ${pennysylvsnia[capital]}<br/>`);

document.write(`Symbol Capital: ${capital.toString()}<br/>`);

let employNum = Symbol.for("Employee Number");

let bobSmith = {};
bobSmith[employNum] = 10;

let sallyMarks = {};
sallyMarks[employNum] = 11;

document.write(`Bob : ${bobSmith[employNum]}<br/>`);
document.write(`Sally : ${sallyMarks[employNum]}<br/>`);