
const startSinglePlayer = document.querySelector('#startSinglePlayer')
const options = document.querySelector('#options')

const skins_button = document.querySelector('#skins_button')
const close_skins_modal = document.querySelector('#close_skins_modal')
const skins_modal = document.querySelector('#skins_modal')

const restartSinglePlayer = document.querySelector('#restartSinglePlayer')
const exitFromSinglePlayer = document.querySelector('#exitFromSinglePlayer')

startSinglePlayer.addEventListener('click', () => {
	init()
})

options.addEventListener('click', () => {console.log('options')})

skins_button.addEventListener('click', () => {
	skins_modal.classList.remove('hidden')
})

close_skins_modal.addEventListener('click', () => {
	skins_modal.classList.add('hidden')
})

restartSinglePlayer.addEventListener('click', () => {
	restart()
})

exitFromSinglePlayer.addEventListener('click', () => {
	backToMenu()
})