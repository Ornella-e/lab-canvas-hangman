class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext ("2d");
    this.secretWord = secretWord;
    console.log (this.secretWord);
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height); 
   this.drawLines();
  }

 drawLines() {
    // ... your code goes here
    for(let i=0; i< this.secretWord.length; i ++){
   this.context.fillRect(400 + i*80,700,50,5);
    };
    
  }

  writeCorrectLetter(index) {
   console.log ("word");
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(this.secretWord[index], 250, 50);
    
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(letter, 250, 50);
  //errorLeft
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    const x = 100; // x coordinate
const y = 75; // y coordinate
const radius = 50; // Arc radius
const startAngle = 0; // Starting point on circle
const endAngle = Math.PI*2; // End point on circle
    secretWord.forEach(errorsLeft => {
      ctx.beginPath();
      ctx.lineWidth=3;
      ctx.moveTo(50,350);
      ctx.lineTo(50,250);
      ctx.lineTo(250,75);
      
      ctx.arc(x, y, radius, startAngle, endAngle, true);
      ctx.moveTo(290,75);
      ctx.arc(250, 75, 40, 0, endAngle, true);
      ctx.stroke();
      
          });
  }

  gameOver() {
    // if the figure is complete and still are words missing from the secret word, game is over
  }

  winner() {
    // ... your code goes here
    if (this.secretWord === this.words){
      return src="images/awesome.png";
    }
  }
}
