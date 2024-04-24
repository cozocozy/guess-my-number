'use strict';
let score = 20;
let secretNumber =Math.trunc(Math.random()*20)+1;
let highscore = 0;
document.querySelector('.number').textContent='?';
const again = document.querySelector('.again').addEventListener('click',function() {
    score =20;
    secretNumber =Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;   
    document.querySelector('.number').textContent= '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').style.display = 'block';

})
//guess check
document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess) {
    document.querySelector('.message').textContent = 'No Number !'
    }
    //when player wins
    else if (guess === secretNumber){
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('body').style.backgroundColor = 'teal';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').style.display = 'none';
    if(score > highscore){
    highscore=score;
    document.querySelector('.highscore').textContent = highscore;
    }

    
    }
    //when guess is wrong
    else if ( guess !== secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'too High !' : 'too Low !';
            score--;
            document.querySelector('.score').textContent=score;
            }
            else {
            document.querySelector('.score').textContent=0;
            document.querySelector('.message').textContent = 'You Lose The Game !'
            }
    }
})