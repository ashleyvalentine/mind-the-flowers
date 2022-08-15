class Board {
  constructor() {
    //constructor parameters for future width and flowerAmount to allow user to change difficulty
    this.width = 10
    this.boardSpaces = this.width ** 2
    this.flowerAmount = 20
  }

  //function to randomly assign flower positions
  getFLowerPositions() {
    const flowerPositions = []
    let position = {}
    let x
    let y
    while (flowerPositions.length < this.flowerAmount) {
      x = Math.floor(Math.random() * this.width)
      y = Math.floor(Math.random() * this.width)
      position = {
        x,
        y
      }
      if (
        !flowerPositions.some((tile) => {
          tile.x === x && tile.y === y
        })
      ) {
        flowerPositions.push(position)
      }
    }
    return flowerPositions
  }

  /*returns board array filled with each tile as an object, including it's class as determined by createRandomizedSpacesArray() and a unique numerical Id*/
  createBoard() {
    const board = []
    const flowerPositions = this.getFLowerPositions()
    console.log(flowerPositions)
    for (let x = 0; x < this.width; x++) {
      const row = []
      board.push(row)
      for (let y = 0; y < this.width; y++) {
        const element = document.createElement('div')
        const flower = flowerPositions.some((tile) => {
          return tile.x === x && tile.y === y
        })
        const tile = {
          element,
          x,
          y,
          flower
        }
        row.push(tile)
      }
    }
    return board
  }
}
