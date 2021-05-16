document.addEventListener('DOMContentLoaded',() => {
    //card options
    const cardsArray = [
        {
            name:'fries',
            img:'src/img/fries.png'
        },
        {
            name:'cheeseburger',
            img:'src/img/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/img/ice-cream.png'
        },
        {
            name:'pizza',
            img:'src/img/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/img/milkshake.png'
        },
        {
            name:'hotdog',
            img:'src/img/hotdog.png'
        },
        {
            name:'fries',
            img:'src/img/fries.png'
        },
        {
            name:'cheeseburger',
            img:'src/img/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img:'src/img/ice-cream.png'
        },
        {
            name:'pizza',
            img:'src/img/pizza.png'
        },
        {
            name:'milkshake',
            img:'src/img/milkshake.png'
        },
        {
            name:'hotdog',
            img:'src/img/hotdog.png'
        }
    ]
    console.log(Math.random())
    
    cardsArray.sort(() => 0.5 - Math.random())
    console.log(cardsArray)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []


    function createBoard() {
        for(let i =0;i<cardsArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','src/img/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    
    function flipCard(){
        let cardId = this.getAttribute('data-id')
        console.log(cardsArray[cardId])
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src',cardsArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch,500)
        }
        console.log(cardsChosenIds)
    }

    function checkForMatch() {
        const cards  = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if(optionOneId == optionTwoId)
        {
            alert('You have clicked the same image!')
            cards[optionOneId].setAttribute('src','src/img/blank.png')
            cards[optionTwoId].setAttribute('src','src/img/blank.png')
        }else if(cardsChosen[0] === cardsChosen[1]){
            alert('you have found a match')
            cards[optionOneId].setAttribute('src','src/img/white.png')
            cards[optionTwoId].setAttribute('src','src/img/white.png')
            cards[optionOneId].removeEventListener('click',flipCard)
            cards[optionTwoId].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen)
            console.log(cardsWon)
        }
        else {
            cards[optionOneId].setAttribute('src','src/img/blank.png')
            cards[optionTwoId].setAttribute('src','src/img/blank.png')
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length=== cardsArray.length/2)
        {
            resultDisplay.textContent= 'Congratuliations'
        }

    }
    createBoard()
})