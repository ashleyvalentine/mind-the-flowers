const game = new Board()
const move = new Play()

game.renderBoardSpaces()

const validSpace = document.querySelectorAll('.valid').forEach((space) => {
  space.addEventListener('click', move.handleClick)
})
const flowerSpace = document.querySelectorAll('.flower').forEach((space) => {
  space.addEventListener('click', move.handleClick)
})

function click() {
  console.log('it is working')
}
