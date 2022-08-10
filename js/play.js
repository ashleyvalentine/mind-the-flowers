class Play {
  constructor() {
    this.bees = 0
  }

  // countSurroundingFlowerSquares(square, currentId) {
  //   for (let i = 0; i < squares.length; i++) {
  //     const isLeftEdge = i % width === 0
  //     const isRightEdge = i % width === width - 1
  //     let total = 0

  //     if (squares[i].classList.contains('valid')) {
  //       if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('flower'))
  //         total++
  //       if (
  //         i > 9 &&
  //         !isRightEdge &&
  //         squares[i + 1 - width].classList.contains('flower')
  //       )
  //         total++
  //       if (i > 10 && squares[i - width].classList.contains('flower')) total++
  //       if (
  //         i > 11 &&
  //         !isLeftEdge &&
  //         squares[i - 1 - width].classList.contains('flower')
  //       )
  //         total++
  //       if (
  //         i < 98 &&
  //         !isRightEdge &&
  //         squares[i + 1].classList.contains('flower')
  //       )
  //         total++
  //       if (
  //         i < 90 &&
  //         !isLeftEdge &&
  //         squares[i - 1 + width].classList.contains('flower')
  //       )
  //         total++
  //       if (
  //         i < 88 &&
  //         !isRightEdge &&
  //         squares[i + 1 + width].classList.contains('flower')
  //       )
  //         total++
  //       if (i < 89 && squares[i + width].classList.contains('flower')) total++
  //       squares[i].setAttribute('flowerCount', total)
  //     }
  //   }
  // }

  checkSquare() {
    let hi = 'hi'
    return 'hi'
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
        this.checkSquare()
        break
    }
  }
}
