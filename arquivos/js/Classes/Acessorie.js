
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
			player.position.x - 30, player.position.y - 25, 
			this.sprite.image.width + 8,
			this.sprite.image.height + 8
		)
    }

    update(){
        this.draw()
    }
}