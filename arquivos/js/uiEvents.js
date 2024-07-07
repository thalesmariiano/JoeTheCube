
const startSinglePlayer = document.querySelector('#startSinglePlayer')
const options = document.querySelector('#options')
const skins_button = document.querySelector('#skins_button')

const restartSinglePlayer = document.querySelector('#restartSinglePlayer')
const exitFromSinglePlayer = document.querySelector('#exitFromSinglePlayer')

startSinglePlayer.addEventListener('click', () => {
	init()
})

options.addEventListener('click', () => {console.log('options')})
skins_button.addEventListener('click', () => {console.log('skins_button')})

restartSinglePlayer.addEventListener('click', () => {
	restart()
})

exitFromSinglePlayer.addEventListener('click', () => {
	backToMenu()
})