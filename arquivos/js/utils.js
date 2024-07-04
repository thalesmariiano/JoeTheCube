
function spriteConverter(imgArray){
	if(Array.isArray(imgArray)){
		imgArray.forEach(spr => {
			const img = new Image()
			img.src = spr.sprite
			spr.sprite = img
		})
	}
}

function generateObstacles(){
	timer = setInterval(() => {
		const random = Math.floor(Math.random() * 2)

		if(random == 1){
			obstaclesArray.push(new Obstacle({
				color: 'green',
				width: 100,
				height: Math.floor(Math.random() * (300 - 200)) + 200,
				position: {
					x: innerWidth,
					y: 0
				}
			}))
		}else if(random == 0){
			obstaclesArray.push(new Obstacle({
				color: 'green',
				width: 100,
				height: Math.floor(Math.random() * (300 - 200)) + 200,
				position: {
					x: innerWidth,
					y: canvas.height
				},
				side: 'bottom'
			}))
		}
	}, 1500)
}

const getAngle = angle => Math.abs(player.angle) * Math.PI / 180 >= angle * Math.PI / 180
