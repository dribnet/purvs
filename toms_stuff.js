var curRandomSeed;
var inMapMode = true;

function setup() {
    curRandomSeed = int(focusedRandom(0, 100));
    createCanvas(960, 500);
    rectMode(CORNERS);
}

function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
}

function mousePressed() {
    changeRandomSeed();
}

function colorFromValue(v) {
    if (v < 0.5) {
        color1 = color(0, 0, 100);
        color2 = color(100, 100, 220);
        c = lerpColor(color1, color2, v * 2);
        return c;
    } else if (v < 0.7) {
        return color(0, 128, 0);
    } else if (v < 0.8) {
        return color(128, 128, 128);
    } else {
        return color(255);
    }
}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
        var sx = x + cos(a + PI / 6) * radius;
        var sy = y + sin(a + PI / 6) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function draw() {
    background(255);
    resetFocusedRandom(curRandomSeed);
    noiseSeed(curRandomSeed);
    var x_steps = 1 + Math.floor(width / 20);
    var y_steps = 1 + Math.floor(height / 18);
    var grid_locations = new Array(x_steps);
    for (var i = 0; i < x_steps; i++) {
        grid_locations[i] = new Array(y_steps);
        for (var j = 0; j < y_steps; j++) {
            x_pos = i * 20;
            y_pos = j * 18;
            if ((j % 2) == 0) {
                x_pos = x_pos + 10;
            }
            grid_locations[i][j] = [x_pos, y_pos];
        }
    }
    noStroke();
    if (inMapMode) {
        for (var i = 0; i < x_steps - 1; i++) {
            for (var j = 0; j < y_steps - 1; j++) {
                var loc = grid_locations[i][j];
                var x1 = loc[0];
                var y1 = loc[1]
                var x_noise = x1 / 100.0;
                var y_noise = y1 / 100.0;
                var noiseVal = noise(x_noise, y_noise);
                var shade = colorFromValue(noiseVal);
                fill(shade);
                polygon(x1 + 10, y1 + 10, 12, 6);
            }
        }
    } else {
        k = int(focusedRandom(0, 8));
        for (var i = 0; i < x_steps - 1; i++) {
            for (var j = 0; j < y_steps - 1; j++) {
                var loc = grid_locations[i][j];
                var x1 = loc[0];
                var y1 = loc[1]
                var spot = (i + j + k) % 9;
                if (spot == 0 || spot == 1) {
                    fill(100, 0, 0);
                } else if (spot == 2 || spot == 3) {
                    fill(0, 100, 0);
                } else if (spot == 6) {
                    fill(200, 200, 0);
                } else {
                    fill(0, 0, 100);
                }
                ellipse(x1, y1, 20);
            }
        }
    }
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == ' ') {
        inMapMode = !inMapMode;
    }
}