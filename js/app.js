const game = new Board()
gameOver = false

const board = game.createBoard()
console.log(board)

const grid = document.querySelector('.grid')

board.forEach((tile) => {
  grid.appendChild(tile.element)
  tile.element.addEventListener('click', handleClick)
  tile.element.addEventListener('contextmenu', addPollinator)
})

/*adds a bee to flag possible squares that contain flowers on right click */
function addPollinator(event) {
  event.preventDefault()
  if (gameOver === true) return
  const element = event.currentTarget
  if (element.classList.contains('pollinator')) {
    element.classList.remove('pollinator')
    element.innerText = ''
  } else {
    element.classList.add('pollinator')
    element.innerText = '🐝'
  }
}

function checkSquare() {
  console.log('it worked')
}

function handleClick(event) {
  if (gameOver === true) return
  const element = event.currentTarget
  const currentId = parseInt(element.id)
  const classType = element.className
  switch (classType) {
    case 'checked':
      break
    case 'flower':
      gameOver = true
      break
    case 'valid':
      element.classList.add('checked')
      checkSquare()
      break
  }
}
