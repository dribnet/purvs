//Global
var inMapMode = true;
var col1, col2, col3, col4;
var curRandomSeed;
//Wallpaper
var wallpaperPoints = [];
var glyphSize = 26;
//Map
var cellRadius = 30;
var cellCountY, cellCountX;
var cell_yOff = sinOf(60) * cellRadius;
var cell_width = cellRadius * 2;
var cell_height = cell_yOff * 2;
var cells = [];
var noiseAmp = 0.01;

function setup() {
    createCanvas(960, 500);
    angleMode(DEGREES);
    rectMode(CENTER);

    col1 = color('#fffcbc');
    col2 = color('#66a0ff');
    col3 = color('white');
    col4 = color('#ff6d74');

    cellCountX = Math.ceil(width / cell_width) + 1;
    cellCountY = Math.ceil(height / cell_height) * 2 + 1;
    console.log([cellCountX, cellCountY]);
    curRandomSeed = int(focusedRandom(0, 100));


    for (var y = 0; y < cellCountY; y++) {
        for (var x = 0; x < cellCountX; x++) {
            if (y % 2 == 0) {
                cells.push(new cell(x * cellRadius * 3, y * cell_yOff, x, y));
            } else {
                cells.push(new cell((x - 0.5) * cellRadius * 3, y * cell_yOff, x, y));

            }
        }

    }
    //wallpaperPoints = radialArrange(width / 2, height / 2, 4, 45, 1.066);
}

function draw() {
    resetFocusedRandom(curRandomSeed);
    noiseSeed(int(focusedRandom(0,100)));
    background(col1);
    stroke(col2);
    fill(col2);
    stroke(col3);
    strokeWeight(3);


    if (inMapMode == true) {
        for (var i = cells.length - 1; i >= 0; i--) {
            var c = cells[i];
            c.draw()
        }
    }
    if (inMapMode == false) {
        for (var i = wallpaperPoints.length - 1; i >= 0; i--) {
            if (i % 4 == 0) {
                Boat(wallpaperPoints[i][0], wallpaperPoints[i][1], glyphSize, col2, col3, col4);
            } else if (i % 4 == 2) {
                Wheel(wallpaperPoints[i][0], wallpaperPoints[i][1], glyphSize, col2, col4);
            } else {
                Anchor(wallpaperPoints[i][0], wallpaperPoints[i][1], glyphSize * 0.75, col2)
            }
        }
    }
}

var cell = function(xpos, ypos, xindex, yindex) {
    this.x = xpos;
    this.y = ypos;
    this.pos = [xpos, ypos];
    this.index = [xindex, yindex];
    this.value = noise(xpos*noiseAmp,ypos*noiseAmp);
    this.color = lerpColor(col1,col2,this.value);

    this.draw = function(){
        push();
        textSize(11);
        fill(this.color);
        polygon(this.x,this.y,cellRadius, 6);
        pop();
    }
    this.refresh = function(){
        this.value = noise(xpos*noiseAmp,ypos*noiseAmp);
        this.color = lerpColor(col1,col2,this.value);        
    }
}

function radialArrange(x, y, seed, stepSeed, spin) {
    var steps = (width + height / 4) / stepSeed;
    var hold = [];
    var angle;
    var points_in_ring = seed;
    for (var step = 1; step < +steps; step++) {
        points_in_ring = step * seed;
        var current_radius = step * stepSeed - (stepSeed / PI / 2);
        for (var g = 1; g <= points_in_ring; g++) {
            angle = (360 / points_in_ring) * g;
            angle += step * (360 / seed / spin);
            hold.push(findNewPoint([x, y], angle, current_radius));
        }

    }
    return hold;
}

function Boat(x, y, siz, c1, c2, c3) {
    push();
    translate(x, y);
    strokeWeight(siz * 0.1);
    fill(c1);
    sailCol = focusedRandom(0, 1)
    arc(0, 0.3 * siz, 0.70 * siz, 0.3 * siz, 0, 180, CHORD);
    line(0, siz * 0.25, 0, -siz * 0.4);
    stroke(c1);
    fill(c2);
    strokeWeight(siz * 0.0025);
    if (sailCol > 9.995) {
        push();
        fill(c3);
        triangle(-0.1 * siz, -0.45 * siz, -0.4 * siz, 0.1 * siz, -0.1 * siz, 0.1 * siz);
        triangle(0.1 * siz, -0.45 * siz, 0.4 * siz, 0.1 * siz, 0.1 * siz, 0.1 * siz);
        pop();
    } else if (sailCol < 0.15) {
        push();
        fill(c3);
        triangle(-0.1 * siz, -0.4 * siz, -0.4 * siz, 0.1 * siz, -0.1 * siz, 0.1 * siz);
        pop();
        triangle(0.1 * siz, -0.4 * siz, 0.4 * siz, 0.1 * siz, 0.1 * siz, 0.1 * siz);
    } else if (sailCol < 0.3) {
        push();
        triangle(-0.1 * siz, -0.4 * siz, -0.4 * siz, 0.1 * siz, -0.1 * siz, 0.1 * siz);
        fill(c3);
        triangle(0.1 * siz, -0.4 * siz, 0.4 * siz, 0.1 * siz, 0.1 * siz, 0.1 * siz);
        pop();
    } else {
        triangle(-0.1 * siz, -0.4 * siz, -0.4 * siz, 0.1 * siz, -0.1 * siz, 0.1 * siz);
        triangle(0.1 * siz, -0.4 * siz, 0.4 * siz, 0.1 * siz, 0.1 * siz, 0.1 * siz);
    }
    pop();
}

function Wheel(x, y, siz, c1, c2) {
    var segments = 7;
    push();
    noFill();
    strokeWeight(siz * 0.06);
    translate(x, y);
    stroke(c1);
    var ringCol = focusedRandom(0, 1);
    push()
    if (ringCol < 0.25) {
        stroke(c2);
    }
    ellipse(0, 0, siz * 0.85, siz * 0.85);
    pop();
    push();
    if (ringCol > 0.75) {
        stroke(c2);
    }
    ellipse(0, 0, siz * 0.5, siz * 0.5);
    pop();
    push();
    if (0.45 < ringCol < 0.55) {
        stroke(c2);
    }
    ellipse(0, 0, siz * 0.5, siz * 0.5);
    pop();
    strokeWeight(siz * 0.075);
    var offset = focusedRandom(0, 360 / segments);
    for (var i = 0; i < segments; i++) {
        var p = findNewPoint([0, 0], (360 / segments) * i + offset, siz / 2);
        strokeWeight(siz * 0.058);
        line(0, 0, p[0], p[1]);
    }
    pop();
}

function Anchor(x, y, siz, c1) {
    push();
    strokeWeight((siz + siz / 2) * 0.07);
    translate(x, y);
    noFill();
    line(0, -siz * 0.3, 0, 0.49 * siz);
    ellipse(0, -siz * 0.45, (siz + siz / 2) * 0.2, (siz + siz / 2) * 0.2);
    noFill();
    beginShape();
    curveVertex(0, -siz * 0.5);
    curveVertex(-siz * 0.4, siz * 0.1);
    curveVertex(0, siz * 0.5);
    curveVertex(siz * 0.4, siz * 0.1);
    curveVertex(0, -siz * 0.5);
    endShape();
    pop();
}

function mousePressed() {
    changeRandomSeed();
        for (var i = cells.length - 1; i >= 0; i--) {
            var c = cells[i];
            c.refresh()
        }
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    } else if (key == ' ') {
        inMapMode = !inMapMode;
    }
}

function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
}

function debugCircumfrences() {
    for (var i = debugCircumfrences.length - 1; i >= 0; i--) {
        push();
        stroke(col4);
        noFill();
        ellipse(width / 2, height / 2, debugCircumfrences[i], debugCircumfrences[i]);
        pop();
    }
}

function distanceBetween(p1, p2) {
    var a = p1[0] - p2[0];
    var b = p1[1] - p2[1];
    var c = Math.abs(Math.sqrt(a * a + b * b));
    return c;
}

function findNewPoint(point, angle, distance) {
    angle %= 360;
    var result = [];
    result[0] = Math.round(Math.cos(angle * Math.PI / 180) * distance + point[0]);
    result[1] = Math.round(Math.sin(angle * Math.PI / 180) * distance + point[1]);
    return result;
}

function sinOf(degrees) {
    return Math.sin(degrees * Math.PI / 180);
}

function drawGroup(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i].draw();
    }
}

function vert(point) {
    vertex(point[0], point[1]);
}

function angleBetween(p1, p2) {
    var c;
    c = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180 / Math.PI;
    return c;
}

function debugPoint(point, size) {
    ellipse(point[0], point[1], size, size);
}

function debugShowPoints(arr, txtsiz) {
    push();
    textSize(0.25);
    if (txtsiz) {
        textSize(txtsiz);
    }
    noStroke();
    for (var i = arr.length - 1; i >= 0; i--) {
        text(i, arr[i][0], arr[i][1]);
    }
    pop();
}

function polygon(x, y, radius, npoints) {
    var angle = 360 / npoints;
    beginShape();
    for (var a = 0; a < 360; a += angle) {
        var p = findNewPoint([x, y], a, radius);
        vertex(p[0], p[1]);
    }
    endShape(CLOSE);
}