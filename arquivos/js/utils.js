
function spriteConverter(imgArray){
	if(Array.isArray(imgArray)){
		imgArray.forEach(spr => {
			const img = new Image()
			img.src = spr.image
			spr.image = img
		})
	}
}

function generateObstacles(){
	timer = setInterval(() => {
		const topObstacle = Math.floor(Math.random() * (320 - 50)) + 50
		const emptySpace = Math.floor(Math.random() * (180 - 150)) + 150

		obstaclesArray.push(new Obstacle({
			color: 'green',
			width: 80,
			height: topObstacle,
			position: {
				x: innerWidth,
				y: 0
			},
			collision: true
		}))

		obstaclesArray.push(new Obstacle({
			color: 'transparent',
			width: 80,
			height: emptySpace,
			position: {
				x: innerWidth,
				y: topObstacle
			},
			collision: false
		}))

		obstaclesArray.push(new Obstacle({
			color: 'green',
			width: 80,
			height: 500,
			position: {
				x: innerWidth,
				y: topObstacle + emptySpace
			},
			collision: true
		}))
		
	}, 1100)
}

const getAngle = angle => Math.abs(player.angle) * Math.PI / 180 >= angle * Math.PI / 180

function configSkinDisplay(){
	const skin_name = document.querySelector('#skin_name')
	const skin_display = document.querySelector('#skin_display')
	const skinName = localStorage.getItem('JTC-skin')

	skin_name.innerHTML = skinName
	skin_display.src = `./arquivos/images/cube${skinName}_128x.png`

}
