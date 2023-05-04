const typingGame = {
  gameElement: document.getElementById("show-for-game"),
  nonGameElements: document.getElementsByClassName("hide-for-game"),
  textAreaElement: document.getElementById("text-area-element"),
  quoteElementDisplay: document.getElementById("quote-element-display"),
  timerElement: document.getElementById("get-ready-element"),
  getReadyElement: document.getElementById("get-ready-text"),
  bidTimerElement: document.getElementById("bid-timer"),
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
    this.bidTimerElement.textContent = "";
    this.wordsCompleted = 0;
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
        this.getReadyElement.textContent = "It's final countdown!";
      }
      if (counter == 1){
        this.fadeOut();
      }
      if (counter == 0){
        this.getReadyElement.textContent = "Go!";

        // Bid timer start
        this.bidTimerStart();
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
  bidTimerStart: function () {
    // 3 minutes equiv to 180 seconds
    let counter = 180;
    let x = 0;
    let y = 0;
    this.bidTime = setInterval(() => {
      // Check how many minutes
      if (counter >= 60){
        x = Math.floor(counter / 60);
        y = counter % 60;
      }
      else{
        x = 0;
        y = counter;
      }

      // Add preceding zeros to single digits
      if (y < 10){
        y = `0${y}`;
      }

      // Clear interval
      if (counter == 0){
        clearInterval(this.bidTime);
      }
      this.bidTimerElement.textContent = `${x}:${y}`;
      --counter; 
    }, 1000);
  },
  bidTimerStop: function () {
    clearInterval(this.bidTime);
    this.bidTimerElement.textContent = "";
  },
  progressPercentage: function () {
    console.log(`${(++this.wordsCompleted / this.words.length) * 100}%`);
  },
  progressPercentageReset: function (){
    this.wordsCompleted = 0;
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
              this.progressPercentage()
              this.finishedTyping = true;
            } else {
              this.progressPercentage();
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
    this.getReadyElement.textContent = "Get ready to race!";

    // Animationend terminate
    this.countElementBox.removeEventListener("animationend", () => {
      this.greenCircleElement.classList.remove("bg-green-500");
      this.greenCircleElement.classList.add("bg-slate-600");
      this.redCircleElement.classList.remove("bg-slate-600");
      this.redCircleElement.classList.add("bg-red-500");
      this.countElementBox.style.opacity = 1;
      this.countElementBox.style.visibility = "hidden";
    })

    // Bid timer terminate
    this.bidTimerStop();

    // Progress percentage terminate
    this.progressPercentageReset();

    // Input terminate
    this.textAreaElement.removeEventListener("input", this.checkInputBind);
  },
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
      text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
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
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },
    13: {
    text: "The best way to predict the future is to invent it.",
    },
    14: {
    text: "Happiness is not something ready made. It comes from your own actions.",
    },
    15: {
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    },
    16: {
    text: "The true test of character is not how much we know how to do, but how we behave when we don't know what to do.",
    },
    17: {
    text: "Believe you can and you're halfway there.",
    },
    18: {
    text: "The only person you are destined to become is the person you decide to be.",
    },
    19: {
    text: "Don't watch the clock; do what it does. Keep going.",
    },
    20: {
    text: "The best preparation for tomorrow is doing your best today.",
    },
    21: {
    text: "Be the change you wish to see in the world.",
    },
    22: {
    text: "You miss 100% of the shots you don't take.",
    },
    23: {
    text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    },
    24: {
    text: "The difference between ordinary and extraordinary is that little extra.",
    },
    25: {
    text: "It does not matter how slowly you go as long as you do not stop.",
    },
    26: {
    text: "It always seems impossible until it's done.",
    },
    27: {
    text: "Don't let yesterday take up too much of today.",
    },
    28: {
    text: "If you want to achieve greatness, stop asking for permission.",
    },
    29: {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    },
    30: {
    text: "If you're going through hell, keep going.",
    },
    31: {
    text: "If you want to lift yourself up, lift up someone else.",
    },
    32: {
    text: "The way to get started is to quit talking and begin doing.",
    },
    33: {
    text: "You are never too old to set another goal or to dream a new dream.",
    },
    34: {
    text: "Success usually comes to those who are too busy to be looking for it.",
    },
    35: {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    },
    36: {
    text: "Opportunities are usually disguised as hard work, so most people don't recognize them.",
    },
    37: {
    text: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do.",
    },
    38: {
    text: "Great things never came from comfort zones.",
    },
    39: {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    },
    40: {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    },
    41: {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    },
    42: {
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    },
    43: {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    44: {
    text: "Education is the most powerful weapon which you can use to change the world.",
    },
    45: {
    text: "Happiness is not something ready made. It comes from your own actions.",
    },
    46: {
    text: "The best way to predict the future is to create it.",
    },
    47: {
    text: "The way to get started is to quit talking and begin doing.",
    },
    48: {
    text: "You miss 100% of the shots you don't take.",
    },
    49: {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    },
    50: {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    },

  },
};

function enterGame() {
  typingGame.startGame();
}

function quitGame() {
  typingGame.quitGame();
}
