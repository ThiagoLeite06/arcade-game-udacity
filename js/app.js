class Gamer {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

// Enemies our player must avoid

class Enemy extends Gamer {
	constructor(x, y, speed, sprite) {
		super(x, y)
		this.x = x
		this.y = y 
		this.speed = speed
		this.sprite = sprite
	}

	update(dt, playerPositionX = player.x, playerPositionY = player.y) {
		// You should multiply any movement by the dt parameter
		// which will ensure the game runs at the same speed for
		// all computers.
		this.x += this.speed * dt
		const fieldWidth = 505
		const positionEnemyStart = -90

		if (this.x > fieldWidth) {
			this.x = positionEnemyStart
			this.speed = Math.floor(Math.random() * 256 + 100)
		}

		if (Math.abs(this.x - playerPositionX) < 50 && Math.abs(this.y - playerPositionY) < 20) {
			alert("Ops")
			player.reset()
			this.reset()
			player.fail()
		};
		
	}

	reset() {
		this.x = positionEnemyStart
	}

	// Draw the enemy on the screen, required method for game

	
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player extends Gamer {
	constructor(x, y) {
		super(x, y)
		this.x = x
		this.y = y
		this.sprite = 'images/char-player.png',
		this.score = 0
	}

	update() {
	
	
	}

	handleInput(key) {
		switch (key) {
			case 'up':
				if(this.y > 127) {
					this.y -= 85
				} else {
					this.success()
					this.reset()
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

	success() {
		this.score = this.score + 100
		const painel = document.getElementById("score")
		painel.innerHTML = this.score
	}

	fail() {
		this.score = this.score - 100
		const painel = document.getElementById("score")
		painel.innerHTML = this.score
	}

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const getRandomSpeed = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min

}

const allEnemies = [
	new Enemy(0, 305, getRandomSpeed(150, 500), 'images/enemy1.png'),
	new Enemy(110, 225, getRandomSpeed(150, 500), 'images/enemy2.png'),
	new Enemy(0, 145, getRandomSpeed(150, 500), 'images/enemy3.png')
]

const player = new Player(220, 383)

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
