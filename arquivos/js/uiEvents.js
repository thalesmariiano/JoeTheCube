
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
		const prevSkinBtn = Array(...select_skin).find(btn => btn.classList.contains("skin-container-active"))

		if(prevSkinBtn){
			prevSkinBtn.classList.add('skin-container')
			prevSkinBtn.classList.remove('skin-container-active')
		}
		
		skinBtn.classList.remove('skin-container')
		skinBtn.classList.add('skin-container-active')

		localStorage.setItem('JTC-skin', skin)
		player.setSkin(JTC_skins[skin.toLowerCase()])
		configSkinDisplay()
	})
	
})

restartSinglePlayer.addEventListener('click', () => {
	restart()
})

exitFromSinglePlayer.addEventListener('click', () => {
	backToMenu()
})