///<reference path="p5.global-mode.d.ts"/>
var Color = p5.Color;
var CANVAS_WIDTH = 960;
var CANVAS_HEIGHT = 500;
var cellSize = 20;
var w, h;
var cells = [];
var cellColour;
var textColour;
var backgroundColour;
//values for drawing the clock digits, 0-9 and :
var numbers = [
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    [
        0, 0, 0, 1, 0,
        0, 0, 1, 1, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 1, 0,
        0, 0, 0, 1, 0
    ],
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        0, 0, 0, 0, 1,
        0, 0, 0, 1, 0,
        0, 0, 1, 0, 0,
        0, 1, 0, 0, 0,
        1, 1, 1, 1, 1
    ],
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        0, 0, 0, 0, 1,
        0, 0, 1, 1, 0,
        0, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    [
        0, 0, 0, 1, 0,
        0, 0, 1, 1, 0,
        0, 1, 0, 1, 0,
        1, 0, 0, 1, 0,
        1, 1, 1, 1, 1,
        0, 0, 0, 1, 0,
        0, 0, 0, 1, 0
    ],
    [
        1, 1, 1, 1, 1,
        1, 0, 0, 0, 0,
        1, 1, 1, 1, 0,
        0, 0, 0, 0, 1,
        0, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 0,
        1, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    [
        1, 1, 1, 1, 1,
        0, 0, 0, 0, 1,
        0, 0, 0, 0, 1,
        0, 0, 0, 1, 0,
        0, 0, 1, 0, 0,
        0, 1, 0, 0, 0,
        1, 0, 0, 0, 0
    ],
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    [
        0, 1, 1, 1, 0,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1,
        0, 1, 1, 1, 1,
        0, 0, 0, 0, 1,
        0, 1, 1, 1, 0
    ],
    [
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
    //let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    // let container: HTMLElement | null = document.getElementById('canvasContainer');
    // container.appendChild(main_canvas);
    //that didn't work either and the error messages weren't helpful. This appears to work though.
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    //My own setup code
    w = CANVAS_WIDTH / cellSize;
    h = CANVAS_HEIGHT / cellSize;
    textColour = color(0xFF, 0xFF, 0x00);
    cellColour = color(0x90);
    backgroundColour = color(0x30);
    for (var i = 0; i < w; i++) {
        var line_1 = [];
        for (var j = 0; j < h; j++) {
            line_1.push(random(1) < 0.05);
        }
        cells.push(line_1);
    }
    strokeWeight(1);
    //updateLife(25);
}
function draw() {
    translate(-0.5, -0.5);
    background(backgroundColour); // nice grey background
    if (frameCount % 2 === 0) {
        updateLife(1);
    }
    stroke(backgroundColour);
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            fill(cells[i][j] ? cellColour : backgroundColour);
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
    fill(textColour);
    //TODO: make this into a function
    var xOffset = 3;
    var yOffset = 9;
    //3
    for (var i = 0; i < 35; i++) {
        if (numbers[3][i] === 1) {
            ellipse((xOffset + i % 5) * cellSize + cellSize / 2, (yOffset + floor(i / 5)) * cellSize + cellSize / 2, cellSize);
            cells[xOffset + (i % 5)][yOffset + floor(i / 5)] = true;
        }
    }
    xOffset += 6;
    //:
    for (var i = 0; i < 35; i++) {
        if (numbers[10][i] === 1) {
            ellipse((xOffset + i % 5) * cellSize + cellSize / 2, (yOffset + floor(i / 5)) * cellSize + cellSize / 2, cellSize);
            cells[xOffset + (i % 5)][yOffset + floor(i / 5)] = true;
        }
    }
    xOffset += 6;
    //4
    for (var i = 0; i < 35; i++) {
        if (numbers[4][i] === 1) {
            ellipse((xOffset + i % 5) * cellSize + cellSize / 2, (yOffset + floor(i / 5)) * cellSize + cellSize / 2, cellSize);
            cells[xOffset + (i % 5)][yOffset + floor(i / 5)] = true;
        }
    }
    xOffset += 6;
    //8
    for (var i = 0; i < 35; i++) {
        if (numbers[8][i] === 1) {
            ellipse((xOffset + i % 5) * cellSize + cellSize / 2, (yOffset + floor(i / 5)) * cellSize + cellSize / 2, cellSize);
            cells[xOffset + (i % 5)][yOffset + floor(i / 5)] = true;
        }
    }
    xOffset += 6;
    //:
    for (var i = 0; i < 35; i++) {
        if (numbers[10][i] === 1) {
            ellipse((xOffset + i % 5) * cellSize + cellSize / 2, (yOffset + floor(i / 5)) * cellSize + cellSize / 2, cellSize);
            cells[xOffset + (i % 5)][yOffset + floor(i / 5)] = true;
        }
    }
    xOffset += 6;
    //0
    for (var i = 0; i < 35; i++) {
        if (numbers[0][i] === 1) {
            ellipse((xOffset + i % 5) * cellSize + cellSize / 2, (yOffset + floor(i / 5)) * cellSize + cellSize / 2, cellSize);
            cells[xOffset + (i % 5)][yOffset + floor(i / 5)] = true;
        }
    }
    xOffset += 6;
    //5
    for (var i = 0; i < 35; i++) {
        if (numbers[5][i] === 1) {
            ellipse((xOffset + i % 5) * cellSize + cellSize / 2, (yOffset + floor(i / 5)) * cellSize + cellSize / 2, cellSize);
            cells[xOffset + (i % 5)][yOffset + floor(i / 5)] = true;
        }
    }
}
function updateLife(generationNum) {
    var newCells = [];
    for (var i = 0; i < generationNum; i++) {
        for (var x = 0; x < w; x++) {
            var line_2 = [];
            for (var y = 0; y < h; y++) {
                var neighbourCount = 0;
                for (var xLocal = -1; xLocal <= 1; xLocal++) {
                    for (var yLocal = -1; yLocal <= 1; yLocal++) {
                        if (xLocal === 0 && yLocal === 0) {
                            continue;
                        }
                        neighbourCount += (cells[(x + xLocal + w) % w][(y + yLocal + h) % h] ? 1 : 0);
                    }
                }
                line_2.push((neighbourCount === 2) ? cells[x][y] : (neighbourCount === 3));
            }
            newCells.push(line_2);
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
