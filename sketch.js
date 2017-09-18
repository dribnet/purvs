var col1;
var col2;
var curCol;
var curRandomSeed;


function setup() {
    createCanvas(960, 500);
    angleMode(DEGREES);
    //background(245);

    col1 = color('#f8ff9e');
    col2 = color('#ff4f4f');
    curCol = color('#f4eb42');

    curRandomSeed = int(focusedRandom(0, 100));

}

function draw() {
    resetFocusedRandom(curRandomSeed);
    background(col1);
    noFill();
    stroke(col2);
    strokeWeight(3);
    drawShuriken(width / 2, height / 2, 80, 0);

    fill(col2);
}



function drawShuriken(x, y, rad, rot) {
    var hex;
    var tris = [];

    hex = new Hexagon(x, y, rad, rot);

    for (var i = hex.verts.length - 1; i >= 0; i--) {
        if (i % 2 == 0) {
            tris.push(triOnEdge(hex.verts[i], hex.verts[i + 1], -20, -120));
        }
    }
    hex.draw();
    drawGroup(tris);


}

function mousePressed() {
    changeRandomSeed();
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
}

function changeRandomSeed() {
    curRandomSeed = curRandomSeed + 1;
    lastSwapTime = millis();
}


function Hexagon(x, y, rad, rot) {
    this.orig = [x, y];
    this.verts = [];
    this.rad = rad;

    for (var s = 0; s < 6; s++) { // record vertices
        this.verts.push(findNewPoint(this.orig, 60 * s + rot, rad));
    }

    this.draw = function() {
        beginShape();
        for (var s = 0; s < 7; s++) {
            vertex(this.verts[s % 6][0], this.verts[s % 6][1]);
        }
        endShape();

    };

}



function triOnEdge(p1, p2, B, C) { // returns a point given two other points and an angle relative to each
    //lower case == angles
    //upper case == side lengths
    //       /\
    //      / A\
    //     /    \
    //    c      b
    //   /        \
    //  /B____a___C\

    var a = distanceBetween(p1, p2);
    var A = 180 - B - C;
    var b = (a * sinOf(B)) / sinOf(A);
    var c = (a * sinOf(C)) / sinOf(A);
    B += angleBetween(p1, p2);
    var nu = findNewPoint(p1, B, c);
    return new Tri(p1, p2, nu);

}

function Tri(p1, p2, p3) {
    this.verts = [p1, p2, p3];

    this.draw = function() {
        beginShape();
        vertex(p1[0], p1[1]);
        vertex(p2[0], p2[1]);
        vertex(p3[0], p3[1]);
        vertex(p1[0], p1[1]);
        endShape();
    };
}

function distanceBetween(p1, p2) {
    var a = p1[0] - p2[0];
    var b = p1[1] - p2[1];
    var c = Math.abs(Math.sqrt(a * a + b * b));
    return c;
}

function findNewPoint(point, angle, distance) {
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
    //angle given with reference to horizon line 
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