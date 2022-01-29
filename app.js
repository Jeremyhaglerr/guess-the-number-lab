console.log('guess the number lab')
;const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    //generates a random between the smallest number and biggest number allowed
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      //pushes guess to prevGuess while it doesn't equal the secretNum and display the result of the player's guess
      this.prevGuesses.push(this.getGuess())
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length -1]!== this.secretNum)
  },
  getGuess: function() {
    let guess = null
    do {
      //displays a prompt message while the guess is: not a number, smaller than smallestNum, bigger than biggestNum
      guess=parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)) 
    } while (isNaN(guess) || guess<this.smallestNum || guess>this.biggestNum)
    return guess
  },
  set
  render: function(){
    let message =null
    //if the player's guess is correct then display a congratulatory message
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum){
    message=`Congrats! You guessed the number in ${prevGuesses.length} ${this.prevGuesses.length === 1?'guess':'guesses'}!}`
    } else {
    message=`Sorry, your guess is too ${this.prevGuesses[this.prevGuesses.length -1] < this.secretNum ? 'low' : 'high'}. The previous guesses were: ${this.prevGuesses.join(', ')} `
    }
  alert(message)
  }, 
  }
  game.play()
// const game = {
//   title: "Guess the Number!",
//   biggestNum: null,
//   smallestNum: null,
//   secretNum: null,

//   // Initialize prevGuesses as an array
//   prevGuesses: [],
//   play: function () {
//     // MORE BONUS: call the setRange method set the smallestNum and biggestNum
//     this.setRange()
//     // Get the secretNum from the range
//     this.secretNum =
//       Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
//       this.smallestNum;
//     // We want to run the game loop at least once, so a do...while loop works well here
//     do {
//       // Get the player's valid guess and push it into the prevGuesses array
//       this.prevGuesses.push(this.getGuess());
//       // BONUS: Call the resetRange method, reset the range after a guess is made
//       this.resetRange();
//       // Call the render method and render the result of the player's guess
//       this.render();
//       // If the player's last guess was not the secretNum, do it all again!
//     } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
//   },
//   getGuess: function () {
//     // initialize a guess variable
//     let guess;

//     do {
//       // Assign guess as an integer value parsed from the user's input to the prompt
//       guess = parseInt(
//         prompt(
//           `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`
//         )
//       );
//     } while ( // While... 
//       isNaN(guess) || // the guess isn't a number or...
//       guess < this.smallestNum || // the guess is less than smallestNum or...
//       guess > this.biggestNum // the guess is greater than biggestNum
//     )

//     // After we have exited the loop return the guess
//     return guess;
//   },
//   setRange: function() {

//     do {
//       // Assign this.smallestNum as an integer value parsed from the user's input to the prompt
//       this.smallestNum = parseInt(
//         prompt(
//           `Enter a number - this will be the low end of the range.`
//         )
//       );
//     } while (isNaN(this.smallestNum)) //while this.smallestNum isn't a number

//     do {
//       // Assign this.highestNum as an integer value parsed from the user's input to the prompt
//       this.biggestNum = parseInt(
//         prompt(
//           `Enter a number that is ${this.smallestNum + 2} or more. This will be the high end of the range.`
//         )
//       );
//     } while ( // While... 
//       isNaN(this.biggestNum) || // this.highestNum isn't a number
//       this.biggestNum < this.smallestNum + 2 // this.highestNum isn't larger than this.smallestNum + 2 (to allow space for this.secretNum to exist) 
//     )
//   },
//   // BONUS
//   resetRange: function () {
//     // If the last number the player entered is more than secretNum
//     if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
//       // set the biggestNum equal to the player's last guess
//       this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1];
//     } else {
//       // otherwise set the smallestNum equal to the player's last guess
//       this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
//     }
//   },
//   render: function () {
//     // initialize a msg variable
//     let msg;

//     // If the player has guessed the secretNum..
//     if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
//       // Assign the victory message to the msg variable
//       msg = `Congrats! You guessed the number in ${this.prevGuesses.length} ${
//         this.prevGuesses.length > 1 ? "guesses" : "guess"
//       }!`;
//     } else {
//       // otherwise assign the too high/low message to the msg variable
//       msg = `Your guess is too ${
//         this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum
//           ? "high"
//           : "low"
//       }\nPrevious guesses: ${this.prevGuesses.join(", ")}`;
//     }

//     // show the message in an alert dialog box
//     alert(msg);
//   },
// };
// console.log(game.secretNum)
// // call game.play and start the game!
// game.play();