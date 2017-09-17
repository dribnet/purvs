var col1;
var col2;
var curCol;
var curRandomSeed;
var hexy;
var tips = [];

function setup() {
    createCanvas(960, 500);
    angleMode(DEGREES);
    col1 = color('#f3ff54');
    col2 = color('#ff4f4f');
    curCol = color('#f4eb42');
    curRandomSeed = int(focusedRandom(0, 100));

    hexy = Hexagon(width/2,height/2,80,30);

}

function draw() {
    resetFocusedRandom(curRandomSeed);
    background(51);
    fill(col1);
    stroke(col1);

    hexy.draw();

    fill(col2);


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
    for (var s = 0; s < 6; s++) { // record vertices
        this.verts.push(findNewPoint(orig, 60 * s + rot, rad));
    }
    console.log(this.verts);
    this.draw = function(){
        beginShape();
        for (var s = 0; s < 6; s++) {
          console.log(verts[s]);
          vertex(this.verts[s][0], this.verts[s][1]);
        }
        endShape();
    }

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
    return Tri(p1,p2,ret);

}
function Tri(p1,p2,p3){
    this.verts = [p1,p2,p3];
    this.draw = function(){
        beginShape();
        vertex(p1[0], p1[1]);
        vertex(p2[0], p2[1]);
        vertex(ret[0], ret[1]);
        vertex(p1[0], p1[1]);
        endShape();
    }
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

function angleBetween(p1, p2) {
    //angle given with reference to horizon line 
    var c;
    c = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180 / Math.PI;
    return c;
}