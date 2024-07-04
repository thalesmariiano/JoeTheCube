
class Player {
	constructor({sprite, color, width, height, position}){
		this.sprite = sprite
		this.color = color
		this.width = width
		this.height = height
		this.position = position
		this.velocity = {
			x: 0,
			y: 0
		}
		this.angle = 0
		this.isDead = false
	}

	draw(){
		if(this.sprite){
			ctx.drawImage(
			this.sprite, 
			0, 
			0, 
			this.sprite.width, 
			this.sprite.width, 
			this.position.x, 
			this.position.y, 
			this.width, 
			this.height
		)
		}else{
			ctx.fillStyle = this.color
			ctx.fillRect(
				this.position.x,
				this.position.y,
				this.width,
				this.height
			) 
		}
		
	}

	update(){
		this.draw()

		if(this.position.y + this.height < canvas.height){
			this.angle += this.velocity.y				
		}

		if(this.position.y + this.height > canvas.height){
			this.sprite = joeSprites[2].sprite
			this.velocity.y = 0
			this.isDead = true
		}

		this.velocity.y += GRAVITY
		this.position.y += this.velocity.y
	}
}