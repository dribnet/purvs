var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color = "#c6bdab";
var julesSkin = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#c78a5b";

function draw () {
    // background color
    background(bg_color);

    // stroke color
    stroke(stroke_color)

    // move to position1, rotate, draw "head" ellipse
    push();
    translate(960/4, 500/2-100);
    scale(150, 150);
    //rotate(4);
    drawJules();
    pop();
}

function makeVerts(vertexArray) {
    for (var i = 0; i < vertexArray.length; i++) {
        vertex(vertexArray[i][0], vertexArray[i][1]);
    }
}

function drawJules() {
    var face = [[-1, 0], [1, 0], [0.5, 1.8], [-0.5, 1.8]];  // face verts

    // HEAD
    fill(julesSkin);
    noStroke();
    beginShape();
    makeVerts(face);
    endShape(CLOSE);

    // // HAIR
    // fill(0);
    // noStroke();
    // ellipseMode(CORNERS);
    // ellipse(-1.1, -1, 1.1, 0.5);

    // FACIAL HAIR
    noFill();
    stroke(0);
    strokeWeight(0.15);
    strokeCap(SQUARE);

    // MOUSTACHE
    var handlebar = [face[3], [-0.25, 1.3], [0.25, 1.3], face[2]];
    beginShape()
    makeVerts(handlebar);
    endShape();

    // SIDEBURNS
    var burnLeft;
    var burnRight;
    {
        var burnJawLen = 0.6;      // % of jules jaw to span
        var burnCheekLen = 0.3;    // length of cheek hair

        var burnLeft = [
            face[0],
            [
                lerp(face[0][0], face[3][0], burnJawLen),
                lerp(face[0][1], face[3][1], burnJawLen)
            ]
        ];
        burnLeft[2] = [
            lerp(burnLeft[1][0], handlebar[1][0], burnCheekLen),
            lerp(burnLeft[1][1], handlebar[1][1], burnCheekLen)
        ]

        var burnRight = [
            face[1],
            [
                lerp(face[1][0], face[2][0], burnJawLen),
                lerp(face[1][1], face[2][1], burnJawLen)
            ]
        ];
        burnRight[2] = [
            lerp(burnRight[1][0], handlebar[2][0], burnCheekLen),
            lerp(burnRight[1][1], handlebar[2][1], burnCheekLen)
        ]
    }

    beginShape();
    makeVerts(burnLeft);
    endShape();

    beginShape();
    makeVerts(burnRight);
    endShape();
}

function drawDonald() {
    fill(julesSkin);
    ellipse(0, 0, 300, 400);

    // set fill to match background color
    fill(bg_color);
    // draw two eyes
    ellipse(-50, -80, 50, 30);
    ellipse( 50, -80, 50, 30);

    // set fill back to foreground for eyeballs
    fill(julesSkin);
    ellipse(-60, -80, 20, 20);
    ellipse( 40, -80, 20, 20);

    // mouth-hole with background color
    fill(bg_color);
    ellipse( 0, 70, 150, 20);
}

function keyTyped() {
    if (key == '!') {
    saveBlocksImages();
    }
    else if (key == '@') {
    saveBlocksImages(true);
    }
}
