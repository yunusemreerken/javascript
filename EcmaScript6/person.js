class Person {
    constructor(name,age){
        this._name = name;
        this._age = age;

    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name=name;
    }
    static makePerson(name,age) {
        return new Person(name,age);
    }
    getName(){
        return `My name is ${this._name}.`
    }
    getAge(){
        return ` ${this._age} years old.`
    }
    hi(){
        return `Hello my name is Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas. What is your name ?`
    }
    howru(){
        return `How are you ?`
    }
    display(){
        return `New Person info Name:${this._name}, Age: ${this._age}`;//class tarafından oluşturulan yeni kişi display ettim.
    }
}

let person1 = Person.makePerson("Veli Can","28");
document.write(`${person1.hi()}<br/>`);
document.write(`${person1.getName()}<br/>`);
document.write(`${person1.howru()}<br/>`);
document.write(`Fine thanks,And you?<br/>`);
document.write(`I 'm fine. How old are you ?<br/>`);
document.write(`${person1.getAge()}<br/>`);

class Woman extends Person{
    constructor(name,age,beautiful){
        super(name,age);
        this._beautiful = beautiful;
    }
    get hasBeautiful(){
        return this._beautiful;
    }
    set hasBeautiful(beautiful){
        this._beautiful = beautiful;
    }
    getInfo(){
        return `${this.name} is a woman and she is beautiful`;
    }

}

class Man extends Person{
    constructor(name,age,handsome){
        super(name,age);
        this._handsome = handsome;
    }
    get hasHandsome(){
        return this._handsome;
    }
    set handsome(handsome){
        this._handsome=handsome;
    }
    get Info(){
        return `${this.name} is a man and he is handsome`;
    }
}

class Child extends Person{
    constructor(name,age,lazy,gender){
        super(name,age);
        this._lazy = lazy;
        this._gender = gender;//female 0),male 1
    }
    get hasLazy(){
        return this._lazy;
    }
    set hasLazy(lazy){
        this._lazy = lazy;
    }
    get hasgender(){
        return this._gender;
    }
    set hasgender(gender){
        this._gender = gender;
    }
    get Info(){
        return `${this.name} is a child and this child is lazy.`;
    }
}

let woman1 = new Woman("aniaKubow","-",true);
document.write(`${woman1.getInfo()},its ${woman1.hasBeautiful} <br/>`);


let woman2 = new Woman("miley Cyrus","-",false);
document.write(`${woman2.getInfo()},its ${woman2.hasBeautiful}<br/>`);



let child1 = new Child("lorem","13",true,0);
document.write(`${child1.getAge()}<br/>`);//person sınıfından kalıtımla geldi super method kullanarak.

document.write(Person.makePerson("Ahmet Ali",27).display() + `<br/>`);

document.write(Child.makePerson("blinky",3).display());