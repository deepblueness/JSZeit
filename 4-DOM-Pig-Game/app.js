

var scores, roundScore, activePlayer, gamePlaying, dice1, dice2,  diceLast1, dicelast2, end_game;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying){
		
		 dice1 = Math.floor(Math.random()*6+1);	
		 dice2 = Math.floor(Math.random()*6+1);	
		var diceDOM1 = document.querySelector('[data-dice="1"]')
		diceDOM1.style.display = 'block';
		diceDOM1.src = 'dice-'+dice1+'.png';
		diceLast1 = dice1;

		dice2 = Math.floor(Math.random()*6+1);	
		var diceDOM2 = document.querySelector('[data-dice="2"]')
		diceDOM2.style.display = 'block';
		diceDOM2.src = 'dice-'+dice2+'.png';
		diceLast2 = dice2;
		console.log(diceLast2 +' dice = '+dice2);

		if ((dice1 !== 1) || (dice2 !== 1)){
			if (((dice1 ==6)&& (diceLast1 ==6)))
			{
				scores[activePlayer] = 0;
				nextPlayer();
				console.log('you got 2 6 in a row, get out');
			}
			else {
			roundScore += dice1 + dice2;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			}			
		}
		else {
			nextPlayer();
			
		 }}});
		 
document.querySelector('.btn-hold').addEventListener('click', function () {
	if (gamePlaying) {
		scores[activePlayer] += roundScore;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		if (scores[activePlayer] >= end_game) 
		{
			document.querySelector('#name-' + activePlayer).textContent = 'Winner';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}
	
		else {
			nextPlayer();
	}
	
	}
	}
	);

function nextPlayer (){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	//document.querySelector('dice').style.display = none;


}

document.querySelector('.btn-new').addEventListener('click',init);


function init () {
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	document.getElementById('score-0').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.getElementById('btn-end-game').style.display= 'block';

	document.getElementById('btn-end-game').addEventListener('click',  function getEndGame() {
		end_game =  document.querySelector('.end_game').value;
		document.getElementById('btn-end-game').style.display= 'none';
	});
}


//if input
