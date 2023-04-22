/***Game by Siaw Henry Nartey */

// Text or quotes for typing
const quotes = {
  1: {
    text: "You know, if those who claim to want to give you a short quotes stopped patting themselves on the back, they could make even shorter quotes. Just type and enjoy the quotes you do, stop flooding the quote pool complaining.",
  },
  2: {
    text: "This is the shortest quote possible, one hundred and fifty characters, no colons, no parenthesis, that is it, that is the entire quote, have a great day.",
  },
  3: {
    text: "Here is one quick and easy typing prompt for you. Short and speedy.. You got this! What is your favorite Pokemon? Mine is Mudkip. Mudkip solos. 1 2 3.. are you ready? Mudkip Mudkip Mudkip Mudkip.",
  },
  4: {
    text: "This is an easy quote to type. Should be short and concise for you to type it faster than usual and should have short enough words for you to speed up.",
  },
  5: {
    text: "Fasting for just three days has shown a record increase in the body's HGH levels, about 300%. Intermittent fasting provides a good balance between eating and fasting cycles in the human body. This balance works towards a positive influence on HGH secretions, both in the short and long term.",
  },
};

function getRandomQuote() {
  for (let i = 0; i < quotes.length; i++) {
    break;
  }
}
function hideSideBar() {
  document.getElementById("toggle-hide-show").style.visibility = "hidden";
}

function showSideBar() {
  document.getElementById("toggle-hide-show").style.visibility = "visible";
}

function hideForGame() {
  const elements = document.getElementsByClassName("hide-for-game");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.visibility = "hidden";
    elements[i].style.position = "absolute";
  }
  showforGame();
  let quoteElementDisplay = document.getElementById("quote-element-display");
  quoteElementDisplay.textContent = quotes[1].text;
}

function showforGame() {
  element = document.getElementById("show-for-game");
  element.style.position = "static";
  element.style.visibility = "visible";
}

