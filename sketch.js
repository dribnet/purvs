var col1;
var col2;
var curCol;
var curRandomSeed;
var radical;
var glyphsize = 15  ;

function setup() {
    createCanvas(960, 500);
    angleMode(DEGREES);
    //background(245);

    col1 = color('#f8ff9e');
    col2 = color('#4286f4');
    col3 = color('#f4fbff');
    col4 = color('#ff6d74');
    curCol = color('#f4eb42');

    curRandomSeed = int(focusedRandom(0, 100));
    radical = radialArrange(width / 2, height / 2, 3, 30, 28);
}

function draw() {
    resetFocusedRandom(curRandomSeed);
    background(col1);
    stroke(col2);
    fill(col2);
    stroke(col2);

    for (var i = radical.length - 1; i >= 0; i--) {
       // var anchsize = focusedRandom(0, 10);
        if(i%3 == 0){
            drawBoat(radical[i][0], radical[i][1], glyphsize,col2,col3,col4);
        }
        else if (i%3 == 1) {
            drawWheel(radical[i][0], radical[i][1], glyphsize,col2,col4);
        }
        else{
            drawAnchor(radical[i][0], radical[i][1], glyphsize*0.75 ,col2)
        }
    }

}


function drawBoat(x, y, siz,c1,c2,c3) {
    push();
    translate(x,y);
    strokeWeight(siz*0.1);
    fill(c1);
    sailCol = focusedRandom(0,1);

    arc(0,0,siz,siz,40,140,CHORD);
    line(0,siz*0.25,0,-siz*0.45);

    
    stroke(c1);
    fill(c2);
    strokeWeight(siz*0.0025);
    if(sailCol>9.995){
        push();
        fill(c3);
        triangle(-0.1*siz,-0.4*siz,-0.4*siz,0.1*siz,-0.1*siz,0.1*siz);
        triangle(0.1*siz,-0.4*siz,0.4*siz,0.1*siz,0.1*siz,0.1*siz);
        pop();
    }
    else if(sailCol < 0.15){
        push();
        fill(c3);
        triangle(-0.1*siz,-0.4*siz,-0.4*siz,0.1*siz,-0.1*siz,0.1*siz);
        pop();
        triangle(0.1*siz,-0.4*siz,0.4*siz,0.1*siz,0.1*siz,0.1*siz);

    }

    else if(sailCol < 0.3){
        push();
        triangle(-0.1*siz,-0.4*siz,-0.4*siz,0.1*siz,-0.1*siz,0.1*siz);
        fill(c3);
        triangle(0.1*siz,-0.4*siz,0.4*siz,0.1*siz,0.1*siz,0.1*siz);
        pop();

    }
    else{
        triangle(-0.1*siz,-0.4*siz,-0.4*siz,0.1*siz,-0.1*siz,0.1*siz);
        triangle(0.1*siz,-0.4*siz,0.4*siz,0.1*siz,0.1*siz,0.1*siz);
    }

    pop();
}

function drawWheel(x, y, siz,c1,c2) {
    push();
    noFill();
    strokeWeight(siz * 0.06);
    translate(x, y);
    stroke(c1);
    var ringCol = focusedRandom(0,1);

    push()
    if(ringCol <0.){stroke(c2);}
    ellipse(0, 0, siz * 0.85, siz * 0.85);
    pop();

    push();
    if(ringCol>0.8){stroke(c2);}
    ellipse(0, 0, siz * 0.5, siz * 0.5);
    pop();

    strokeWeight(siz*0.075);
          for (var i = 0; i < 8; i++) {
        var p = findNewPoint([0, 0], (360 / 8) * i, siz / 2);
        line(0, 0, p[0], p[1]);
    }


    pop();
}

function drawAnchor(x, y, siz,c1) {
    push();
    strokeWeight((siz+ siz / 2) * 0.1);
    translate(x, y);
    noFill();
    line(0, -siz* 0.3, 0, siz/ 2);

    ellipse(0, -siz* 0.45, (siz+ siz / 2) * 0.2, (siz+ siz / 2) * 0.2);

    noFill();
    beginShape();
    curveVertex(0, -siz* 0.5);
    curveVertex(-siz * 0.4, siz* 0.1);
    curveVertex(0, siz* 0.5);
    curveVertex(siz * 0.4, siz* 0.1);
    curveVertex(0, -siz* 0.5);
    endShape();

    pop();
}


function radialArrange(x, y, seed, steps, stepSeed) {

    var all = [
    ];
    var angle;
    var points_in_ring = seed;
    for (var step = 1; step < +steps; step++) {
        points_in_ring = step * seed;
        var current_radius = step * stepSeed;
        for (var g = 1; g <= points_in_ring; g++) {
            angle = (360 / points_in_ring) * g;
            angle += step * (360 / seed / steps);
            all.push(findNewPoint([x, y], angle, current_radius));
        }
        current_radius += stepSeed;
    }
    return all;
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