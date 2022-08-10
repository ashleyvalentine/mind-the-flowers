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

  /*creates an array of spaces according to spaceType == 'flower' || 'valid'; length == this.flowerAmount || this.validSpacesAmount*/
  createSpaces(spaceType, length) {
    let spaces = []
    for (let i = 0; i < length; i++) {
      spaces.push(spaceType)
    }
    return spaces
  }

  /*takes the two arrays of valid or flower spaces, combines and randomizes them*/
  createRandomizedSpacesArray() {
    const randomizedSpaces = this.flowerSpaces
      .concat(this.validSpaces)
      .sort(() => Math.random() - 0.5)
    return randomizedSpaces
  }

  /*returns board array filled with each tile as an object, including it's class as determined by createRandomizedSpacesArray() and a unique numerical Id*/
  createBoard() {
    const board = []
    const randomizedSpaces = this.createRandomizedSpacesArray()
    for (let i = 0; i < this.boardSpaces; i++) {
      const element = document.createElement('div')
      element.setAttribute('id', i)
      element.classList.add(randomizedSpaces[i])
      const tile = {
        element,
        id: element.id,
        class: element.className
      }
      board.push(tile)
    }
    return board
  }
}
