
class Acessorie {
    constructor(sprites){
        this.sprites = sprites
        this.sprite = null
    }

    switchAcessorie(acessorieName){
        this.sprite = this.sprites.find(acessorie => acessorie.name === acessorieName)
    }

    draw(){
        ctx.drawImage(
			this.sprite.image, 
			player.position.x - 25, player.position.y - 25, 
			this.sprite.image.width,
			this.sprite.image.height
		)
    }

    update(){
        this.draw()
    }
}