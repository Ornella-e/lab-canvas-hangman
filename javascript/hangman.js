class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord= "pickWord";
    this.letters= [];
    this.guessedLetters= "";
    this.errorsLeft=10; 
  }

  pickWord() {
    // ... your code goes here
  /* const wordsOfArray = words.values ();
   for (let value of wordsOfArray(Math.random().toString)){
     console.log (value)
   }*/
   
  console.log ("pickword");
   let randomWord = this.words [Math.floor(Math.random()*this.words.length)];
   return randomWord;
  }

  checkIfLetter(keyCode) {
    console.log ("ceckIfLetter");
    // ... your code goes here
    if(keyCode <=0){
      return true;
    }
    return false;
    
  }

  checkClickedLetters(letter) {
    // ... your code goes here
  for ( let letter = 0; letter >= this.words.length; i ++){
    return true;
  }
  return false;
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters = letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft;
    if (!this.words){
      letter.push(this.letters);
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0){
      return false;
    }
    return true;
  }

  checkWinner() {
    // ... your code goes here
    if (this.guessedLetters){
      return true;
    }
    return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     const hangmanCanvas = new HangmanCanvas(hangman.secretWord);
     hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  const key= event.key;
  if(key=== "start-game-button"){
  
  }
});
