const game = new Board()
let gameOver = false

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

//left click event
function handleClick(event) {
  if (gameOver === true) return
  const element = event.currentTarget
  const classType = element.className
  const position = element.getAttribute('position').split(',')
  switch (classType) {
    case 'checked':
      break
    case 'flower':
      gameOver = true
      revealBoard()
      break
    case 'valid':
      checkSquare(element, position)
      break
  }
}

//checks square for surrounding tiles, flower count, then checks those squares
function checkSquare(element, position) {
  if (element.classList.contains('flower')) return
  if (element.classList.contains('checked')) return

  const nearByTiles = getNearByTiles(board, position)
  const flowerCount = getFlowerCount(nearByTiles)

  if (flowerCount === 0) {
    for (tile of nearByTiles) {
      const x = tile.x
      const y = tile.y
      const position = [x, y]
      checkSquare(tile.element, position)
      element.classList.add('checked')
    }
  } else {
    element.textContent = flowerCount
    element.classList.add('checked')
  }
}

//create array of surrounding tiles of clicked tile
function getNearByTiles(board, position) {
  const nearByTiles = []
  const x = Number(position[0])
  const y = Number(position[1])
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const tile = board[x + i]?.[y + j]
      if (tile) {
        nearByTiles.push(tile)
      }
    }
  }
  return nearByTiles
}

//checks nearByTiles array for how many are flower tiles
function getFlowerCount(nearByTiles) {
  const tiles = nearByTiles
  let flowers = []
  for (tile of tiles) {
    if (tile.flower) {
      flowers.push(tile)
    }
  }
  return flowers.length
}

function revealBoard(board) {
  const tiles = document.querySelectorAll('div')
  tiles.forEach((tile) => {
    if (tile.classList.contains('valid')) {
      tile.textContent = ''
      tile.style.backgroundColor = 'palegreen'
    } else if (tile.classList.contains('flower')) {
      tile.style.backgroundColor = 'pink'
    }
  })
}
//check for win
//check for lose - alert of loss
//reveal all tiles on lose
