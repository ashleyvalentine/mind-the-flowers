const gameParameters = {
  bees: 0
  // isGameOver: false (maybe game state?)
}

class Board {
  constructor() {
    //constructor parameters for future width and flowerAmount to allow user to change difficulty
    this.width = 10
    this.boardSpaces = this.width ** 2
    this.flowerAmount = 20
    this.validSpacesAmount = this.boardSpaces - this.flowerAmount
    this.flowerSpaces = this.createSpaces('flower', this.flowerAmount)
    this.validSpaces = this.createSpaces('valid', this.validSpacesAmount)
  }

  createSpaces(spaceType, length) {
    //spaceType == 'flower' || 'valid; length == this.flowerAmount || this.validSpacesAmount
    let spaces = []
    for (let i = 0; i < length; i++) {
      spaces.push(spaceType)
    }
    return spaces
  }

  createRandomizedSpacesArray() {
    const randomizedSpaces = this.flowerSpaces
      .concat(this.validSpaces)
      .sort(() => Math.random() - 0.5)
    return randomizedSpaces
  }

  renderBoardSpaces() {
    const grid = document.querySelector('.grid')
    const board = []
    const randomizedSpaces = this.createRandomizedSpacesArray()
    for (let i = 0; i < this.boardSpaces; i++) {
      const square = document.createElement('div') //I think I want to make this into an object
      square.setAttribute('id', i)
      square.classList.add(randomizedSpaces[i])
      const tile = {
        square,
        id: square.id,
        class: square.className
      }
      grid.appendChild(tile['square'])
      board.push(tile)
    }
    return board
  }
}
