class Play {
  constructor() {
    this.bees = 0
  }

  handleClick(event) {
    const square = event.currentTarget
    const currentId = parseInt(square.id)
    const classType = square.className
    switch (classType) {
      case 'checked':
        break
      case 'flower':
        console.log('Game Over')
        break
      case 'valid':
        square.classList.add('checked')
        this.checkSquare(square, currentId)
        break
    }
  }

  checkSquare() {}
}
