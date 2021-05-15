// // document.addEventListener('DOMContentLoaded',() =>{



// // })

// //2 =>variables

// //numeric
// var x = 1//uniqe |name


// x=23

// console.log(x)
// // console.log('hello')

// // //string
// // var x = 'one'

// // //array 
// // var x = ['one','two']

// // //boolean 
// // var x = false

// // var x 

// //gloabal scope


// //function scope
// var LastName = 'erken'
// var Name = 'emre'

// function printFullName()
// {
//     console.log('hi ' + Name + ' ' + LastName)
// }
// printFullName()

// function prinName(){
//     //code

//     console.log('hi ' + Name)
// }
// prinName()

// /*new lesson */


// //const // readonly block scoped , cannot be updated

// const count = [1,2,3,4,5]

// // count = [1,2,3,8]
// //let  bloack scoped

// function findX(){
//     let x = 1
//     {
//      let x = 2 
//      console.log('example 1: '  + x);
//     }
//     console.log('example 2: '  + x);

// }
// findX()



// //var function scoped OR globally scopped



// let count2 =0 
// function increament(){
//    return count2 = count2 + 1
// }
// console.log(increament())

// const lawyerName = 'Saul'

// function CallLawyer(){
//     console.log('Better Call ' + lawyerName + '!');
// }
// CallLawyer()
// //nest lesson


// //control flow 

// // falsey
// // false  0  - 0 0n "" null undefined Nan

// // truthy 
// // all(unless falsey)

// //if statement
// const  a = 1
// if(a === '1'){
//     console.log('it is truthy!')
// }else{
//     console.log('it is falsey!');
// }



// const  time = 10
// if(time < 9){
//     console.log('it is truthy!')
// }else{
//     console.log('it is falsey!');
// }

// console.log('operators section start')

// //arithmetic operators

// //modules
// console.log(5%3)

// //ıncreament- decrement
// // let count3 = 3
// // count3++
// // console.log(count3)
// // count3--
// // console.log(count3)

// // unary negation
// let z = 4 
// console.log(-z)

// //unary plus
// let y = '3'
// console.log(+y)

// //exponential Operator

// let w = 9
// console.log( w ** 2)




// console.log('operators section end')
// console.log('assignment operators section start')
// //assignment operators
// let t =6

// //assigmnet
// //  t=3
//  //addition assignment
// //  t+=5
// // t=t+5
// //substraction assignment
// // t -=5
// // multiplication assignment
// // t*=5
// //division assignment
// // t/=5
// //remainder assigment
// // t%=5
// //exponentiation
// t **=5
//  console.log(t)

// console.log('assignment operators section end')


// console.log('comparıson operators section start')

// // comparison operators
// let k = 20
// //equal
// console.log(k =='20')
// //not equal
// console.log(k !='20')
// //deeply equal
// console.log(k === '20')
// //strict not equal
// console.log(k !='20')
// //greater than
// console.log(k >2)
// //greater or equal
// console.log(k >=18)





// console.log('comparıson operators section end')
// console.log('logical operators section start')

// const fruit = ['apple','banana','grape']
// if (fruit.includes('apple') && fruit.includes('grape')) {
//     console.log('both fruits exist')
// }

// if (fruit.includes('coocnut') || fruit.includes('apple')) {
//     console.log('atleast one fruit exits')
// }

// if (!fruit.includes('cherry')) {
//     console.log('cherry is missing!')
// }
// console.log('logical operators section end')
// console.log('ternary operators section start')
// let isGameOver  = true

// isGameOver ? console.log('sorry you lost') : console.log('carry on playing ')

// console.log('ternary operators section end')


// // fizz buzz

// for (let i = 1; i < 100; i++) {
//     if (i%3==0) {
//         if (i%5==0) {
//             console.log(i+ 'the number is fizzbuzz')
//         }
//         console.log(i + ' The number is fizz')
//     }else if (i%5==0) {
//         if (i%3==0) {
//             console.log(i+ 'the number is fizzbuzz')
//         }
//         console.log(i + 'the number is buzz')
//     }else{
//         console.log(i)
//     }
// }

// another solution fizz buzz
// let num = 3
// if (num% 15 ===0) {
//     console.log('fizz buzz')
// }else if (num % 5 === 0 ) {
//     console.log('buzz');
// }else if (num % 3 === 0 ) {
//     console.log('fizz')
// }else{
//     console.log(num)
// }

// for loops 

// for (let i = 0; i < 10; i++) {
//     if (i===0) {
//     console.log(i +1 + ' beer on the wall')

//     }else{

//         console.log(i +1 + ' beers on the wall')
//     }
// }
//arrays 

// let books = ['Moby dick','life of pie', 'sapiens','the hungry caterpillar','new earth','Notebook']
// let countss = 0
// for (let i = 0; i < books.length; i++) {
//     if (books[i]==='sapiens') {
//         console.log(true)
//         countss+=1
//         console.log(countss)
//     }else{
//         console.log(false)
//     }
// }

// console.log(books.length)
// console.log(books[0])

// let counts = [1,2,3,4]

// let passResult= [false,true,true,false]


//objects//


// const user ={
//     name:'Yunus Emre',
//     LastName:'ERKEN',
//     pets:'Pamuk',
//     developer:true
// }
// console.log(user.developer)
// if (user.developer) {
//     console.log(user.name + ' is a developer')
// }

//objects in array

// const users = [
//     {
//         username : 'hiJohn12',
//         followers: 22,
//         is_followed: false
//     },
//     {
//         username : 'tttnetJohn12',
//         followers: 44,
//         is_followed: true,
//         deneme:0
//     },
//     {
//         username : 'denemeJohn12',
//         followers: 232,
//         is_followed: true
//     },
// ]

// for (let i = 0; i < users.length; i++) {
//     if (!users[i].is_followed) {
//         console.log('Hi, '+users[i].username + ' long time no speak! ')
//     }

// }

//functions 

//camelcase for naming functions - best practise
// let name ='better call saul' 

// function sendText(name,time ){

//     //block of code
//     console.log('hi '+name +' kodumunblogu.net is ctraetead ' + time + ' ?')

// }

// sendText('saul goodman',3)
// sendText('chuck',4)
// sendText('profesör',5)
// sendText('dileman',6)

// function sendReminder(glob,time){
//     console.log('Dear ' + glob + ' you meeting is at ' + time)
// }
// sendReminder('mahmut',5)
// sendReminder('oğuzhan huş',5)
// sendReminder('oğuzhan bakkal',5)
// sendReminder('ahmet ali ağır',5)
// let name ='ania'
// let countd = 1
// function showAlert(){
//     console.log(name + ', wakeup! This is your ' + countd + '!')
//     countd+=1
// }

// showAlert()
// showAlert()
// showAlert()
// showAlert()

//exercise
// const ileri = document.querySelector('.ileri')
// const geri = document.querySelector('.geri')
// const pathdistance = 2

// const bob = document.querySelector('.face')
// let count  = 0 

// function moveBob(){
//     count +=pathdistance
//     console.log(count)
//     bob.style.left= count+'px'
//    }
//    function moveBobLeft(){
//     count -=pathdistance
//     console.log(count)
//     bob.style.left= count+'px'
//    }


// // bob.addEventListener('click',moveBob)
// ileri.addEventListener('click',moveBob)
// geri.addEventListener('click',moveBobLeft)

// const body  = document.querySelector('body')

//function
// function speak(){
//     console.log('hello world')
// }

// body.addEventListener('click',speak)


// const body  = document.querySelector('body')

// const speak = function(){//function expression
//     console.log('everything is fine!')
// }
// body.addEventListener('click',speak)


// const body  = document.querySelector('body')

// const speak = () => {//arrow function
//     console.log('everything is fine! ')
// }
// body.addEventListener('click',speak)

// while loop
// let i =0
// while (i<100) {
//     console.log(i  + ' teas on the wall')
//     i++

// }

//built -in objects

// .length
//can be used on string or array
// const word = 'banana'

// console.log(word.length)
// const fruit = ['banana','apple','pear']
// console.log(fruit.length)

//outliner
// const balls = document.querySelectorAll('.ball')

// console.log(balls)

//.concat//birleştirme işlemi
// const string  = 'Say Cheese, '
// const string2 = 'yunus emre'

// console.log(string.concat(string2))

// arrays
//this method does not change the existing arrays,
//it return a new array

// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [7,8,9]

// const newArray = array1.concat(array2,array3)
// console.log(newArray)
// console.log(array1.concat(array2))


// .join   
//returns a new string 
// const textDisplay  = document.querySelector('.text')

// const emotions = ['Happy','Sad', 'Confident']

// const newWord = emotions.join('-')
// textDisplay.innerHTML = newWord



//.pop

//changes the length of the array 
// const display  = document.querySelector('.display')

// const movies = [
//     {
//         name : 'Argo',
//         length:'136'
//     },
//     {
//         name:'Aliens',
//         length:12
//     },
//     {

//         name :'Fear',
//         length:'124'
//     }

// ]

// console.log(movies)

// movies.pop()
// console.log(movies)

// display.innerHTML = movies

//.shift 
//changes the length of array

// const display = document.querySelector('.display')

// const movies  = ['Goodfellas','Wolf','Jumanji']

// display.innerHTML = movies
// const deneme = movies.shift()
// console.log(deneme)

//.unshift
//this will change the array 

// const display = document.querySelector('.display')

// const plays = ['Hamilton']

// plays.unshift('Wicked','Saul Goodman')

// console.log(plays)

// display.innerHTML = plays


//.push
//changes the original array

// const display = document.querySelector('.display')

// const plays = ['Hamilton']

// plays.push('Active','Action')

// console.log(plays)

// display.innerHTML = plays

//.slice()
//it does not mutate arrays
//it produces new ones

// const display = document.querySelector('.display')

// const artists = ['Shakira','Sia','Snoop','Barış Manço']
// const maleArtists = artists.slice(2,4)
// const notSArtists = artists.slice(3) 
// const sArtists = artists.slice(0,3)

// display.innerHTML = sArtists

// console.log(notSArtists)


// console.log(artists.slice(1,2))

// console.log(maleArtists)

// console.log(artists)
//splice 
//let splicedArray = array.splice(start,deleteCount,replacement)

// const display = document.querySelector('.display')


// const movies = ['Elf','Annie','IronMan']

// movies.splice(1,1,'Mul')
// movies.splice(2,0,'deneme')
// movies.splice(0,1,'deneme2')

// display.innerHTML = movies



//.forEach()

// const circles = document.querySelectorAll('.circle')


// console.log(circles)

// // Array.array.forEach(element => {

// // });
// // circles.forEach(x =>x.style.backgroundColor = 'red')//x ' is doesnt metter

// circles.forEach(circle =>circle.style.backgroundColor = 'red')

// const  names =['Ania','Bobbyi','Melanie']

// names.forEach(x=>console.log(x))

// const scores = [32,33,44,66,7,888,655,77]

// scores.forEach(score =>{
//     console.log(score + 2)
// })

//.some()// 


// const scores = [22,56,35,78]
// console.log(scores.some(score => score > 90))//resulst false

// const countries = ['afganistan','Poland','South America']

// console.log(countries.some(glob=>glob === 'South America')) result true

// const circles = Array.from(document.querySelectorAll('.circle'))
// console.log(circles)

// const  isCircleflower = circles.some(heart => heart.hasChildNodes())


// console.log(isCircleflower)


//.map()

//creates a new array

// const newArray =values.map(value => value)//syntax

// const ages2018 = [27,24,28,17,56,45]

// const ages2021 = ages2018.map(age=>age + 3)
// console.log(ages2021)

// const  housemates2018 = [
//     {
//         name:'Ahmed',
//         age:33
//     },
//     {
//         name:'Ellen',
//         age:22
//     },
//     {
//         name:'Ania',
//         age:44
//     }
// ]

// const housemates2021 = housemates2018.map(houesmate => houesmate.age+3)
// console.log(housemates2021)

//.filter()
//creates a new array

// const shows  = ['Lupin','Anaconda','Python','Laravel','Asp.Net','24','React']

// const displayShows = shows.filter(word=>word.length <= 5)
// console.log(displayShows)

// const showDisplay =  document.querySelector('.display')

// showDisplay.innerHTML = displayShows

// const shows  = [
//     {
//         name:'Person of Interest',
//         series:1,
//         episodes:14
//     },
//     {
//         name:'Breaking Bad',
//         series:5,
//         episodes:10
//     },
//     {
//         name:'Better Call Soul',
//         series:5,
//         episodes:10
//     },
//     {
//         name:'Black Mirror',
//         series:1,
//         episodes:14
//     },
//     {
//         name:'The Big Bang Theory',
//         series:11,
//         episodes:25
//     }
// ]
// console.log(shows.filter(show => show.series> 2))

// const showDisplay =  document.querySelector('.display')


//.reduce()
// const  scores = [3,4,5,77,89]
// // scores.reduce(accumulator,currentValue) => accumulator + currentValue
// const total = scores.reduce((totalScore,score) => totalScore + score)
// console.log(total)
//add all the number together
// const  scores = [3,4,5]

// const total = scores.reduce((total,score)=>total+score)
// console.log(total)



//.every()
//if everything in our array matches a rule,retrun true


// const testResult = [45,33,29,44,55,66,54]
// const ClasPassed = testResult.every(result =>result >20)

// console.log(ClasPassed)

// const animals = ['cat','fox','anteater','dog']

// //write code that return true or false if every string in the array is equal to 3 in Length

// const isThreeLettersAnimals = animals.every(animal=>animal.length === 3)

// console.log(isThreeLettersAnimals)

//.split()

// const sentence = 'I will have what she is having'
// const sentence2 ='asd-sdsd-sdfsdfsdf-hhgfh-ewewe-wer'
// const letters = sentence2.split('')
// const words = sentence.split(' ')
// const words = sentence2.split('-')

// console.log(words)
// const sentence = 'Common baby light my my fire'

// //get the third word for the sentence using code

// const words = sentence.split(' ')
// console.log(words[2])

//array work exercies to practice

//using 'map' write a function that converts farenheit to celcius.
//eg: getCalcius([23,140,212,41])  => [-5,60,100,5]
//formul (num - 32) x .5556 = C
// const fahrenhait = [23,140,212,41]
// let celciusArray
// function getCelcius() {
//      celciusArray = fahrenhait.map(x=>(x-32) *.5556)
// }
// getCelcius()
// console.log(celciusArray)

// const fahrenhait = [23,140,212,41]
// function getCelcius() {
//      return fahrenhait.map(x=>(x-32) *.5556)
// }
// console.log(getCelcius())

//using 'some' write a function that checks an array for a 'falsey' value
//eg: checkForFalsey([11,NaN,[],'Angels'])=>true
// const array =[11,NaN,[],'Angels']

// function checkForFalsey(){
//     return array.some(item => !item)
// }
// console.log(checkForFalsey())


//using reduce write a function that will return the total number of charcters in a array of strings.
// const sportArray =['Rabbit','Football','Cracking']

// function getTotal(){
//     return sportArray.reduce((total,word)=> total + word.length,0)
// }

// // function getTotal(){
// //     return sportArray.reduce((accumulator,score)=>accumulator+score).length
// // }

// console.log(getTotal())

//using 'every'  write a function that chacks whether every number in an array is square number.

// const numbers = [9,16,25,81]

// function checkSuares(){
//    return numbers.every(square => 
//        Math.sqrt(square)%1===0
//     )
// }
// console.log(checkSuares())

//using an array method, write a function that returns the string elements of an array that
// have a given length or larger.a

// const wordsArray = ['Florida','dog','phone']
// const number = 5

// function getWords(wordsArray,number) {
//     return wordsArray.filter(word => word.length >= number)
// }
// console.log(getWords(['Florida','dog','phone'],5))
// console.log(getWords(['pen','astrount','puppy'],3))

// const words = ['23cm','5.6cm','1000cm']


// function getValues() {
//     const words2 = words.reduce((totalScore,score) => totalScore + score).split('cm')
//     for(var i=0; i<words2.length;i++) 
//         words2[i] = parseFloat(words2[i],10)
//     words2.pop()
//     return words2
// }
// //ania kubow solution 
// // function getValues(){
// //     return words.map(value => parseFloat(value))
// // }

// console.log(getValues())

//using split and filter 
//cümlenin ünlü sayısı bulma

// const saying ='Merhaba bu cümlenin ünlü harf sayısını bulalım.'
// const vowels = ['a','e','ı','i','o','ö','u','ü','A','E','I','İ','O','Ö','U','Ü']
// function getVowelCount(){
//    console.log( saying.split('').filter(letter => vowels.includes(letter)).length)
// }
// console.log(saying.split(''))

// getVowelCount()

//using 'split' , 'map' and 'join' kullanarak
//dizinin ilk harfini büyük yapma

// const title = 'the queens gambit'

// function capatalise(title){
//     return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
// }
// console.log(capatalise('life of pie'))
// console.log(capatalise('that was amazing'))
// console.log(capatalise('i appritiate that'))



//addEventListener


// target.addEventListener(event,function)

// const hexagon = document.getElementById('hexagon')

// function alertMe(){
//     console.log('clicked')
// }

// hexagon.addEventListener('dblclick', alertMe)

// document.addEventListener('DOMContentLoaded',() => {



// })
// target.addEventListener(event,function)

// const body = document.querySelector('body')

// body.addEventListener('click',function() { console.log('clicked')})

//remove EventListener example
// const circle = document.querySelector('.circle')
// let count = 0
// function toggleColor() {
//     circle.classList.toggle('red-circle')
//     count++
//     console.log(count)
//     if(count>10){
//         circle.removeEventListener('click',toggleColor)
//     }
// }
// circle.addEventListener('click',toggleColor)


// const circle = document.querySelector('.circle')
// let height = 0

// function moveCircle(){
//     height+=50
//     circle.style.top = height + 'px'
//     if(height>300){
//         circle.removeEventListener('click',moveCircle)
//     }

// }

// circle.addEventListener('click',moveCircle)

//.query selector()

// const  circle = document.querySelector('.circle')

// console.log(circle)

// //.querySelectorAll()

// const  circle = document.querySelectorAll('#main')

// console.log(circle)



//.getByElementId()

// const  circle = document.getElementById('main')

// console.log(circle)

//Math.random()---------------------------------------------------------sdsd----------

// const Tetrominoes = ['LTetro','ZTetro','iTetro']

// // console.log(Math.random() * 20)//0 to <20
// // console.log(Math.random() * Tetrominoes.length) //0 to <3

// const randomNumber = Math.random() * Tetrominoes.length
// //math.floor - ronds numbers down to the nearest full integer
// //math.ceil() - round up
// // Math.round() round to nearest ineteger
// console.log(randomNumber)

// const  randomInteger = Math.floor(randomNumber)
// console.log(randomInteger)
// console.log(Tetrominoes[randomInteger])

// const drinksMenu = ['Cola', 'Lemonade', 'Coffee', 'Water']

// const randomNumber = Math.random() *  drinksMenu.length
// console.log(randomNumber)

// const randomInteger  = Math.ceil(randomNumber)
// console.log(randomInteger)

// console.log(drinksMenu[randomInteger])

// console.log (drinksMenu[Math.floor(Math.random() * drinksMenu.length)])


//Date 
// const dateDisplay = document.querySelector('.circle .timer')

// const today = new Date() 
// const date  = today.getDate()//the date, today is the 12th

// const day  = today.getDay() //the day of the week

// const fullYear = today.getFullYear()

// const hours = today.getHours()

// const isoString = today.toISOString()

// console.log(isoString)

// const Christmas = new Date('2021-12-24T14:32:04.787Z')
// console.log(Christmas)

// console.log(Christmas - today)

// const millsecondsToXmas = Christmas - today

// const minutes = (millsecondsToXmas / 60000)

// console.log(minutes)
// dateDisplay.innerHTML ='Yeni yıla kalan dakika \n' + Math.round(minutes)

//setTimeout()
//syntax
// setTimeout(function,miliseconds)
// const circle  = document.querySelector('.timer')
// const time = 3000
// function showText() {
//     circle.innerHTML = 'hi, dude whats \'up'
// }

// setTimeout( showText, time)

// function deleteText() {
//     circle.innerHTML=''
// }
// // setTimeout(deleteText,10000)

// setTimeout(function() {
//     circle.innerHTML = ''
// },10000)
// const circle  = document.querySelector('.circle')

// function deleteCircle() {
//     circle.style.display = 'none'

// }
// setTimeout(deleteCircle,5000)

//setInterval()
//syntax
// setInterval(function, milliseconds)

// const bubble = document.querySelector('.timer')
// const text = 'Alert!'

// const time = 2000

// function showAlert () {
//     const textDisplay  = document.createElement('div')
//     textDisplay.innerHTML = text

//     bubble.appendChild(textDisplay)

// }
// // setInterval(showAlert,2000)


// function printName() {
//     console.log('Yunus Emre')
// }

// const timerId = setInterval(printName, 5000)
// console.log(timerId)

// clearInterval(timerId)
//clearInterval method 


// const circle = document.querySelector('.circle')
// let height = 100
// function moveCircle() {
//     height+=20
//     circle.style.top= height + 'px'
//     console.log(height)
//     if(height >=300){
//         clearInterval(timerId )
//     }


// }

// let timerId = setInterval(moveCircle,1000) 

//classes

//class declaration

// class Rectangle {
//     constructor(height,width){
//         this.width = width;
//         this.height = height;
//     }
// }

// const newRectangle = new Rectangle(300,100)

// console.log(newRectangle)

// class Ghost{
//     constructor(Classname,speed,color,startingPoint) {
//         this.Classname = Classname;
//         this.speed = speed;
//         this.color = color;
//         this.startingPoint = startingPoint;
//     }
// }
// const blinky = new Ghost('blinky',300,'blue',4)
// const inky = new Ghost('inky',250,'green',10)
// const pinky = new Ghost('pinky',350,'pink',20)
// const clyde = new Ghost('clyde',250,'orange',15)


// console.log(blinky.speed)
// console.log(inky.startingPoint)

//keys()
//switch statement
// const circle = document.querySelector('.circle')
// let xAxis = 0
// let yAxis = 0
// let current = 50

// function control(e) {
//     // if (e.keyCode === 37){
//     //     console.log('pressed Left')
//     // }else if (e.key ==='ArrowRight'){
//     //     console.log('pressed right')
//     // }
//     // else if (e.key ==='ArrowUp'){
//     //     console.log('pressed up')
//     // }
//     // else if (e.key ==='ArrowDown'){
//     //     console.log('pressed down')
//     // }
//     switch (e.key) {
//         case 'ArrowLeft':
//             console.log('Pressed Left')
//             xAxis-=current
//             circle.style.left = xAxis + 'px'

//             break;
//         case 'ArrowRight':
//             console.log('Pressed Right')
//             xAxis+=current
//             circle.style.left = xAxis + 'px'
//             break;

//         case 'ArrowUp':
//             console.log('Pressed Up')
//             yAxis-=current
//             circle.style.top = yAxis + 'px'
//             break;
//         case 'ArrowDown':
//             console.log('Pressed Down' + e.key)
//             yAxis+=current
//             circle.style.top = yAxis + 'px'
//             break;
//         default:
//             console.log(e.keyCode)
//     }
// }
// document.addEventListener('keydo
// const circle = document.querySelector('.circle')
// const mouth = document.querySelector('#mouth')
// function UpDown(e) {
//     switch (e.key) {
//         case 'ArrowUp':
//             console.log('Pressed Up')
//             mouth.classList.remove('sad-mouth')
//             mouth.classList.add('happy-mouth')
//             break;
//         case 'ArrowDown':
//             console.log('Pressed Down' + e.key)
//             mouth.classList.remove('happy-mouth')
//             mouth.classList.add('sad-mouth')

//             break;
//         default:
//             console.log(e.keyCode + 'is not recognized this application')
//     }

// }

// document.addEventListener('keydown', UpDown)


//.sort()

// const planets = ['Mars','Jupiter','Uranus','Earth']

// console.log(planets.sort())

// const ages = [33,55,232,552,1,44,-5]
// console.log(ages.sort())

//includes()
const books = ['Alf','Life of Pie','Power of Now']

console.log(books.includes('Alf'))