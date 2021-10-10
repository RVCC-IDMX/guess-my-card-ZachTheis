/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

/* app.js */

/*
  DO NOT FORGET
Edit random.js so getRandomInt(max)
will return a random number from
0 to the value of max (inclusively)

*/
import getRandomInt from './random';
import './style.css';

const farewell = document.querySelector('.farewell');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

while (confirm('Would you like to play the game?')) {
  const cardInt = getRandomInt(0, 4);
  console.log(`cardInt: ${cardInt}`);
  console.log(suits[cardInt]);
  const response = prompt(
    'Please enter your guess: Hearts, Spades, Diamonds, Clubs'
  );
  console.log(`Response: ${response}`);
  console.log(`Index of response: ${suits.indexOf(response.toLowerCase())}`);
  console.log(
    `Equality test: ${suits.indexOf(response.toLowerCase()) === cardInt}`
  );

  if (suits.indexOf(response.toLowerCase()) === cardInt) {
    alert('Congratulations! You guessed correctly!');
  } else if (suits.indexOf(response.toLowerCase()) === -1) {
    alert("That's not a valid response. Try again!");
  } else {
    alert("Sorry, that's not right.");
  }
}

farewell.innerHTML = '<h1>Thanks for playing!<h1>';
