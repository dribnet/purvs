var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
    // create the drawing canvas, save the canvas element
    main_canvas = createCanvas(canvasWidth, canvasHeight);

    // position each element on the page
    main_canvas.parent('canvasContainer');

    // rotation in degrees
    angleMode(DEGREES);

    // BACKGROUND
    noStroke();
    fill(julesBackground);
    rect(0, 0, canvasWidth/2, canvasHeight);

    fill(princeBackground);
    rect(canvasWidth/2, 0, canvasWidth/2, canvasHeight);

    // FACES
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

// global variables for colors
var neutralBackround = "#c6bdab";
var princeBackground = "#4e215b";
var julesBackground = "#ffd703";

var julesSkin = "#442d1b";
var princeSkin = "#775034";

var fg_color2 = "#7b611a";
var stroke_color = "#c78a5b";

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
    ellipse(0, 0.5, 1.05, 1.05);

    // FACE
    var fringeLeft    = [-0.45, 0.5];
    var fringeRight   = [0.45, 0.5];
    var cheekBoneLeft  = [-0.465, 1.45];
    var cheekBoneRight  = [0.465, 1.45];
    var chinLeft        = [-0.2, 1.8];
    var chinRight       = [0.2, 1.8];

    fill(princeSkin);
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

    // EYEBROWS
    noStroke();
    fill(0);

    var eyeBrow = [
        [0.075, 0.65],
        //[0.2, 0.62],
        [0.3, 0.61],
        [0.4, 0.65],
        [0.4, 0.67],
        [0.3, 0.64],
        [0.2, 0.67],
        [0.07, 0.76]
    ];

    beginShape()
    makeVertices(eyeBrow);
    endShape(CLOSE);

    for (var i = 0; i < eyeBrow.length; i++) {
        eyeBrow[i] = [-eyeBrow[i][0], eyeBrow[i][1]];
    }

    beginShape()
    makeVertices(eyeBrow);
    endShape();

    // FACIAL HAIR
    noFill();
    stroke(0.0);
    strokeWeight(0.025);
    strokeCap(SQUARE);

    // MOUSTACHE
    var stacheBaseHeight = 0.35;
    var stacheCentreHeightOffset = 0.05;
    var stacheApexHeightOffset = 0.05;
    var stacheTailHorizontal = 0.03;
    var stacheTailVertical = 0.075;
    var stacheInsetPercent = 0.125;

    var stacheBaseLeft = addVectors(
        lerpVertex(chinLeft, chinRight, stacheInsetPercent),
        [0, -stacheBaseHeight]
    );
    var stacheBaseRight = addVectors(
       lerpVertex(chinRight, chinLeft, stacheInsetPercent),
       [0, -stacheBaseHeight]
    );
    var stacheCentrePoint = addVectors(
        lerpVertex(stacheBaseLeft, stacheBaseRight, 0.5),
        [0, -stacheCentreHeightOffset]
    );

    var stache = [
        addVectors(stacheBaseLeft, [-stacheTailHorizontal, stacheTailVertical]),
        stacheBaseLeft,
        stacheCentrePoint,
        stacheBaseRight,
        addVectors(stacheBaseRight, [stacheTailHorizontal, stacheTailVertical]),
    ];

    beginShape()
    makeVertices(stache);
    endShape();

    strokeWeight(0.04);
    beginShape();
    makeVertices([
        stacheCentrePoint,
        addVectors(stacheCentrePoint, [0, -stacheApexHeightOffset])
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
