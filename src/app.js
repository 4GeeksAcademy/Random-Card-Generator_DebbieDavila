/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ['<font color="red">♥</font>', "♦", "♠", "♣"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

function generateRandomCard() {
  // Randomly select a suit and a value
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  // Construct and return the random card
  document.getElementById("top").innerHTML = randomSuit;
  document.getElementById("bottom").innerHTML = randomSuit;
  document.getElementById("middle").innerHTML = randomValue;
  return `${randomValue} of ${randomSuit}`;
}

// Execute the function when the page loads
window.onload = function() {
  const randomCard = generateRandomCard();
  console.log("Random Card:", randomCard);
};

function handleWindowLoad() {
  const randomCard = generateRandomCard();
  console.log("Random Card:", randomCard);
}

window.addEventListener("load", handleWindowLoad);

let button = document.getElementById("generateButton");
button.addEventListener("click", function() {
  // Your code here

  let randomCard = generateRandomCard();
});
