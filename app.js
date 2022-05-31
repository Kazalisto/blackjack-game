let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')
let message = ""
let sum = 0
let cards = []
let isAlive = false
let hasBlackJack = false

function getRandomCard(){
    let random = Math.floor(Math.random(1) * 12) + 1
    return random
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Would you like to draw another card ?"
    } else if (sum === 21) {
        message = "Congratulations! You've got blackjack !"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard(){
    if (hasBlackJack === false && isAlive === true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        
    }
}

function resetAll(){
    sumEl.textContent = "Sum: "
    cardsEl.textContent = "Cards: "
    
}