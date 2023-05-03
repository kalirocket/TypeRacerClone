const typingGame = {
  gameElement: document.getElementById("show-for-game"),
  nonGameElements: document.getElementsByClassName("hide-for-game"),
  textAreaElement: document.getElementById("text-area-element"),
  quoteElementDisplay: document.getElementById("quote-element-display"),
  timerElement: document.getElementById("get-ready-element"),
  quotes: {
    1: {
      text: "The quick brown fox jumped over the fence!",
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
    6: {
      text: "You only live once, but if you do it right, once is enough.",
    },
    7: {
      text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    },
    8: {
      text: "Never let the fear of striking out keep you from playing the game.",
    },
    9: {
      text: "My father, who was from a wealthy family and highly educated, a lawyer, Yale and Columbia, walked out with the benefit of a healthy push from my mother, a seventh grade graduate, who took a typing course and got a secretarial job as fast as she could.",
    },
    10: {
      text: "Dynamic typing is not necessarily good. You get static errors at run time, which you really should be able to catch at compile time.",
    },
    11: {
      text: "Over the years, I've trained myself to speak using the same language I would use if I were typing: meaning using full sentences in the way that paragraphs and scenes are arranged.",
    },
    12: {
      text: "",
    }
  },
  getRandQuote: function () {
    let len = Object.keys(this.quotes).length;
    let decimal = Math.random() * len;
    let rounded = Math.floor(decimal + 1);
    let quote = this.quotes[rounded].text;
    return quote;
  },
  hideGameElements: function () {
    this.gameElement.style.visibility = "hidden";
    this.gameElement.style.position = "absolute";
  },
  hideNonGameElements: function () {
    for (let i = 0; i < this.nonGameElements.length; i++) {
      this.nonGameElements[i].style.visibility = "hidden";
      this.nonGameElements[i].style.position = "absolute";
    }
  },
  showGameElements: function () {
    this.gameElement.style.position = "relative";
    this.gameElement.style.visibility = "visible";
  },
  showNonGameElements: function () {
    for (let i = 0; i < this.nonGameElements.length; i++) {
      this.nonGameElements[i].style.visibility = "visible";
      this.nonGameElements[i].style.position = "static";
    }
  },
  quoteSpan: function () {
    let wordSpan = "";
    let letterSpan = "";
    this.words = this.getRandQuote().split(" ");

    for (let i = 0; i < this.words.length; i++){
      this.words[i] += " ";
      letterSpan = "";
      for (let j in this.words[i]){
        if (this.words[i][j] == " "){
          letterSpan += `<span class="w${i}l${j} no-underline inline-block w-2 h-4"> </span>`;
        }
        else{
          letterSpan += `<span class="w${i}l${j}">${this.words[i][j]}</span>`;
        }
      }
      wordSpan += `<span class="w${i}">${letterSpan}</span>`;
    }
    this.quoteElementDisplay.innerHTML = wordSpan;
    
  },
  constVariableInit: function () {
    this.textAreaElement.autoComplete = "off";
    this.textAreaElement.autoCorrect = "off";
    this.textAreaElement.spellcheck = false;
    this.quoteElementDisplay.style.userSelect = "none";
    this.words = this.getRandQuote().split;
    this.countElementBox = document.getElementsByClassName("count-element-box")[0];
    this.countElementBox.classList.remove("animate-countdownFadeOut");
    this.countElementBox.style.visibility = "visible";
  },
  textAreaEleInit: function () {
    this.textAreaElement.value = "";
    this.textAreaElement.disabled = true;
    
  },
  getNextUnderlineWord: function () {
    this.currentWord = this.words[++this.currentWordIndex];
    document.getElementsByClassName(`w${this.currentWordIndex}`)[0].classList.add("underline");
  },
  getUnderlineWord: function () {
    document.getElementsByClassName(`w${this.currentWordIndex}`)[0].classList.add("underline");
  },
  redOnlyAnimate: function () {
    this.redCircleElement.classList.remove("bg-slate-600");
    this.redCircleElement.classList.add("bg-red-500");

    this.yellowCircleElement.classList.remove("bg-yellow-500");
    this.yellowCircleElement.classList.add("bg-slate-600")

    this.greenCircleElement.classList.remove("bg-green-500");
    this.greenCircleElement.classList.add("bg-slate-600");
  },
  yellowOnlyAnimate: function () {
    this.redCircleElement.classList.remove("bg-red-500");
    this.redCircleElement.classList.add("bg-slate-600");

    this.yellowCircleElement.classList.remove("bg-slate-600");
    this.yellowCircleElement.classList.add("bg-yellow-500");

    this.greenCircleElement.classList.remove("bg-green-500");
    this.greenCircleElement.classList.add("bg-slate-600");
  },
  greenOnlyAnimate: function () {
    this.redCircleElement.classList.remove("bg-red-500");
    this.redCircleElement.classList.add("bg-slate-600");

    this.yellowCircleElement.classList.remove("bg-yellow-500");
    this.yellowCircleElement.classList.add("bg-slate-600");

    this.greenCircleElement.classList.remove("bg-slate-600");
    this.greenCircleElement.classList.add("bg-green-500");
  },
  startCountAnimation: function () {
    this.redCircleElement = document.getElementsByClassName("redCircle")[0];
    this.yellowCircleElement = document.getElementsByClassName("yellowCircle")[0];
    this.greenCircleElement = document.getElementsByClassName("greenCircle")[0];
    counter = 11;
    this.countDown = setInterval(() => {
      this.timerElement.textContent = --counter;
      if (counter == 0){
        clearInterval(this.countDown);
        this.greenOnlyAnimate();
        this.textAreaElement.disabled = false;
        this.textAreaElement.focus();
      }
      if (counter == 5){
        this.yellowOnlyAnimate();
      }
      if (counter == 1){
        this.fadeOut();
      }
    }, 1000);
    
  },
  fadeOut: function () {
    this.countElementBox.classList.add("animate-countdownFadeOut");
  },
  endFadeOut: function () {
    this.countElementBox.classList.remove("animate-countdownFadeOut");
  },
  endCountAnimation: function () {
    clearInterval(this.countDown);
    this.endFadeOut();
    this.redOnlyAnimate();
    this.timerElement.textContent = "";
  },
  checkInput(){
  
    if (this.finishedTyping != true) {
      // Check the textarea value if empty then clear all highlight
      if (this.textAreaElement.value == "") {
        for (let i in this.currentWord) {
          document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("bg-red-600");
          document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("underline");
          document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("text-green-600");
          document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("text-red-600");
          document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("decoration-green-600");
        }
        document.getElementsByClassName("text-area")[0].classList.remove("bg-red-600");
        this.letterIndex = 0;
        this.highlightedLetter = 0;
        this.redHighlight = 0;
        this.redAll = false;
      } else {
        // when length is the same not more than
        if (this.textAreaElement.value.length <= this.currentWord.length) {
          // Check the length of the text area value
          if (this.textAreaElement.value.length < this.highlightedLetter) {
            document.getElementsByClassName(`w${this.currentWordIndex}l${this.highlightedLetter - 1}`)[0].classList.remove("bg-red-600");
            document.getElementsByClassName(`w${this.currentWordIndex}l${this.highlightedLetter - 1}`)[0].classList.remove("underline");
            document.getElementsByClassName(`w${this.currentWordIndex}l${this.highlightedLetter - 1}`)[0].classList.remove("text-green-600");
            document.getElementsByClassName(`w${this.currentWordIndex}l${this.highlightedLetter - 1}`)[0].classList.remove("text-red-600");
            document.getElementsByClassName(`w${this.currentWordIndex}l${this.highlightedLetter - 1}`)[0].classList.remove("decoration-green-600");
            this.highlightedLetter--;
            this.letterIndex--;

            // If redHighlight greater than zero
            if (this.redHighlight > 0) {
              this.redHighlight--;
            }

            if (this.redHighlight == 0) {
              document.getElementsByClassName("text-area")[0].classList.remove("bg-red-600");
              this.redAll = false;
            }
          } else {
            // Red is true then highligt all to be red
            if (this.redAll) {
              document.getElementsByClassName(`w${this.currentWordIndex}l${this.letterIndex}`)[0].classList.add("bg-red-600");
              document.getElementsByClassName("text-area")[0].classList.add("bg-red-600");
              this.letterIndex++;
              this.redAll = true;
              this.redHighlight++;
              this.highlightedLetter++;
            }
            // Red not true then to back to normal higlighting
            else {
              if (
                this.textAreaElement.value[this.letterIndex] == this.currentWord[this.letterIndex]
              ) {
                document.getElementsByClassName(`w${this.currentWordIndex}l${this.letterIndex}`)[0].classList.add("text-green-600");
                document.getElementsByClassName(`w${this.currentWordIndex}l${this.letterIndex}`)[0].classList.add("underline");
                document.getElementsByClassName(`w${this.currentWordIndex}l${this.letterIndex}`)[0].classList.add("decoration-green-600");
                document.getElementsByClassName("text-area")[0].classList.remove("bg-red-600");
                this.letterIndex++;
                this.highlightedLetter++;
              } else {
                document.getElementsByClassName(`w${this.currentWordIndex}l${this.letterIndex}`)[0].classList.add("bg-red-600");
                document.getElementsByClassName("text-area")[0].classList.add("bg-red-600");
                this.letterIndex++;
                this.highlightedLetter++;
                this.redHighlight++;
                this.redAll = true;
              }
            }
          }
          if (this.textAreaElement.value == `${this.currentWord}`) {
            this.textAreaElement.value = "";
            this.letterIndex = 0;
            this.highlightedLetter = 0;
            this.redHighlight = 0;
            this.redAll = false;
            for (let i in this.currentWord) {
              document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("underline");
              document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("text-green-600");
              document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("text-red-600");
              document.getElementsByClassName(`w${this.currentWordIndex}l${i}`)[0].classList.remove("decoration-green-600");
            }
            document.getElementsByClassName(`w${this.currentWordIndex}`)[0].classList.remove("underline");
            if (this.currentWordIndex == this.words.length - 1) {
              this.finishedTyping = true;
            } else {
              this.getNextUnderlineWord();
            }
          }
        }
      }
    }

  },
  startGame: function () {
    this.hideNonGameElements();
    this.showGameElements();
    this.constVariableInit();
    this.textAreaEleInit();
    this.quoteSpan();

    this.currentWordIndex = 0;
    this.currentWord = this.words[this.currentWordIndex];
    this.letterIndex = 0;
    this.highlightedLetter = 0;
    this.redHighlight = 0;
    this.redAll = false;
    this.finishedTyping = false;

    this.getUnderlineWord();
    this.startCountAnimation();
    
    // Animation ended?
    this.countElementBox.addEventListener("animationend", () => {
      this.greenCircleElement.classList.remove("bg-green-500");
      this.greenCircleElement.classList.add("bg-slate-600");
      this.redCircleElement.classList.remove("bg-slate-600");
      this.redCircleElement.classList.add("bg-red-500");
      this.countElementBox.style.opacity = 1;
      this.countElementBox.style.visibility = "hidden";
    });

    // Input listen
    this.checkInputBind = this.checkInput.bind(this);
    this.textAreaElement.addEventListener("input", this.checkInputBind);

  },
  quitGame: function () {
    this.hideGameElements();
    this.showNonGameElements();

    // Testing and clearing stuffs
    this.endCountAnimation();
    this.countElementBox.style.visibility = "hidden";

    // Animationend terminate
    this.countElementBox.removeEventListener("animationend", () => {
      this.greenCircleElement.classList.remove("bg-green-500");
      this.greenCircleElement.classList.add("bg-slate-600");
      this.redCircleElement.classList.remove("bg-slate-600");
      this.redCircleElement.classList.add("bg-red-500");
      this.countElementBox.style.opacity = 1;
      this.countElementBox.style.visibility = "hidden";
    })
    
    // Input terminate
    this.textAreaElement.removeEventListener("input", this.checkInputBind);
  },
};

function enterGame() {
  typingGame.startGame();
}

function quitGame() {
  typingGame.quitGame();
}
