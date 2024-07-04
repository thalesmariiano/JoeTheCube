
window.addEventListener('keydown', e => {
	if(e.code == 'Space'){
		if(player.position.y > 0){
			player.velocity.y = -5
		}
	}
})

window.addEventListener('mousedown', () => {
	if(player.position.y > 0){
		player.velocity.y = -5
	}
})