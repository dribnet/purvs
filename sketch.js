var col1;
var col2;
var curCol;
var curRandomSeed;
var radical;
var glyphsize = 26  ;
var debugCircumfrences = [];

function setup() {
    createCanvas(960, 500);
    angleMode(DEGREES);
    //background(245);

    col1 = color('#fffcbc'); //yellow
    col2 = color('#66a0ff'); //blue
    col3 = color('white'); //white
    col4 = color('#ff6d74'); //red

    curRandomSeed = int(focusedRandom(0, 100));
    radical = radialArrange(width / 2, height / 2, 4 , 45, 1.066);
}

function draw() {
    resetFocusedRandom(curRandomSeed);
    background(col1);
    stroke(col2);
    fill(col2);
    stroke(col2);

    for (var i = radical.length - 1; i >= 0; i--) {
        // ellipse(radical[i][0], radical[i][1], glyphsize,glyphsize);
        
        if(i%4 == 0){
            drawBoat(radical[i][0], radical[i][1], glyphsize,col2,col3,col4);
        }
        else if (i%4 == 2) {
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
    sailCol = focusedRandom(0,1)
    arc(0,0.3*siz,0.70*siz,0.3*siz,0,180,CHORD);
    line(0,siz*0.25,0,-siz*0.4);

    
    stroke(c1);
    fill(c2);
    strokeWeight(siz*0.0025);
    if(sailCol>9.995){
        push();
        fill(c3);
        triangle(-0.1*siz,-0.45*siz,-0.4*siz,0.1*siz,-0.1*siz,0.1*siz);
        triangle(0.1*siz,-0.45*siz,0.4*siz,0.1*siz,0.1*siz,0.1*siz);
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

    var segments = 7; 

    push();
    noFill();
    strokeWeight(siz * 0.06);
    translate(x, y);
    stroke(c1);
    var ringCol = focusedRandom(0,1);

    push()
    if(ringCol <0.25){stroke(c2);}
    ellipse(0, 0, siz * 0.85, siz * 0.85);
    pop();

    push();
    if(ringCol>0.75){stroke(c2);}
    ellipse(0, 0, siz * 0.5, siz * 0.5);
    pop();
    push();
    if(0.45<ringCol<0.55){stroke(c2);}
    ellipse(0, 0, siz * 0.5, siz * 0.5);
    pop();
    
    

    strokeWeight(siz*0.075);
    var offset = focusedRandom(0,360/segments);
          for (var i = 0; i < segments ; i++) {
        var p = findNewPoint([0, 0], (360 / segments) * i +offset, siz / 2);
        strokeWeight(siz*0.058);
        line(0, 0, p[0], p[1]);
    }


    pop();
}

function drawAnchor(x, y, siz,c1) {
    push();
    strokeWeight((siz+ siz / 2) * 0.07);
    translate(x, y);
    noFill();
    line(0, -siz* 0.3, 0, 0.49*siz);

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


function radialArrange(x, y, seed, stepSeed, spin) {
    var steps = (width+height/4)/stepSeed;
    var hold = [ 
    ];
    var angle;
    var points_in_ring = seed;
    for (var step = 1; step < +steps; step++) {

        points_in_ring = step * seed;
        var current_radius = step * stepSeed - (stepSeed/PI/2);

        for (var g = 1; g <= points_in_ring; g++) {

            angle = (360 / points_in_ring) * g;
            angle += step * (360 / seed / spin);
            hold.push(findNewPoint([x, y], angle, current_radius));
        }
        debugCircumfrences.push(current_radius*2);
    }
    return hold;
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


function debugCircumfrences(){
    for (var i = debugCircumfrences.length - 1; i >= 0; i--) {
        push();
        stroke(col4);
        noFill();
        ellipse(width / 2, height / 2,debugCircumfrences[i], debugCircumfrences[i]);  
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