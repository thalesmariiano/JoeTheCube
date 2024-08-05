
const startSinglePlayer = document.querySelector('#startSinglePlayer')
const options = document.querySelector('#options')
const backToMenuOptions = document.querySelector('#backToMenuOptions')
const gravityRange = document.querySelector('#gravity-range')

const skins_button = document.querySelector('#skins_button')
const close_skins_modal = document.querySelector('#close_skins_modal')
const skins_modal = document.querySelector('#skins_modal')
const select_skin = document.querySelectorAll('.select_skin')
const select_acessorie = document.querySelectorAll('.select_acessorie')

const restartSinglePlayer = document.querySelector('#restartSinglePlayer')
const exitFromSinglePlayer = document.querySelector('#exitFromSinglePlayer')

startSinglePlayer.addEventListener('click', () => {
	init()
})

options.addEventListener('click', () => {
	showScreen('#options-screen')
})

backToMenuOptions.addEventListener('click', () => {
	showScreen('#start-screen')
})

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
		player.setSkin(JTC_skins[localStorage.getItem('JTC-skin').toLowerCase()])
		configSkinDisplay()
	})
	
})

select_acessorie.forEach(acessorieBtn => {
	acessorieBtn.addEventListener('click', () => {
		const acessorie = acessorieBtn.dataset.acessorie
		const prevAcessorieBtn = Array(...select_acessorie).find(btn => btn.classList.contains("acessorie-container-active"))

		if(prevAcessorieBtn){
			prevAcessorieBtn.classList.add('acessorie-container')
			prevAcessorieBtn.classList.remove('acessorie-container-active')
		}
		
		acessorieBtn.classList.remove('acessorie-container')
		acessorieBtn.classList.add('acessorie-container-active')

		localStorage.setItem('JTC-acessorie', acessorie)
		player.acessorie.switchAcessorie(localStorage.getItem('JTC-acessorie').toLowerCase())
	})
})

gravityRange.addEventListener('input', (e) => {
	const gravityLevelText = document.querySelector('#g-level')

	const dificultyLevel = {
		'0.1': 'Light',
		'0.2': 'Normal',
		'0.3': 'Little Heavy',
		'0.4': 'Heavy',
		'0.5': 'Very Heavy'
	}
	GRAVITY = parseFloat(e.target.value)
	gravityLevelText.innerHTML = dificultyLevel[e.target.value]
})


restartSinglePlayer.addEventListener('click', () => {
	restart()
})

exitFromSinglePlayer.addEventListener('click', () => {
	backToMenu()
})