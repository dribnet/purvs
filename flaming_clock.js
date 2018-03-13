///<reference path="p5.global-mode.d.ts"/>
var Color = p5.Color;
var CANVAS_WIDTH = 960;
var CANVAS_HEIGHT = 500;
var cellSize = 15;
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
}
function displayClockCharacter(characterIndex, xOffset, yOffset) {
    noStroke();
    for (var i = 0; i < 35; i++) {
        if (numbers[characterIndex][i] === 1) {
            fill(backgroundColour);
            rect((xOffset + i % 5) * cellSize, (yOffset + floor(i / 5)) * cellSize, cellSize, cellSize);
            fill(textColour);
            ellipse((xOffset + i % 5) * cellSize + cellSize / 2, (yOffset + floor(i / 5)) * cellSize + cellSize / 2, cellSize);
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
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            fill(cells[i][j] ? cellColour : backgroundColour);
            rect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
    }
    var xOffset = 9;
    var yOffset = 12;
    //hours
    displayClockCharacter(floor(hour() / 10), xOffset, yOffset);
    xOffset += 6;
    displayClockCharacter(hour() % 10, xOffset, yOffset);
    xOffset += 6;
    //:
    displayClockCharacter(10, xOffset, yOffset);
    xOffset += 6;
    //minutes
    displayClockCharacter(floor(minute() / 10), xOffset, yOffset);
    xOffset += 6;
    displayClockCharacter(minute() % 10, xOffset, yOffset);
    xOffset += 6;
    //:
    displayClockCharacter(10, xOffset, yOffset);
    xOffset += 6;
    //seconds
    displayClockCharacter(floor(second() / 10), xOffset, yOffset);
    xOffset += 6;
    displayClockCharacter(second() % 10, xOffset, yOffset);
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
