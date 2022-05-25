'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
score0El.textContent =0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let activePlayer =0;
let scores =[0,0];
const player0El =document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');
let playing = true;

function switchUser(){
    document.getElementById(`current--${activePlayer}`).textContent=0;

        activePlayer = activePlayer === 0 ? 1:0;
        currentScore =0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');

}

btnRoll.addEventListener('click',function(){
    if(playing)
{
    const dice =Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove('hidden');
    diceEl.src =`dice-${dice}.png`;
    if(dice !== 1){
        currentScore += dice;
        // current0El.textContent=currentScore;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;

    }else{
        // document.getElementById(`current--${activePlayer}`).textContent=0;

        // activePlayer = activePlayer === 0 ? 1:0;
        // currentScore =0;
        // player0El.classList.toggle('player--active');
        // player1El.classList.toggle('player--active');
        switchUser();

    }
}

});

btnHold.addEventListener("click", function(){
    if(playing){
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    
    if(scores[activePlayer]>=20){
        playing = false;
        diceEl.classList.add('hidden');
    
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }else{
        switchUser();
    }
}
});
  btnNew.addEventListener("click", function(){
    scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

});
