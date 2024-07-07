
const startGameScreen = document.querySelector('#startGame-Screen')
const gameOverScreen = document.querySelector('#gameOver-Screen')

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
ctx.imageSmoothingEnabled = false

canvas.width = innerWidth
canvas.height = 500

var timer = 0
const GRAVITY = 0.2
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

function render(){
	ctx.clearRect(0, 0, canvas.width, canvas.height)

	ctx.save()

	const centerX = player.position.x + player.width/2
	const centerY = player.position.y + player.height/2

	ctx.translate(centerX, centerY)
	ctx.rotate(player.angle * Math.PI / 180)
	ctx.translate(-centerX, -centerY)

	player.update()

	if(getAngle(360)){
		player.angle = 0
	}

	if(!player.isDead){
		if(!getAngle(90)) player.switchSprite('looking_forward')	
		else player.switchSprite('looking_back')
	}
	
	ctx.restore()

	obstaclesArray.forEach(obs => {
		obs.update()

		if(obs.collision){
			if(player.position.x + player.width >= obs.position.x && obs.position.x + obs.width >= player.position.x &&
		   	player.position.y + player.height >= obs.position.y && obs.position.y + obs.height >= player.position.y)
			{
				player.switchSprite('hit')
				player.isDead = true
		    }
		}
		

	})

}

function loop(){
	if(!gameOver){
		window.requestAnimationFrame(loop)
	}else{
		gameOverScreen.classList.remove('hidden')	
		clearInterval(timer)
	}

	if(player.isDead){
		gameOver = true
	}

	render()
}

function init(){
	startGameScreen.classList.add('hidden')
	generateObstacles()

	player.position.y = 250
	player.angle = 0
	player.switchSprite('looking_forward')
	obstaclesArray.length = 0
	gameOverScreen.classList.add('hidden')
	gameOver = false
	player.isDead = false

	loop()	
}

function restart(){
	generateObstacles()

	player.position.y = 250
	player.angle = 0
	player.switchSprite('looking_forward')
	obstaclesArray.length = 0
	gameOverScreen.classList.add('hidden')
	gameOver = false
	player.isDead = false
	loop()
}

function backToMenu(){
	gameOverScreen.classList.add('hidden')
	startGameScreen.classList.remove('hidden')
	obstaclesArray.length = 0
}
