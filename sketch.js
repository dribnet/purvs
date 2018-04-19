let main_canvas = null;

const canvasWidth = 960;
const canvasHeight = 500;

let characters = [];

function setup() {
	// create the drawing canvas, save the canvas element
	main_canvas = createCanvas(canvasWidth, canvasHeight);
	main_canvas.parent('canvasContainer');

	pixelDensity(1); //this makes the pixel stuff work consistently!!
	noSmooth();

	background(0x00);

	characters.push(new Character("7", createVector(width/4, height/2), 10));
	characters.push(new Character("8", createVector(width/2, height/2), 10));
	characters.push(new Character("9", createVector(width/4*3, height/2), 10));

	print("done");
}


const colorFront = [207, 222, 227];
const colorBack = [29, 42, 46];


function draw() {
	fill(0x00, 5); //5 leaves some cool ghosting due to an opacity quirk
	rect(0,0,width,height);
translate(width/2, 0);
	loadPixels();
	let pointLocation;
	for (let i = 0, l = characters.length; i < l; i++) {
		for (let j = 0, m = characters[i].tracers.length; j < m; j++) {
			characters[i].tracers[j].update();
			pointLocation = characters[i].tracers[j].location.copy().add(characters[i].location);
			let address = round(pointLocation.x)*4 + round(pointLocation.y)*width*4;

			let c = characters[i].tracers[j].colour;
			if (c === 0) {
				pixels[address] = 0xFF;        //r
			} else if (c === 1) {
				pixels[address + 1] = 0xFF;    //g
			} else {
				pixels[address + 2] = 0xFF;    //b
			}
		}

	}
	updatePixels();

	//text("FPS: "+floor(frameRate()), width/2, 20);
}

function keyTyped() {
	if (key === '!') {
		saveBlocksImages();
	}
	else if (key === '@') {
		saveBlocksImages(true);
	}
	if (key === 'P') {
		noLoop();
	}
	if (key === 'S') {
		loop();
	}
}

class Character {
	constructor(letter, locationVec, scale) {
		this.scale = scale;
		this.location = locationVec.copy();
		this.tracers = []; //array of tracers, x, y, current target point, current path ID
		this.letter = letter;
		//vertices properties
		this.vertices = [4];

		for (let i = 0; i < 4; i++) {
			this.vertices[i] = new Vertex(alphabet[letter][i][0]*PI, alphabet[letter][i][1], this.scale, alphabet[letter][i][2]);
		}
		for (let i = 0; i < 15*this.scale; i++) {
			let originVert = floor(random(4));
			this.tracers.push(new Tracer(this, (originVert+1)%4, this.vertices[originVert].location.copy().rotate(random(-PI,PI))));
		}
	}
	setLetter(letter) {
		this.letter = letter;
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