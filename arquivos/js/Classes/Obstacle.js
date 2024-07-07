
class Obstacle {
	constructor({color, width, height, position, collision}){
		this.color = color
		this.width = width
		this.height = height
		this.position = position
		this.collision = collision
		this.velocity = {
			x: -5,
			y: 0
		}
		this.collided = false
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

		this.position.x += this.velocity.x
		this.position.y += this.velocity.y 
	}
}