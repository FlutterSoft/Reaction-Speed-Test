const button = document.querySelector('button')
const reactionSpeedSpan = document.querySelector('#reactionSpeed')

let reactionSpeed = 0
let gameStarted = false

button.addEventListener('click', playGame)

reactionSpeedSpan.innerText = reactionSpeed


function changeBtnText(){
    if (gameStarted){
        button.innerText = 'Click when the box turns red'
    }
    else {
        button.innerText = 'Start Game'
    }
}

function changeColor(){
    document.querySelector('section').style='background-color: red;'
}

const timer = {
    startTime : 0,
    endTime : 0,

    startTimer() {
        startTime = Date.now()
    },
    randomise(){
        let time = Math.floor(Math.random()*1000)
        return time
    },
}

// when playGame runs it should start the game, change the button text, get the current time, randomise a number for the colour to change. But if game has already started it should return endTime - startTime into the reaction speed span, put the text back to startGame, set gameStarted to false. 
function playGame(){
    if (gameStarted){
        gameStarted = false
        setTimeout( () => {
            changeColor()
        }, timer.randomise())
    }
    else {
        gameStarted = true
        changeBtnText()
        timer.startTimer()
    }

}