// TODO
// If game is in progress then you shouldn't be able to start a new game.. but how since I use the same button. DONE! Added else if to check if the game was in progress.

const button = document.querySelector('button')
const reactionSpeedSpan = document.querySelector('#reactionSpeed')

let gameStarted = false
let inProgress = false

button.addEventListener('click', playGame)

function changeBtnText(){
    if (gameStarted){
        button.innerText = 'Click when the box turns red'
    }
    else {
        button.innerText = 'Start Game'
    }
}

function changeColor(){ // change section colour
    document.querySelector('section').classList.toggle('red')
    document.querySelector('body').classList.toggle('cream')
    document.querySelector('button').classList.toggle('cream')

}

const timer = {
    startTime : 0,
    endTime : 0,
    randomTime : 0,
    difTime : 0,

    // timer functions
    startTimer() {
        this.startTime = new Date().getTime()
    },
    randomise(){ // return random milliseconds up to 6 seconds
        randomTime = Math.floor(Math.random()*4000 + 1000)
        return randomTime
    },
    calculateDifference(){
        difTime = timer.endTime - timer.startTime
        if (difTime > 100000 || difTime < 0){
            return 'Clicked too fast! Wait for the red.'
        }
        else {
            return difTime + 'ms'
        }
    },
}


// when playGame runs it should start the game, change the button text, get the current time, randomise a number for the colour to change. But if game has already started it should return endTime - startTime into the reaction speed span, put the text back to startGame, set gameStarted to false. 
function playGame(){
    if (gameStarted){ // end game 
        timer.endTime = new Date().getTime()
        gameStarted = false
        changeColor()
        changeBtnText()
        reactionSpeedSpan.innerText = timer.calculateDifference()
        timer.startTime = 0
        timer.endTime = 0
        timer.randomTime = 0
        timer.difTime = 0

    }


    else if (!gameStarted && inProgress === false) { // start game 
        reactionSpeedSpan.innerText = ''
        timer.startTime = 0
        gameStarted = true
        changeBtnText() // change button text to say click
        inProgress = true
        setTimeout( () => { // change colour after random amount of time
            // start the time from the moment the game is started
            timer.startTimer()
            changeColor()
            inProgress = false
        }, timer.randomise())
    }

    else {
        console.log('woah game still in progress man')
    }

}