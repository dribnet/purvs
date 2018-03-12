declare function saveBlocksImages(zoom);

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

const cellSize = 20;
let w, h;
let cells = [];
let cellColour;
let textColour;
let backgroundColour;

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
	/*
    create the drawing canvas, save the canvas element.
	Since TypeScript doesn't like forcing an HTMLCanvasElement into
	a p5.Element (to use .parent()), I've done it manually.
	*/
	let main_canvas: HTMLCanvasElement = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	let container = document.getElementById('canvasContainer');
	container.appendChild(main_canvas);

	//My own setup code
	w = CANVAS_WIDTH / cellSize;
	h = CANVAS_HEIGHT / cellSize;
	textColour = color(0xFF, 0xFF, 0x00);
	cellColour = color(0x90);
	backgroundColour = color(0x30);
	for (let i = 0; i < w; i++) {
		let line = [];
		for (let j = 0; j < h; j++) {
			line.push(random(1) < 0.25);
		}
		cells.push(line);
	}
	strokeWeight(1);

	//updateLife(25);
}

function draw() {
	translate(-0.5, -0.5);
	background(0xBB); // nice grey background

	stroke(backgroundColour);
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < h; j++) {
			fill(cells[i][j] ? cellColour : backgroundColour);
			rect(i * cellSize, j * cellSize, w, h);
		}
	}
	if (frameCount % 2 === 0) {
		updateLife(1);
	}
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

// do not alter or remove this function
function keyTyped() {
	if (key == '!') {
		saveBlocksImages(false);
	}
	else if (key == '@') {
		saveBlocksImages(true);
	}
}
