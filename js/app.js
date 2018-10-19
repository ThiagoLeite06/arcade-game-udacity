class Characters {
	constructor(x, y, sprite) {
		this.x = x
		this.y = y
		this.sprite = sprite
	}

	reset() {
		console.log("Voltam todos do início")
	}
}

// Enemies our player must avoid
class Enemy extends Characters {
	constructor(x, y, sprite, speed) {
		super()
		this.x = x
		this.y = y 
		this.sprite = 'images/enemy-bug.png'
		this.speed = speed
	}

	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
		this.x = this.x * dt

	}

	// Draw the enemy on the screen, required method for game
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Characters {
	constructor(sprite = 'images/char-boy.png') {
		super(sprite)
		this.x = 202
		this.y = 400
		this.sprite = sprite
	}

	update() {

	}

	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	
	handleInput(key) {
		switch (key) {
			case 'up':
				console.log("foi pra cima")
				this.y -= 90
				break;
			case 'left':
				console.log("foi pra esquerda")
				this.x -= 100
				break;
			case 'right':
				console.log("foi pra direita")
				this.x += 100
				break;
			case 'down':
				console.log("foi pra baixo")
				this.y += 90
				break;
		}
	}

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = []
const player = new Player()
const inimigo1 = new Enemy(10, 20, null, 120)
inimigo1.update(10)


console.log(inimigo1)
console.log(player)





// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
