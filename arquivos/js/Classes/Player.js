
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
		this.sprite = null
		this.acessorie = null
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
		const centerX = player.position.x + player.width/2
		const centerY = player.position.y + player.height/2

		ctx.save()

		ctx.translate(centerX, centerY)
		ctx.rotate(player.angle * Math.PI / 180)
		ctx.translate(-centerX, -centerY)

		this.draw()

		if(this.acessorie.sprite){
			this.acessorie.update()
		}

		ctx.restore()

		if(!this.isDead){
			if(!getAngle(this.angle, 90)) this.switchSprite('looking_forward')	
			else this.switchSprite('looking_back')
		}

		if(getAngle(this.angle, 340)){
			this.angle = 20
		}

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