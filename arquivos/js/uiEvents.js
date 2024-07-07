
const startSinglePlayer = document.querySelector('#startSinglePlayer')
const options = document.querySelector('#options')

const skins_button = document.querySelector('#skins_button')
const close_skins_modal = document.querySelector('#close_skins_modal')
const skins_modal = document.querySelector('#skins_modal')
const select_skin = document.querySelectorAll('.select_skin')

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

select_skin.forEach(skinBtn => {
	skinBtn.addEventListener('click', () => {
		const skin = skinBtn.dataset.skin
		localStorage.setItem('JTC-skin', skin)
		player.setSkin(JTC_skins[skin.toLowerCase()])
		configSkinDisplay(skin_name, skin_display)
	})
	
})

restartSinglePlayer.addEventListener('click', () => {
	restart()
})

exitFromSinglePlayer.addEventListener('click', () => {
	backToMenu()
})