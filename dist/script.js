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
function showAndQuitGame() {
  const elements = document.getElementsByClassName("hide-for-game");
  document.getElementById("show-for-game").style.visibility = "hidden";
  document.getElementById("show-for-game").style.position = "absolute";
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.visibility = "visible";
    elements[i].style.position = "static";
  }
}

function getRandomQuote() {
  let text =
    quotes[Math.floor(Math.random() * Object.keys(quotes).length)].text;
  return text;
}
function hideSideBar() {
  document.getElementById("toggle-hide-show").style.visibility = "hidden";
}

function showSideBar() {
  document.getElementById("toggle-hide-show").style.visibility = "visible";
}
function showforGame() {
  element = document.getElementById("show-for-game");
  element.style.position = "relative";
  element.style.visibility = "visible";
}

function hideForGame() {
  const elements = document.getElementsByClassName("hide-for-game");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.visibility = "hidden";
    elements[i].style.position = "absolute";
  }
  showforGame();
  let quoteElementDisplay = document.getElementById("quote-element-display");
  let textAreaElement = document.getElementById("text-area-element");
  const quote = getRandomQuote();
  let words = quote.split(" ");
  quoteElementDisplay.textContent = quote;

  let lastcompletedWordIndex = 0;
  let currentWord = words[lastcompletedWordIndex];

  function getSpan(currentWord) {
    let wordWithSpan = "";
    for (i in currentWord) {
      wordWithSpan += `<span class="letter${i}">${currentWord[i]}</span>`;
    }
    wordWithSpan = `<span class="underline">${wordWithSpan}</span>`;
    return wordWithSpan;
  }
  let wordWithSpan = getSpan(currentWord);
  quoteElementDisplay.innerHTML = quoteElementDisplay.innerHTML.replace(
    currentWord,
    wordWithSpan
  );
  let redAll = false;
  let highlightedLetters = 0;
  let letterIndex = 0;
  let currentWordIndex = 0;
  textAreaElement.addEventListener("input", () => {
    if (textAreaElement.value == "") {
      // Clear all highlight
      for (let i = 0; i < highlightedLetters; i++){
        document.getElementsByClassName(`letter${i}`)[currentWordIndex].classList.remove("text-green-600");
        document.getElementsByClassName(`letter${i}`)[currentWordIndex].classList.remove("text-red-600");
        document.getElementsByClassName(`letter${i}`)[currentWordIndex].classList.remove("underline");
        document.getElementsByClassName(`letter${i}`)[currentWordIndex].classList.remove("decoration-green-600");
      }
      letterIndex = 0;
      redAll = false;
      highlightedLetters = 0;
    } else {
      if (textAreaElement.length < highlightedLetters) {
        // Remove previous highlight
        if (pass) {
          // Some red highlight not available
          redAll = false;
        }
      } else {
        if (redAll) {
          // Highlight red
        } else {
          if (textAreaElement.value[letterIndex] == currentWord[letterIndex]) {
            // Letter is the same as letter highlight green
            document.getElementsByClassName(`letter${letterIndex}`)[currentWordIndex].classList.add("text-green-600");
            document.getElementsByClassName(`letter${letterIndex}`)[currentWordIndex].classList.add("underline");
            document.getElementsByClassName(`letter${letterIndex}`)[currentWordIndex].classList.add("decoration-green-600");
            highlightedLetters++;
            letterIndex++;
          } else {
            // Hightlight red
            document.getElementsByClassName(`letter${letterIndex}`)[currentWordIndex].classList.add("text-red-600");
            highlightedLetters++;
            letterIndex++;
          }
        }
      }
    }
  });
}
