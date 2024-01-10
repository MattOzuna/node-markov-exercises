/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = new Map();
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    
    for (let i = 0; i < this.words.length; i++){
      this.chains.set(this.words[i], [])
    }
    for (let i = 0; i < this.words.length; i++){
      if (this.words[i+1]){
        this.chains.get(this.words[i]).push(this.words[i+1])
      } else {
        this.chains.get(this.words[i]).push(null)
      }
    }
  }

//I was using this random choice a lot so I made it a function
  choice(arr){
    return arr[Math.floor(Math.random()*arr.length)]
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let result = []
    let keys = Array.from(this.chains.keys())
    let word = this.choice(keys)

    while (result.length < numWords && word !== null){
      result.push(word)
      let newWordArr = this.chains.get(word)
      word = this.choice(newWordArr)
    }
    return result.join(' ')
  }
}

module.exports = { MarkovMachine }