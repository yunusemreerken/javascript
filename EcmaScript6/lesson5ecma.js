class Mammal {
    //yapıcı method 
    constructor(name){
        this._name = name;
    }
    get name () {
        return this._name;
    }
    set name (name) {
        this._name = name;
    }

    //sadece bu klas tarafından çağrım yapılabilir.
    static makeMammal(name) {
        return new Mammal(name);
    }
    //memeliye ait bilgi getiren method. Yani ... bir memelidir.
    getInfo(){
        return `${this.name} is a mammal`;
    }
    helloMammals(){
        return `Hello , ${this.name}`;
    }
}

let monkey  = new Mammal("Fred");//Fred adında bir memeli oluşturur.

monkey.name = "Mark";//adı fred olan memelinin adını mark yapar.

document.write(`Mammal : ${monkey.name}<br/>`);

let chipmunk = Mammal.makeMammal("Chipper");//makeMamal ile memeli(Mammal) sınıfdan Chipper adında memeli oluşturduk.
document.write(`Mammal 2 : ${chipmunk.name}<br/>`);


//marsupial bir memeli sınıfından extend edildi. Yani marsupial da bir memeli sınıfının özelliklerini taşır.
class Marsupial extends Mammal {
    constructor(name,hasPouch){
        super(name);//super method masrupial sınıfı mammal sınıfının kalıtsal özelliklerini alabilmesi için bu methodu kullandık.
        //peki bu özellikler nedir :
        //-Mammal sınıfında olan bir method kullanabilmek Örn : 
        this._hasPouch = hasPouch;
    }
    get hasPouch(){
        return this._hasPouch;
    }
    set hasPouch(hasPouch){
        this._hasPouch = hasPouch;
    }
    getInfo() {
         return `${this.name} is a marsupial`;
    }
    getInfo2(){
        return this.helloMammals() +` Bu özellik mammal sınıfından super method ile alındı.`
    }
}

let kangaroo  = new  Marsupial("Paul",true);

document.write(`It is  ${kangaroo.hasPouch} that ${kangaroo.name} has a  pouch <br/>`);

document.write(kangaroo.getInfo2() + `<br/>`);

document.write(`${chipmunk.getInfo()}<br/>`);
document.write(`${kangaroo.getInfo()}<br/>`);


//nabza göre şerbet 
function getClass(classType){
    if(classType == 1){
        return Mammal;
    }else {
        return Marsupial;
    }
}
class Koala extends getClass(2){//extend edilecek sınıf için fonksiyon ile elde edilebilir.
    constructor(name) {
        super(name);
    }
}

let carl  = new Koala("Carl");
document.write(`${carl.getInfo()}<br/>`);