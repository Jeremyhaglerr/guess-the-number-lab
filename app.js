console.log('guess the number lab')
const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.setGuessRange()
    //generates a random between the smallest number and biggest number allowed
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    //pushes guess to prevGuess while it doesn't equal the secretNum
    do {
      this.prevGuesses.push(this.getGuess())
      this.updateGuessRange() 
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length -1]!== this.secretNum)
  },

  //displays a prompt message to enter a guess while the guess is: not a number, smaller than smallestNum, bigger than biggestNum
  getGuess: function() {
    let guess = null
    do {
      guess=parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)) 
    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
    return guess
  },

  //prompts the user to set a low and high value to establish the range of the secretNum
  setGuessRange: function() {
    do{
      this.smallestNum = parseInt(prompt(`Enter a number to be the lowest possible guess`))
    } while (isNaN(this.smallestNum))
    do{
      this.biggestNum = parseInt(prompt(`Enter a number that is ${this.smallestNum + 2} or more to be the largest possible guess`))
    }while (isNaN(this.biggestNum) || this.biggestNum < this.smallestNum + 2)
  },

//updates the smallestNum and biggestNum to the user's last guess if it was higher else lower than secretNum
  updateGuessRange: function() {
    if (this.prevGuesses[this.prevGuesses.length-1]>this.secretNum){
      this.biggestNum = this.prevGuesses[this.prevGuesses.length-1];
    } else {
      this.smallestNum = this.prevGuesses[this.prevGuesses.length-1]
    }
  },

  //if the player's guess is correct then display a congratulatory message if  else display low or high message and prompt again
  render: function(){
    let message =null
    if (this.prevGuesses[this.prevGuesses.length-1] === this.secretNum){
    message=`Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length === 1?'guess':'guesses'}!}`
    } else {
    message=`Sorry, your guess is too ${this.prevGuesses[this.prevGuesses.length -1] < this.secretNum ? 'low' : 'high'}. The previous guesses were: ${this.prevGuesses.join(', ')} `
    }
  alert(message)
  }, 
}
game.play()
console.log(game.secretNum);