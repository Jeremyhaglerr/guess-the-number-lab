console.log('guess the number lab')
;const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],/*1. Add a `prevGuesses` property to the `game` object initialized to an empty array.*/
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.prevGuesses.push(this.getGuess())
    } while (this.prevGuesses[this.prevGuesses.length -1]!== this.secretNum)
  },
  getGuess: function() {
    let guess = null
    do {
      guess=parseInt(promptMessage(`Enter a guess between ${smallestNum} and ${biggestNum}`)) 
    } while (isNaN(guess) || guess<this.smallestNum || guess>this.biggestNum)
    return guess
  }
}