const game = new Board()
gameOver = false

const board = game.createBoard()
console.log(board)

const grid = document.querySelector('.grid')

//render board with appropriate classes for flower/valid tiles
board.forEach((row) => {
  row.forEach((tile) => {
    grid.appendChild(tile.element)
    if (tile.flower) {
      tile.element.classList.add('flower')
    } else {
      tile.element.classList.add('valid')
    }
    tile.element.setAttribute('position', `${tile.x}, ${tile.y}`)
    tile.element.addEventListener('click', handleClick)
    tile.element.addEventListener('contextmenu', addPollinator)
  })
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

function checkSquare(board, position) {
  const nearbyTiles = []
  x = Number(position[0])
  y = Number(position[1])
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const tile = board[x + i]?.[y + j]
      if (tile) {
        nearbyTiles.push(tile)
      }
    }
  }
  console.log(nearbyTiles)
}

//left click event
function handleClick(event) {
  if (gameOver === true) return
  const element = event.currentTarget
  console.log(element)
  const classType = element.className
  const position = element.getAttribute('position').split(',')
  switch (classType) {
    case 'checked':
      break
    case 'flower':
      gameOver = true
      break
    case 'valid':
      element.classList.add('checked')
      checkSquare(board, position)
      break
  }
}
