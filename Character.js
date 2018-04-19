class Character {
	constructor(letter, locationVec, scale) {
		this.scale = scale;
		this.location = locationVec.copy();
		this.tracers = []; //array of tracers, x, y, current target point, current path ID
		this.letter = letter;
		//vertices properties
		this.vertices = [4];

		this.canvas = createGraphics(200, 250);
		this.canvas.pixelDensity(1);
		this.canvas.noSmooth();
		this.canvas.background(0x00);

		for (let i = 0; i < 4; i++) {
			this.vertices[i] = new Vertex(letter[i][0]*PI, letter[i][1], this.scale, letter[i][2]);
		}
		for (let i = 0; i < 15*this.scale; i++) {
			let originVert = floor(random(4));
			this.tracers.push(new Tracer(this, (originVert+1)%4, this.vertices[originVert].location.copy().rotate(random(-PI,PI))));
		}
	}
	setLetter(letter) {
		this.letter = letter; //TODO: still no interpolation to use yo
	}

	updateCanvas() {
		this.canvas.fill(0x00, 5); //5 leaves some cool ghosting due to an opacity quirk
		this.canvas.rect(0,0,this.canvas.width,this.canvas.height);
		this.canvas.loadPixels();
		let pointLocation;
		for (let j = 0, m = this.tracers.length; j < m; j++) {
			this.tracers[j].update();
			pointLocation = this.tracers[j].location.copy().add(100, 125);
			let address = round(pointLocation.x)*4 + round(pointLocation.y)*4*this.canvas.width;

			let c = this.tracers[j].colour;
			if (c === 0) {
				this.canvas.pixels[address] = 0xFF;        //r
			} else if (c === 1) {
				this.canvas.pixels[address + 1] = 0xFF;    //g
			} else {
				this.canvas.pixels[address + 2] = 0xFF;    //b
			}
		}
		this.canvas.updatePixels();
	}

	drawCanvas() {
		image(this.canvas, 0, 0, 100, 200);
	}
}

class Vertex {
	constructor(angle, magnitude, scale, turnRate) {
		this.location = createVector(magnitude*scale,0).rotate(angle);
		this.turnRate = turnRate;
	}
	setValues(angle, magnitude, scale, turnRate) {
		this.location = createVector(magnitude*scale,0).rotate(angle);
		this.turnRate = turnRate;
	}

}

class Tracer {
	constructor(character, targetIndex, location) {
		this.parentCharacter = character;
		this.targetIndex = targetIndex;
		this.location = location;
		this.targetPosition = createVector(0,0);
		this.changeTarget(this.targetIndex);
		this.velocity = createVector(0,random(0.8,1.2));
		this.colour = floor(random(3));
	}
	update() {
		this.location.add(this.velocity);

		let dir = this.targetPosition.copy().sub(this.location).angleBetween(this.velocity);
		this.velocity.rotate(dir/PI*this.parentCharacter.vertices[this.targetIndex].turnRate);


		if (this.location.dist(this.targetPosition)
			< this.parentCharacter.scale * (0.2/this.parentCharacter.vertices[this.targetIndex].turnRate)) {
			this.changeTarget(this.targetIndex+1);
		}

	}

	changeTarget(n) {
		this.targetIndex = n%4;
		this.targetPosition.set(this.parentCharacter.vertices[this.targetIndex].location.copy())
	}
}