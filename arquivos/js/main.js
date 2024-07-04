
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

const joeSprites = [
	{	
		name: 'looking_forward',
		sprite: 'arquivos/images/sprites/joe/cubeJoe.png'
	},
	{
		name: 'looking_back',
		sprite: 'arquivos/images/sprites/joe/cubeJoe_lookingBack.png'
	},
	{
		name: 'hit',
		sprite: 'arquivos/images/sprites/joe/cubeJoe_hit.png'
	}
]

spriteConverter(joeSprites)

const player = new Player({
	sprite: joeSprites[0].sprite,
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
		if(getAngle(90)){
			player.sprite = joeSprites[1].sprite
		}else{
			player.sprite = joeSprites[0].sprite
		}
	}
	
	ctx.restore()

	obstaclesArray.forEach(ob => {
		ob.update()

		if(player.position.x + player.width >= ob.position.x && 
	    ob.position.x + ob.width >= player.position.x &&
	    player.position.y + player.height >= ob.position.y &&
	    ob.position.y + ob.height >= player.position.y){
			player.sprite = joeSprites[2].sprite
			player.isDead = true
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
	joeSprites[0].sprite
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
	joeSprites[0].sprite
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
