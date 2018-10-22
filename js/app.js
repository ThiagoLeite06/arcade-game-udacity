// Enemies our player must avoid
class Enemy {
	constructor(x, y, speed) {
		this.x = x
		this.y = y 
		this.speed = speed
		this.sprite = 'images/enemy-1.png'
	}

	update(dt) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
		this.x += this.speed * dt

		if(this.x > 505) {
			this.x = -90
		}
		
	}

	// Draw the enemy on the screen, required method for game
	render(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
	constructor(x, y, speed) {
		this.x = x
		this.y = y
		this.speed = speed
		this.sprite = 'images/char-player.png'
	}

	update() {
	
	
	}

	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	
	handleInput(key) {
		switch (key) {
			case 'up':
				if(this.y > 127) {
					this.y -= 85
				}
				break;
			case 'left':
				if(this.x > 101) {
					this.x -= 100
				}
				break;
			case 'right':
				if(this.x < 419){
					this.x += 100
				}
				break;
			case 'down':
				if(this.y < 400) {
					this.y += 85
				}
				break;
		}
	}

	reset() {
		this.x = 220
		this.y = 390
	}

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [
	new Enemy(0, 305, Math.floor(Math.random() * 320)),
	new Enemy(110, 225, Math.floor(Math.random() * 320)),
	new Enemy(0, 145, Math.floor(Math.random() * 320))
]

const player = new Player(220, 383, 50)

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
