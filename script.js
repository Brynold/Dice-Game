'use srict';
//players
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

//main Scroes
const score0 =document.getElementById('score--0');
const score1=document.getElementById('score--1');

//current scores
const currentScore0=document.getElementById('current--0');
const currentScore1=document.getElementById('current--1');

//dice 
const dice=document.querySelector('.dice');

//buttons
const newButton =document.querySelector('.btn--new');
const rollButton=document.querySelector('.btn--roll');
const holdButton=document.querySelector('.btn--hold');


let currentScore;
let activePlayer;
let scores;


const newWindow=function(){ 

score0.textContent=0;
score1.textContent=0;
currentScore0.textContent=0;
currentScore1.textContent=0;
playing=true;
dice.classList.add('hidden');

 currentScore=0;
 activePlayer=0;
 scores=[0,0];

//  document.querySelector(`.player--${activePlayer}`).classList.toggle.remove('player--winner');
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');

player0.classList.add('player--active');
player1.classList.remove('player--active');

}

newWindow();



// ROLL BUTTON
rollButton.addEventListener('click', function(){
  if(playing){
  dice.classList.remove('hidden');

  const randomNumbers=Math.trunc(Math.random()*6)+1;
  dice.src=`dice-${randomNumbers}.png`;

  if(randomNumbers !== 1){
  currentScore+=randomNumbers;
  document.getElementById(`current--${activePlayer}`).textContent=currentScore;

  }else{
  
    changingPlayer();
  }
}
})


// switching players
const changingPlayer=function(){
  if(playing){
  document.getElementById(`current--${activePlayer}`).textContent=0;
  currentScore=0;
  activePlayer=activePlayer=== 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
}


// HOLD BUTTON
holdButton.addEventListener('click',function(){
if(playing){
  scores[activePlayer]+=currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  currentScore=0;
  document.getElementById(`current--${activePlayer}`).textContent=currentScore;

  if(scores[activePlayer] >=10){
    playing=false;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
     document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  
  }
  changingPlayer(); 
}
})

newButton.addEventListener('click',newWindow);













