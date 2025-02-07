
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = innerWidth
canvas.height = 500

const death_sound = new Audio('./arquivos/sounds/death_sound.wav')
const pass_obstacle_sound = new Audio('./arquivos/sounds/pass_obstacle.wav')

var timer = 0
var GRAVITY = 0.2
var gameOver = false

const obstaclesArray = []

const player = new Player({
	sprites: JTC_skins[localStorage.getItem('JTC-skin').toLowerCase()],
	color: 'red',
	width: 50,
	height: 50,
	position: {
		x: 200,
		y: 250
	}
})
player.acessorie = new Acessorie(JTC_acessories['head'])
player.acessorie.switchAcessorie(localStorage.getItem('JTC-acessorie').toLowerCase())

function render(){
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	player.update()

	obstaclesArray.forEach(obs => {
		obs.update()

		if(obs.canCollide){
			collider(player, obs, (collision) => {
				if(collision){
					player.switchSprite('hit')
					player.isDead = true
					death_sound.play()
				}
			})	
		}else{
			collider(player, obs, (collision) => {
				if(collision){
					if(!obs.collided){
						obs.collided = true
						player.points++

						player_hud_score.innerHTML = 'Score: ' + player.points

						if(player.points % 5 === 0){
							pass_obstacle_sound.play()
						}
					}
					return
				}
				obs.collided = false
			})
		}
	})
}

function loop(){
	if(!gameOver){
		window.requestAnimationFrame(loop)
	}else{
		clearInterval(timer)

		setTimeout(() => {
			showScreen('#death-screen')
			// gameOverScreen.classList.remove('hidden')	
			// hudScreen.classList.add('hidden')
		}, 500)
	}

	if(player.isDead){
		gameOver = true
	}

	render()
}

function init(){
	showScreen('#hud-screen')
	// startGameScreen.classList.add('hidden')
	// hudScreen.classList.remove('hidden')
	restartGame()
	generateObstacles()
	loop()	
}

function restart(){
	showScreen('#hud-screen')
	// gameOverScreen.classList.add('hidden')
	// hudScreen.classList.remove('hidden')
	restartGame()
	generateObstacles()
	loop()
}

function backToMenu(){
	showScreen('#start-screen')
	// startGameScreen.classList.remove('hidden')
	// gameOverScreen.classList.add('hidden')
	restartGame()
}
