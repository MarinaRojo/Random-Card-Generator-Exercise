/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = ["♦", "♥", "♠", "♣"];
  let randomSuit = Math.floor(Math.random() * 4);
  let number = Math.floor(Math.random() * 12 + 1);
  const card = document.querySelector(".card");
  let suit = suits[randomSuit];
  if (number == 10) {
    number = "J";
  } else if (number == 11) {
    number = "Q";
  } else if (number == 12) {
    number = "K";
  } else if (number == 1) {
    number = "A";
  }
  card.innerHTML = `<div class="${suit} text-start">${suit}</div>
                  <div class="number text-center">${number}</div>
                  <div class="${suit} text-end">${suit}</div>
  `;
};
