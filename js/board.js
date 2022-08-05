const gameParameters = {
  width: 10,
  flowerAmount: 20,
  squares: [],
  bees: 0
  // isGameOver: false (maybe game state?)
}

class Board {
  constructor() {
    this.width = 10
    this.boardSpaces = this.width ** 2
    this.flowerAmount = 20
  }

  //   createSpaces(spaceType) {
  //     for (i = 0; i < this.boardSpaces; )
  //   } thinking about refactoring by using a for loop

  createFlowerSpacesArray() {
    const flowerAmount = 20
    const flowerSpaces = Array(flowerAmount).fill('flower')
    return flowerSpaces
  }

  createValidSpacesArray() {
    const validSpaces = Array(this.boardSpaces - this.flowerAmount).fill(
      'valid'
    )
    return validSpaces
  }

  createGameArray() {
    const gameArray = this.createValidSpacesArray().concat(
      this.createFlowerSpacesArray()
    )
    return gameArray
  }

  createRandomizedGameSpacesArray() {
    const randomizedGameSpaces = this.createGameArray().sort(
      () => Math.random() - 0.5
    )
    return randomizedGameSpaces
  }
}

let game = new Board()
console.log(game.createRandomizedGameSpacesArray())
