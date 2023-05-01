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
  let length = Object.keys(quotes).length;
  let decimal = Math.random() * length;
  let rounded = Math.floor(decimal + 1);
  let output = quotes[rounded].text;
  return output;
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
  let textAreaWrapper = document.getElementsByClassName("text-area-wrapper")[0];
  let textAreaElement = document.getElementById("text-area-element");
  const quote = getRandomQuote();
  let words = quote.split(" ");

  const createSpan = function () {
    let textWithSpan = "";
    let letterSpanCombination = "";
    for (let i in words) {
      words[i] += " ";
      letterSpanCombination = "";
      let j = 0;
      for (j in words[i]) {
        if (words[i][j] == " ") {
          letterSpanCombination += `<span class="w${i}l${j} no-underline inline-block w-2 h-4"> </span>`;
        } else {
          letterSpanCombination += `<span class="w${i}l${j}">${words[i][j]}</span>`;
        }
      }
      textWithSpan += `<span class="w${i}">${letterSpanCombination}</span>`;
    }
    quoteElementDisplay.innerHTML = textWithSpan;
  };
  createSpan();

  let currentWordIndex = 0;
  let currentWord = words[currentWordIndex];
  let letterIndex = 0;
  let highlightedLetter = 0;
  let redHighlight = 0;
  let redAll = false;
  let finishedTyping = false;
  textAreaElement.value = "";
  textAreaElement.autoComplete = "off";
  textAreaElement.autoCorrect = "off";
  textAreaElement.disabled = true;
  textAreaElement.spellcheck = false;
  quoteElementDisplay.style.userSelect = "none";

  function getWordAndSpan() {
    currentWord = words[++currentWordIndex];
    document
      .getElementsByClassName(`w${currentWordIndex}`)[0]
      .classList.add("underline");
  }
  document
    .getElementsByClassName(`w${currentWordIndex}`)[0]
    .classList.add("underline");

  // Timer and animation waiting
  let counter = 11;
  let countElementBox = document.getElementsByClassName("count-element-box")[0];
  let redCircleElement = document.getElementsByClassName("redCircle")[0];
  let yellowCircleElement = document.getElementsByClassName("yellowCircle")[0];
  let greenCircleElement = document.getElementsByClassName("greenCircle")[0];

  let countDown = setInterval(() => {
    document.getElementById("get-ready-element").textContent = --counter;

    if (counter == 0) {
      textAreaElement.disabled = false;
      textAreaElement.focus();
      clearTimeout(countDown);
      yellowCircleElement.classList.remove("bg-yellow-500");
      yellowCircleElement.classList.add("bg-slate-600");
      greenCircleElement.classList.remove("bg-slate-600");
      greenCircleElement.classList.add("bg-green-500");
    }
    // Fade out
    if (counter == 1) {
      countElementBox.classList.add("animate-countdownFadeOut");
    }
    if (counter == 5) {
      redCircleElement.classList.remove("bg-red-500");
      redCircleElement.classList.add("bg-slate-600");
      yellowCircleElement.classList.remove("bg-slate-600");
      yellowCircleElement.classList.add("bg-yellow-500");
    }
  }, 1000);

  // Keys listening
  textAreaElement.addEventListener("input", () => {
    if (finishedTyping != true) {
      // Check the textarea value if empty then clear all highlight
      if (textAreaElement.value == "") {
        for (let i in currentWord) {
          document
            .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
            .classList.remove("bg-red-600");
          document
            .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
            .classList.remove("underline");
          document
            .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
            .classList.remove("text-green-600");
          document
            .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
            .classList.remove("text-red-600");
          document
            .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
            .classList.remove("decoration-green-600");
        }
        letterIndex = 0;
        highlightedLetter = 0;
        redHighlight = 0;
        redAll = false;
      } else {
        // when length is the same not more than
        if (textAreaElement.value.length <= currentWord.length) {
          // Check the length of the text area value
          if (textAreaElement.value.length < highlightedLetter) {
            document
              .getElementsByClassName(
                `w${currentWordIndex}l${highlightedLetter - 1}`
              )[0]
              .classList.remove("bg-red-600");
            document
              .getElementsByClassName(
                `w${currentWordIndex}l${highlightedLetter - 1}`
              )[0]
              .classList.remove("underline");
            document
              .getElementsByClassName(
                `w${currentWordIndex}l${highlightedLetter - 1}`
              )[0]
              .classList.remove("text-green-600");
            document
              .getElementsByClassName(
                `w${currentWordIndex}l${highlightedLetter - 1}`
              )[0]
              .classList.remove("text-red-600");
            document
              .getElementsByClassName(
                `w${currentWordIndex}l${highlightedLetter - 1}`
              )[0]
              .classList.remove("decoration-green-600");
            highlightedLetter--;
            letterIndex--;

            // If redHighlight greater than zero
            if (redHighlight > 0) {
              redHighlight--;
            }

            if (redHighlight == 0) {
              redAll = false;
            }
          } else {
            // Red is true then highligt all to be red
            if (redAll) {
              document
                .getElementsByClassName(
                  `w${currentWordIndex}l${letterIndex}`
                )[0]
                .classList.add("bg-red-600");
              letterIndex++;
              redAll = true;
              redHighlight++;
              highlightedLetter++;
            }
            // Red not true then to back to normal higlighting
            else {
              if (
                textAreaElement.value[letterIndex] == currentWord[letterIndex]
              ) {
                document
                  .getElementsByClassName(
                    `w${currentWordIndex}l${letterIndex}`
                  )[0]
                  .classList.add("text-green-600");
                document
                  .getElementsByClassName(
                    `w${currentWordIndex}l${letterIndex}`
                  )[0]
                  .classList.add("underline");
                document
                  .getElementsByClassName(
                    `w${currentWordIndex}l${letterIndex}`
                  )[0]
                  .classList.add("decoration-green-600");
                letterIndex++;
                highlightedLetter++;
              } else {
                document
                  .getElementsByClassName(
                    `w${currentWordIndex}l${letterIndex}`
                  )[0]
                  .classList.add("bg-red-600");
                letterIndex++;
                highlightedLetter++;
                redHighlight++;
                redAll = true;
              }
            }
          }
          if (textAreaElement.value == `${currentWord}`) {
            textAreaElement.value = "";
            letterIndex = 0;
            highlightedLetter = 0;
            redHighlight = 0;
            redAll = false;
            for (let i in currentWord) {
              document
                .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
                .classList.remove("underline");
              document
                .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
                .classList.remove("text-green-600");
              document
                .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
                .classList.remove("text-red-600");
              document
                .getElementsByClassName(`w${currentWordIndex}l${i}`)[0]
                .classList.remove("decoration-green-600");
            }
            document
              .getElementsByClassName(`w${currentWordIndex}`)[0]
              .classList.remove("underline");
            if (currentWordIndex == words.length - 1) {
              finishedTyping = true;
            } else {
              getWordAndSpan();
            }
          }
        }
      }
    }
  });
}
