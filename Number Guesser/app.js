/*
 GAME FUNCTION:
 - Player must guess a number between a min and max
 - Player gets certain amount of guesses
 - Notify player of guesses remaining
 - Notify player of correct answer if lose
 - Let player choose to play again
 */

 //* Game Values
 let min = 1,
     max = 10,
     winningNum = getRandomNumber(min, max),
     guessesLeft = 3;

//* UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//* Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//* Play Again Event Listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});



//* Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
    //* Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //* Check if won
    if(guess === winningNum){
        //* Game Over - Won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    }else{
        //* Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        }
        else{
            //* Game continues - answer wrong
            //* Change border color
            guessInput.style.borderColor = 'red';

            //Clear Input
            guessInput.value = '';

            //* Tell user it's the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

//* Set message function
function setMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

     //* Disable input
     guessInput.disabled = true;
     //* Change border color
     guessInput.style.borderColor = color;
     //* Set message
     setMessage(msg, color);

     //* Play Again?
     guessBtn.value = 'Play Again?';
     guessBtn.className += 'play-again';
}

function getRandomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}