
class Player {
	constructor({sprites, color, width, height, position}){
		this.sprites = sprites
		this.color = color
		this.width = width
		this.height = height
		this.position = position
		this.velocity = {
			x: 0,
			y: 0
		}
		this.sprite = {}
		this.angle = 0
		this.points = 0
		this.isDead = false
	}

	switchSprite(spriteName){
		this.sprite = this.sprites.find(s => s.name === spriteName)
	}

	setSkin(skins){
		this.sprites = skins
	}

	draw(){
		if(this.sprite){
			ctx.drawImage(
			this.sprite.image, 
			0, 0, 
			this.sprite.image.width, 
			this.sprite.image.height, 
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

	restart(){
		player.switchSprite('looking_forward')
		player.position.y = 250
		player.angle = 0
		player.isDead = false
		player.points = 0
	}

	update(){
		this.draw()

		if(this.position.y + this.height < canvas.height){
			this.angle += this.velocity.y				
		}

		if(this.position.y + this.height > canvas.height){
			this.switchSprite('hit')
			this.velocity.y = 0
			this.isDead = true
			death_sound.play()
		}

		this.velocity.y += GRAVITY
		this.position.y += this.velocity.y
	}
}