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

    push();
    translate(960*3/4, 500/2-100);
    scale(150, 150);
    //rotate(4);
    drawPrince();
    pop();
}

function addVectors(vectorA, vectorB) {
    return [
        vectorA[0] + vectorB[0],
        vectorA[1] + vectorB[1]
    ];
}

function makeVertices(vertexArray) {
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
    makeVertices([
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
    var horseshoe = [
        lerpVertex(chinLeft, chinRight, 0.2),
        [-0.25, 1.35],
        [0, 1.3],
        [0.25, 1.35],
        lerpVertex(chinRight, chinLeft, 0.2),
    ];
    beginShape()
    makeVertices(horseshoe);
    endShape();

    // SIDEBURNS
    var burnLeft;
    var burnRight;
    {
        var burnJawLen = 0.45;      // % of jules jaw to span
        var burnCheekLen = 0.3;    // length of cheek hair

        var burnLeft = [
            fringeLeft,
            cheekBoneLeft,
            lerpVertex(cheekBoneLeft, chinLeft, burnJawLen)
        ];
        burnLeft[3] = lerpVertex(burnLeft[2], horseshoe[0], burnCheekLen);

        var burnRight = [
            fringeRight,
            cheekBoneRight,
            lerpVertex(cheekBoneRight, chinRight, burnJawLen)
        ];
        burnRight[3] = lerpVertex(burnRight[2], horseshoe[4], burnCheekLen);
    }

    beginShape();
    makeVertices(burnLeft);
    endShape();

    beginShape();
    makeVertices(burnRight);
    endShape();
}

function drawPrince() {
    // AFRO
    fill(0);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(0, 0.5, 1.1, 1.1);

    // FACE
    var fringeLeft    = [-0.45, 0.5];
    var fringeRight   = [0.45, 0.5];
    var cheekBoneLeft  = [-0.45, 1.5];
    var cheekBoneRight  = [0.45, 1.5];
    var chinLeft        = [-0.2, 1.9];
    var chinRight       = [0.2, 1.9];

    fill(julesSkin);
    noStroke();
    beginShape();
    makeVertices([
        fringeLeft,
        [-0.35, 0.3],
        [0.35, 0.3],
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
    strokeWeight(0.05);
    strokeCap(SQUARE);

    // MOUSTACHE
    var stasheBaseHeight = 0.35;
    var stasheCentreHeightOffset = 0.05;
    var stasheApexHeightOffset = 0.075;
    var stasheTailHorizontal = 0.03;
    var stasheTailVertical = 0.075;
    var stasheInsetPercent = 0.125;

    var stasheBaseLeft = addVectors(
        lerpVertex(chinLeft, chinRight, stasheInsetPercent),
        [0, -stasheBaseHeight]
    );
    var stasheBaseRight = addVectors(
       lerpVertex(chinRight, chinLeft, stasheInsetPercent),
       [0, -stasheBaseHeight]
    );
    var stasheCentrePoint = addVectors(
        lerpVertex(stasheBaseLeft, stasheBaseRight, 0.5),
        [0, -stasheCentreHeightOffset]
    );

    var stashe = [
        addVectors(stasheBaseLeft, [-stasheTailHorizontal, stasheTailVertical]),
        stasheBaseLeft,
        stasheCentrePoint,
        stasheBaseRight,
        addVectors(stasheBaseRight, [stasheTailHorizontal, stasheTailVertical]),
    ];

    beginShape()
    makeVertices(stashe);
    endShape();

    beginShape();
    makeVertices([
        stasheCentrePoint,
        addVectors(stasheCentrePoint, [0, -stasheApexHeightOffset])
    ]);
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
