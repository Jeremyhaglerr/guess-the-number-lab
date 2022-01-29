console.log('guess the number lab')
;const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.setGuessRange()
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
      guess=parseInt(promptMessage(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)) 
    } while (isNaN(guess) || guess<this.smallestNum || guess>this.biggestNum)
    return guess
  },
  setGuessRange: function () {
    do{
      //prompts the user to set a low and high value to establish the range of the secretNum
      this.smallestNum=parseInt(promptlower(`Enter a number to be the lowest possible guess`))
    } while (isNaN(this.smallestNum))
    do{
      this.biggestNum=parseInt(promtBigger(`Enter a number that is ${this.smallestNum + 2}to be the largest possible guess`))
    }while (isNaN(this.biggestNum) || this.biggestNum < this.smallestNum + 2)
  },
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
 
