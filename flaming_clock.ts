///<reference path="p5.global-mode.d.ts"/>
import Color = p5.Color;

declare function saveBlocksImages(zoom);

const CANVAS_WIDTH: number = 960;
const CANVAS_HEIGHT: number = 500;

const cellSize: number = 15;
let w, h: number;
let cells = [];
let cellColour: Color;
let textColour: Color;
let backgroundColour: Color;

//values for drawing the clock digits, 0-9 and :
const numbers = [
	[   //0
		0, 1, 1, 1, 0,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		0, 1, 1, 1, 0
	],
	[   //1
		0, 0, 0, 1, 0,
		0, 0, 1, 1, 0,
		0, 0, 0, 1, 0,
		0, 0, 0, 1, 0,
		0, 0, 0, 1, 0,
		0, 0, 0, 1, 0,
		0, 0, 0, 1, 0
	],
	[   //2
		0, 1, 1, 1, 0,
		1, 0, 0, 0, 1,
		0, 0, 0, 0, 1,
		0, 0, 0, 1, 0,
		0, 0, 1, 0, 0,
		0, 1, 0, 0, 0,
		1, 1, 1, 1, 1
	],
	[   //3
		0, 1, 1, 1, 0,
		1, 0, 0, 0, 1,
		0, 0, 0, 0, 1,
		0, 0, 1, 1, 0,
		0, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		0, 1, 1, 1, 0
	],
	[   //4
		0, 0, 0, 1, 0,
		0, 0, 1, 1, 0,
		0, 1, 0, 1, 0,
		1, 0, 0, 1, 0,
		1, 1, 1, 1, 1,
		0, 0, 0, 1, 0,
		0, 0, 0, 1, 0
	],
	[   //5
		1, 1, 1, 1, 1,
		1, 0, 0, 0, 0,
		1, 1, 1, 1, 0,
		0, 0, 0, 0, 1,
		0, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		0, 1, 1, 1, 0
	],
	[   //6
		0, 1, 1, 1, 0,
		1, 0, 0, 0, 0,
		1, 1, 1, 1, 0,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		0, 1, 1, 1, 0
	],
	[   //7
		1, 1, 1, 1, 1,
		0, 0, 0, 0, 1,
		0, 0, 0, 0, 1,
		0, 0, 0, 1, 0,
		0, 0, 1, 0, 0,
		0, 1, 0, 0, 0,
		1, 0, 0, 0, 0
	],
	[   //8
		0, 1, 1, 1, 0,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		0, 1, 1, 1, 0,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		0, 1, 1, 1, 0
	],
	[   //9
		0, 1, 1, 1, 0,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		1, 0, 0, 0, 1,
		0, 1, 1, 1, 1,
		0, 0, 0, 0, 1,
		0, 1, 1, 1, 0
	],
	[   //:
		0, 0, 0, 0, 0,
		0, 0, 1, 0, 0,
		0, 0, 0, 0, 0,
		0, 0, 0, 0, 0,
		0, 0, 0, 0, 0,
		0, 0, 1, 0, 0,
		0, 0, 0, 0, 0
	]
];

function setup() {
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

	//My own setup code
	w = CANVAS_WIDTH / cellSize;
	h = CANVAS_HEIGHT / cellSize;
	textColour = color(0xFF, 0xFF, 0x00);
	cellColour = color(0x90);
	backgroundColour = color(0x30);
	for (let i = 0; i < w; i++) {
		let line = [];
		for (let j = 0; j < h; j++) {
			line.push(random(1) < 0.05);
		}
		cells.push(line);
	}
	strokeWeight(1);

}

function displayClockCharacter(characterIndex, xOffset, yOffset) {
	noStroke();
	for (let i = 0; i < 35; i++) {
		if (numbers[characterIndex][i] === 1) {
			fill(backgroundColour);
			rect((xOffset + i % 5) * cellSize,
				(yOffset + floor(i / 5)) * cellSize, cellSize, cellSize);
			fill(textColour);
			ellipse((xOffset + i % 5) * cellSize + cellSize/2,
				(yOffset + floor(i / 5)) * cellSize + cellSize/2, cellSize);
			cells[xOffset + (i % 5)][yOffset + floor(i / 5)] = true;
		}
	}
}

function draw() {
	translate(-0.5, -0.5);
	background(backgroundColour); // nice grey background

	if (frameCount % 4 === 0) {
		updateLife(1);
	}

	stroke(backgroundColour);
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < h; j++) {
			fill(cells[i][j] ? cellColour : backgroundColour);
			rect(i * cellSize, j * cellSize, cellSize, cellSize);
		}
	}

	let xOffset = 9;
	let yOffset = 12;

	//hours
	displayClockCharacter(floor(hour()/10), xOffset, yOffset);
	xOffset += 6;
	displayClockCharacter(hour()%10, xOffset, yOffset);
	xOffset += 6;
	//:
	displayClockCharacter(10, xOffset, yOffset);
	xOffset += 6;
	//minutes
	displayClockCharacter(floor(minute()/10), xOffset, yOffset);
	xOffset += 6;
	displayClockCharacter(minute()%10, xOffset, yOffset);
	xOffset += 6;
	//:
	displayClockCharacter(10, xOffset, yOffset);
	xOffset += 6;
	//seconds
	displayClockCharacter(floor(second()/10), xOffset, yOffset);
	xOffset += 6;
	displayClockCharacter(second()%10, xOffset, yOffset);
}

function updateLife(generationNum) {
	let newCells = [];
	for (let i = 0; i < generationNum; i++) {
		for (let x = 0; x < w; x++) {
			let line = [];
			for (let y = 0; y < h; y++) {
				let neighbourCount = 0;
				for (let xLocal = -1; xLocal <= 1; xLocal++) {
					for (let yLocal = -1; yLocal <= 1; yLocal++) {
						if (xLocal === 0 && yLocal === 0) {
							continue;
						}
						neighbourCount += (cells[(x + xLocal + w) % w][(y + yLocal + h) % h] ? 1 : 0);
					}
				}
				line.push((neighbourCount === 2) ? cells[x][y] : (neighbourCount === 3));
			}
			newCells.push(line);
		}
	}
	cells = newCells;
}

function keyTyped() {
	if (key == '!') {
		saveBlocksImages(false);
	}
	else if (key == '@') {
		saveBlocksImages(true);
	}
	else if (key === 'P') {
		noLoop();
	}
	else if (key === 'S') {
		loop();
	}
}
