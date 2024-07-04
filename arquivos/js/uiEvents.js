
const startSinglePlayer = document.querySelector('#startSinglePlayer')
const options = document.querySelector('#options')
const skins = document.querySelector('#skins')

const restartSinglePlayer = document.querySelector('#restartSinglePlayer')
const exitFromSinglePlayer = document.querySelector('#exitFromSinglePlayer')

startSinglePlayer.addEventListener('click', () => {
	init()
})

options.addEventListener('click', () => {console.log('options')})
skins.addEventListener('click', () => {console.log('skins')})

restartSinglePlayer.addEventListener('click', () => {
	restart()
})

exitFromSinglePlayer.addEventListener('click', () => {
	backToMenu()
})