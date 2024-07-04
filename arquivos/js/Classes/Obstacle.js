
class Obstacle {
	constructor({color, width, height, position, side}){
		this.color = color
		this.width = width
		this.height = height
		this.position = position
		this.velocity = {
			x: 0,
			y: 0
		}
		this.side = side

		if(this.side == 'bottom'){
			this.position.y -= this.height			
		}
	}

	draw(){
		ctx.fillStyle = this.color
		ctx.fillRect(
			this.position.x,
			this.position.y,
			this.width,
			this.height
		)
	}

	update(){
		this.draw()

		this.velocity.x = -5

		this.position.x += this.velocity.x
		this.position.y += this.velocity.y 
	}
}