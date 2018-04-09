let main_canvas = null;
let pos1_slider = null;
let tilt1_slider = null;
let pos2_slider = null;
let tilt2_slider = null;
let pos3_slider = null;
let tilt3_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
	"A":
		{
			"vertex1": {
				"x": -5,
				"y": 5
			},
			"vertex2": {
				"x": -5,
				"y": -5
			},
			"vertex3": {
				"x": 5,
				"y": -5
			},
			"vertex4": {
				"x": 5,
				"y": 5
			}
		},
	"B":
		{
			"vertex1": {
				"x": -5,
				"y": 5
			},
			"vertex2": {
				"x": -5,
				"y": -5
			},
			"vertex3": {
				"x": 5,
				"y": -5
			},
			"vertex4": {
				"x": 5,
				"y": 5
			}
		},
	"C":
		{
			"vertex1": {
				"x": -5,
				"y": 5
			},
			"vertex2": {
				"x": -5,
				"y": -5
			},
			"vertex3": {
				"x": 5,
				"y": -5
			},
			"vertex4": {
				"x": 5,
				"y": 5
			}
		}
};

let characters = [];

function setup() {
	// create the drawing canvas, save the canvas element
	main_canvas = createCanvas(canvasWidth, canvasHeight);

	//pixelDensity(1); //hopefully will not need this. TODO: verify if needed

	// create two sliders
	pos1_slider = createSlider(-200, 200, 0);
	tilt1_slider = createSlider(-180, 180, 0);
	pos2_slider = createSlider(-200, 200, 0);
	tilt2_slider = createSlider(-180, 180, 0);
	pos3_slider = createSlider(-200, 200, 0);
	tilt3_slider = createSlider(-180, 180, 0);

	sel = createSelect();
	sel.option('A');
	sel.option('B');
	sel.option('C');
	sel.changed(letterChangedEvent);

	button = createButton('show data');
	button.mousePressed(buttonPressedEvent);

	// position each element on the page
	main_canvas.parent('canvasContainer');
	pos1_slider.parent('slider1Container');
	tilt1_slider.parent('slider2Container');
	pos2_slider.parent('slider3Container');
	tilt2_slider.parent('slider4Container');
	pos3_slider.parent('slider5Container');
	tilt3_slider.parent('slider6Container');

	sel.parent(selectorContainer);
	button.parent(buttonContainer);

	background(0x00);

	characters.push(new Character("A", createVector(width/3, height/2), 2));
	characters.push(new Character("B", createVector(width/2, height/2), 2));
	characters.push(new Character("C", createVector(width/3*2, height/2), 2));
}

function sliderToDataObject() {
	let obj = {};
	obj["box1"] = {};
	obj["box1"]["position"] = pos1_slider.value();
	obj["box1"]["tilt"] = tilt1_slider.value();
	obj["box2"] = {};
	obj["box2"]["position"] = pos2_slider.value();
	obj["box2"]["tilt"] = tilt2_slider.value();
	obj["box3"] = {};
	obj["box3"]["position"] = pos3_slider.value();
	obj["box3"]["tilt"] = tilt3_slider.value();
	return obj;
}

function dataObjectToSliders(obj) {
	pos1_slider.value(obj["box1"]["position"]);
	tilt1_slider.value(obj["box1"]["tilt"]);
	pos2_slider.value(obj["box2"]["position"]);
	tilt2_slider.value(obj["box2"]["tilt"]);
	pos3_slider.value(obj["box3"]["position"]);
	tilt3_slider.value(obj["box3"]["tilt"]);
}

function letterChangedEvent() {
	let item = sel.value();
	dataObjectToSliders(savedValues[item]);
}

function buttonPressedEvent() {
	let obj = sliderToDataObject();
	json = JSON.stringify(obj, null, 2);
	alert(json);
}

const colorFront = [207, 222, 227];
const colorBack = [29, 42, 46];

/* supplied slider-slaved code, keeping it for later
function drawPart(y_offset, pos, tilt) {
	let middle_x = 2 * canvasWidth / 3;
	let middle_y = canvasHeight / 2;
	resetMatrix();
	translate(middle_x + pos, middle_y + y_offset);
	rotate(tilt);

	let scale = 10;

	fill(colorFront);
	// rect(-100,-100,100,100);
	rect(-20 * scale, -3 * scale, 20 * scale, 3 * scale);
}

function drawFromSliders(y_offset, pos_slider, tilt_slider) {
	let pos = pos_slider.value();
	let tilt = tilt_slider.value();
	drawPart(y_offset, pos, tilt);
}
*/

function draw() {
	//background(colorBack);
	//fill(colorFront);

	loadPixels();
	let point;
	for (let i = 0, l = characters.length; i < l; i++) {
		for (let j = 0, m = characters[i].tracers.length; j < m; j++) {
			//todo: code here to convert the following coordinates into the pixel positions
			point = characters[i].tracers[j].position;
			let address = round(point.x)*4 + round(point.y)*width*4;
			//todo: ensure this portion of the code only handles pixel coordinates. Scaling is a Character problem.
			pixels[address] = 0xFF;      //r
			pixels[address+1] = 0xFF;    //g
			pixels[address+2] = 0xFF;    //b
		}
	}
	updatePixels();
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
		this.position = locationVec;
		this.tracers = []; //array of tracers, x, y, current target point, current path ID
		//vertices properties
		this.vertPosition = []; //position of the four points, as expressed by a rotation and magnitude.
			//not storing the rotation/magnitude portion directly because it's derived from sliders but maybe I should just
			//store both of those and work it out from them, for smoother interpolation.
		//Actually come to think of it I can have the character's overall position and add + that the vertices positions,
		//particles and points remain screenspace, so character scale is a MAGNITUDE MULTIPLIER, and the interpolation
		//values are from rotation and magnitude per point, applied to the vector - hooray for pvectors!
		this.vertVariance = []; //how much variance there is in tracer targeting
		this.vertMargin = []; //margin of error for particles approaching a point
		this.targetTurnRate = []; //speed of tracer turning on that path in radians
		this.chromaticEffectStrength = []; //fun colourful aberration effect.

		//todo: consider a starting angle?

	}
	setValues() {

	}
	update() {
		//tracer update calls go here
		for (let i = 0, j = this.tracers.length; i < j; i++) {
			this.tracers[i].update();
		}
		//mutation logic probably goes here
	}

	mutateTo() { //todo: implement this for interpolating between the current values and some target values by a constant rate.
		//can this be made smooth and cool? How this will work is you'll specify the target values
		// and it will mutate towards them by one step, no reason to make it care about what prior character was

		//use multiplied difference with a small linear portion, so it slows down on approach.
		//should particles approach the new position? That means targets need to be an offsetvector from vertices vector. that's doable though.
	}
}

class Vertex { //TODO: transfer character vertex components to here

}

class Tracer {
	constructor(character, targetIndex, location) {
		this.parentCharacter = character;
		this.targetIndex = targetIndex;
		this.location = location; //todo: maybe just make this targetIndex-1
		this.targetPosition = createVector(0,0);
		this.targetMargin;
		this.changeTarget(this.targetIndex);
		this.velocity = createVector(0,1);
	}
	update() {
		this.location.add(this.velocity);

		//todo: make it check that the angleBetween this location and the target point matches the heading() of velocity
		let dir = this.location.angleBetween(this.targetPosition)
					- this.velocity.heading();
		let turn = this.parentCharacter.targetTurnRate[this.targetIndex];
		this.velocity.rotate(dir < -0.1 ? -turn : dir > 0.1 ? turn : 0);
		if (this.location.dist(this.targetPosition) < this.targetMargin) {
			this.targetIndex += (this.targetIndex+1)%4;
			this.changeTarget(this.targetIndex);
		}

	}

	changeTarget(n) { //TODO: maybe make this work on an offset instead of an absolute target, so that the splining works better?
		this.targetPosition.set(this.parentCharacter.vertPosition[n].copy()
			.add(createVector(random(this.parentCharacter.vertVariance[n]),0).rotate(random(TAU))));
		this.targetMargin = this.parentCharacter.vertMargin[n];
	}

}