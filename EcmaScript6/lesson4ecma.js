function createAnimal(name,owner) {
    return {
        name,
        owner,
        getInfo(){
            return `${this.name} is owned by ${this.owner}`
        },
        address: {
            street: '3201 sokak',
            city: 'Batman'
        }
    };
}
var animal = createAnimal('Pamuk','Ayşe Gül');
document.write(`${animal.getInfo()}<br/>`);
document.write(`${animal.name} is at ${animal.address.street}<br/>`);
document.write(`${Object.getOwnPropertyNames(animal).join(" ")}<br/>`);

let {name,owner } = animal;
document.write(`Name : ${name}<br/>`);

let {address} = animal;
document.write(`Adress : ${address.street}<br/>`)

let favNums  =  [2.718, .5772, 4.6692];
let [,,chaos] = favNums;
document.write(`Chaos : ${chaos} <br/>`);

let [, ...last2] = favNums;
document.write(`2nd Num : ${last2[0]}<br/>`);

// witout swap  step
let val1 = 1,val2=2;
[val1,val2] = [val2,val1];
document.write(`Val2 : ${val2}<br/>`);
document.write(`Val1 : ${val1}<br/>`);
