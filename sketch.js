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

function lerpVertex(from, to, percent) {
    return [
        lerp(from[0], to[0], percent),
        lerp(from[1], to[1], percent)
    ];
}

function drawJules() {
    // AFRO
    fill(0);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(0, 0.45, 0.95, 0.95);

    // FACE
    var fringeLeft    = [-0.7, 0.4];
    var fringeRight   = [0.7, 0.4];
    var cheekBoneLeft  = [-0.7, 0.8];
    var cheekBoneRight  = [0.7, 0.8];
    var chinLeft        = [-0.5, 1.8];
    var chinRight       = [0.5, 1.8];

    fill(julesSkin);
    noStroke();
    beginShape();
    makeVerts([
        fringeLeft,
        [0, 0.3],
        fringeRight,
        cheekBoneRight,
        chinRight,
        chinLeft,
        cheekBoneLeft,
    ]);
    endShape(CLOSE);

    // FACIAL HAIR
    noFill();
    stroke(0);
    strokeWeight(0.15);
    strokeCap(SQUARE);

    // MOUSTACHE
    var handlebar = [
        lerpVertex(chinLeft, chinRight, 0.2),
        [-0.25, 1.35],
        [0, 1.3],
        [0.25, 1.35],
        lerpVertex(chinRight, chinLeft, 0.2),
    ];
    beginShape()
    makeVerts(handlebar);
    endShape();

    // SIDEBURNS
    var burnLeft;
    var burnRight;
    {
        var burnJawLen = 0.45;      // % of jules jaw to span
        var burnCheekLen = 0.3;    // length of cheek hair

        var burnLeft = [
            cheekBoneLeft,
            lerpVertex(cheekBoneLeft, chinLeft, burnJawLen)
        ];
        burnLeft[2] = lerpVertex(burnLeft[1], handlebar[0], burnCheekLen);

        var burnRight = [
            cheekBoneRight,
            lerpVertex(cheekBoneRight, chinRight, burnJawLen)
        ];
        burnRight[2] = lerpVertex(burnRight[1], handlebar[4], burnCheekLen);
    }

    beginShape();
    vertex(-0.7, 0.1);
    makeVerts(burnLeft);
    endShape();

    beginShape();
    vertex(0.7, 0.);
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
