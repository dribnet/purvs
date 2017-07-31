var canvasWidth = 960;
var canvasHeight = 500;
var slider1, slider2, slider3, slider4, slider5;
var faceSelector;

function setup () {
    // create the drawing canvas, save the canvas element
    var main_canvas = createCanvas(canvasWidth, canvasHeight);
    main_canvas.parent('canvasContainer');

    // create sliders
    slider1 = createSlider(0, 100, 50);
    slider2 = createSlider(0, 100, 50);
    slider3 = createSlider(0, 100, 50);
    slider4 = createSlider(0, 100, 50);
    slider5 = createSlider(0, 100, 50);

    slider1.parent('slider1Container');
    slider2.parent('slider2Container');
    slider3.parent('slider3Container');
    slider4.parent('slider4Container');
    slider5.parent('slider5Container');

    faceSelector = createSelect();
    faceSelector.option('Axolotl');
    faceSelector.option('Afro');
    faceSelector.option('3');
    faceSelector.option('all')
    faceSelector.value('all');
    faceSelector.parent('selector1Container');
}

function draw () {
    // rotation in degrees
    angleMode(DEGREES);

    noStroke();

    var mode = faceSelector.value();
    print(mode);

    if (mode != 'all') {
        if (mode == 'Axolotl') {
            background(julesBackground);
        }
        else if (mode == 'Afro') {
            background(princeBackground);
        }
        else if (mode == '3') {
            //background(bg_color3);
        }
    }

    var s1 = slider1.value();
    var s2 = slider2.value();
    var s3 = slider3.value();
    var s4 = slider4.value();
    var s5 = slider5.value();

    // use same size / y_pos for all faces
    var face_w = canvasWidth / 4;
    var face_h = face_w;
    var face_y = height / 2;
    var face_x = width / 2;

    if (mode == 'Axolotl' || mode == 'all') {
        // BACKGROUND
        background(julesBackground);
        var happiness = 1 - dist(width/2, height/2, mouseX, mouseY) / dist(0, 0, width/2, height/2);
        // draw 1st face
        push();
        translate(width/2, height/2);
        scale(300, 300);
        //rotate(4);
        //drawJules();
        drawAxolotl({
            angleOffset:map(happiness, 0, 1, -80, 20),
            gillLength:1.2,
            smile:map(happiness, 0, 1, 240, 120),
        });
        pop();
    }

    // if (mode == 'Afro' || mode == 'all') {
    //     noStroke();
    //     fill(princeBackground);
    //     rect(canvasWidth/2, 0, canvasWidth/2, canvasHeight);
    //
    //     push();
    //     translate(960*3/4, 500/2-100);
    //     scale(150, 150);
    //     //rotate(4);
    //     drawPrince({
    //         stacheWeight:map(s1, 0, 100, 0, 8),
    //         stacheBreadth:map(s2, 0, 100, 0, 9),
    //         stacheLength:map(s3, 0, 100, -1, 10),
    //         browShear:map(s4, 0, 100, -20, 20),
    //         browWeight:map(s1, 0, 100, 0, 3),
    //         afroRadius:map(s5, 0, 100, 0, 1.5),
    //     });
    //     pop();
    // }

    // if (mode == '3' || mode == 'all') {
    //     // draw 3nd face
    //     fill(bg_color3);
    //     rect(2*width/3, 0, width, height);
    //     var width_value = map(s1, 0, 100, 0, 100);
    //     var mouth_value = map(s3, 0, 100, 0, 200);
    //     var eye_value = Math.floor(map(s2, 0, 100, 0, 3));
    //     if (mode == 'all') {
    //         face_x = 5 * width / 6;
    //     }
    //     drawFace3(face_x, face_y, face_w, face_h, width_value, eye_value, mouth_value);
    // }
}

// global variables for colors
var neutralBackround = "#c6bdab";
var princeBackground = "#4e215b";
var julesBackground = "#7FEAFF";

var julesSkin = "#442d1b";
var princeSkin = "#775034";

function addVectors(vectorA, vectorB) {
    return [
        vectorA[0] + vectorB[0],
        vectorA[1] + vectorB[1]
    ];
}

function multScalar(scalar, vector) {
    return [
        vector[0]*scalar,
        vector[1]*scalar
    ]
}

function makeVertices(vertexArray) {
    for (var i = 0; i < vertexArray.length; i++) {
        vertex2(vertexArray[i]);
    }
}

function vertex2(v) {
    vertex(v[0], v[1]);
}

function bezierVertex2(control0, control1, anchor1) {
    bezierVertex(
        control0[0], control0[1],
        control1[0], control1[1],
        anchor1[0], anchor1[1]
    )
}

function lerpVertex(from, to, percent) {
    return [
        lerp(from[0], to[0], percent),
        lerp(from[1], to[1], percent)
    ];
}

var axolotlSkin = '#F3CFFF';
var axolotlMouth = '#FF70FF';
var axolotlGills = '#CC1968';
var axolotlEyes = '#0E257C';

var waveAngles = [
    [   // left
        5, 30, 75
    ],
    [   // right
        40, 65, 90
    ]
];

var waveFlexes = [
    [   // left
        13, 23, 79
    ],
    [   // right
        34, 90, 55
    ]
];

function drawAxolotl(args) {
    push();
    noStroke();

    var headWidth = 0.5;
    var headHeight = 0.32

    // GILLS

    fill(axolotlGills);

    function gill(arcPos, normal, length, width, bendAngle, reverse, flexOffset) {
        push();
        if (reverse) {
            arcPos *= -1;
            bendAngle *= -1;
            normal *= -1;
        }
        translate(0.9*headWidth*sin(arcPos), -0.9*headHeight*cos(arcPos));
        rotate(normal);
        scale(length, length);
        drawGill(width/length, 0.5 + flexOffset, bendAngle);
        pop();
    }

    var gillLength = 0.6 * args.gillLength;
    var gillWidth = 0.175;

    gill(50, 0 - args.angleOffset/3, gillLength, gillWidth, -45 + args.angleOffset + 10*sin(waveAngles[0][0]), false,  0.07*sin(waveFlexes[0][0]));
    gill(50, 0 - args.angleOffset/3, gillLength, gillWidth, -45 + args.angleOffset + 10*sin(waveAngles[1][0]), true,  0.07*sin(waveFlexes[1][0]));

    gill(70, 70 - args.angleOffset/3, gillLength, gillWidth, 45 + args.angleOffset + 10*sin(waveAngles[0][1]), false,  0.07*sin(waveFlexes[0][1]));
    gill(70, 70 - args.angleOffset/3, gillLength, gillWidth, 45 + args.angleOffset + 10*sin(waveAngles[1][1]), true,  0.07*sin(waveFlexes[1][1]));

    gill(90, 90 - args.angleOffset/3, gillLength, gillWidth, 45 + args.angleOffset + 10*sin(waveAngles[0][2]), false,  0.07*sin(waveFlexes[0][2]));
    gill(90, 90 - args.angleOffset/3, gillLength, gillWidth, 45 + args.angleOffset + 10*sin(waveAngles[1][2]), true,  0.07*sin(waveFlexes[1][2]));

    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++) {
            waveAngles[i][j] += 1.59;
            waveFlexes[i][j] += 1.37;
        }
    }

    // FACE

    fill(axolotlSkin);
    ellipseMode(RADIUS);
    ellipse(0, 0, headWidth, headHeight);

    fill(axolotlEyes);
    ellipse(-headWidth/2, -headHeight/3, 0.02, 0.02);
    ellipse(headWidth/2, -headHeight/3, 0.02, 0.02);

    // MOUTH
    var smileMagnitude = 0.15;
    var mouth = [
        [-headWidth/2, headHeight/3],
        [headWidth/2, headHeight/3],
    ]

    noFill();
    stroke(axolotlMouth);
    strokeWeight(0.01);
    push();
    {
        translate(0, -smileMagnitude * sin(args.smile));
        beginShape()
        vertex2(mouth[0]);
        bezierVertex2(
            addVectors(
                mouth[0],
                multScalar(smileMagnitude, [-cos(args.smile), sin(args.smile)])
            ),
            addVectors(
                mouth[1],
                multScalar(smileMagnitude, [cos(args.smile), sin(args.smile)])
            ),
            mouth[1]
        )
        endShape();
    }
    pop();

    pop();
}

function drawGill(width, rigidity, bendAngle) {
    // anchor points
    var v1 = [-width/2, 0];
    var v2 = [0, -1];
    var v3 = [width/2, 0];
    // control points (handles)
    var c1 = lerpVertex(v1, v2, rigidity);
    var c3 = lerpVertex(v3, v2, rigidity);

    // bend v2 about centre
    v2 = addVectors(
        [0, -rigidity],
        multScalar(1 - rigidity, [-sin(bendAngle), -cos(bendAngle)])
    );

    // make shape
    beginShape();
    vertex2(v1);
    bezierVertex2(c1, v2, v2);
    bezierVertex2(v2, c3, v3);
    endShape(CLOSE);
}

function drawPrince(args) {
    // AFRO
    fill(0);
    noStroke();
    ellipseMode(RADIUS);
    ellipse(0, 0.5, 1.05 * args.afroRadius, 1.05 * args.afroRadius);

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

    var eyebrow = [
        [0.075, 0.65],
        //[0.2, 0.62],
        [0.3, 0.61],
        [0.4, 0.65],
        [0.4, 0.67],
        [0.3, 0.64],
        [0.2, 0.67],
        [0.07, 0.76]
    ];
    var browMidLine = 0.655;

    push()
    {
        translate(0, browMidLine);
        shearY(args.browShear);
        if (args.browWeight > 1) {  // fatten eyebrows
            for (var i = 0; i < eyebrow.length; i++) {
                var offset = [0, 0.05 * (args.browWeight-1)];
                if (eyebrow[i][1] < browMidLine) {
                    offset = multScalar(-1, offset);
                }
                eyebrow[i] = addVectors(eyebrow[i], offset);
            }
        } else {                    // slim eyebrows
            scale(1, args.browWeight);
        }
        translate(0, -0.68);

        beginShape()
        makeVertices(eyebrow);
        endShape(CLOSE);

        for (var i = 0; i < eyebrow.length; i++) {
            eyebrow[i] = [-eyebrow[i][0], eyebrow[i][1]];
        }

        beginShape()
        makeVertices(eyebrow);
        endShape();
    }
    pop()

    // FACIAL HAIR
    noFill();
    stroke(0.0);
    strokeWeight(0.025 * args.stacheWeight);
    strokeCap(SQUARE);

    // MOUSTACHE
    var stacheBaseHeight = 0.4;
    var stacheCentreHeightOffset = 0.05;
    var stacheApexHeightOffset = 0.05;
    var stacheTailHorizontal = 0.03;
    var stacheTailVertical = 0.075 * args.stacheLength;
    var stacheInsetPercent = 0.125 * (1 - args.stacheBreadth);

    if (args.stacheWeight > 1) {
        stacheApexHeightOffset *= 1 + (args.stacheWeight - 1 )/5;
    }

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

    strokeWeight(0.04 * args.stacheWeight);
    beginShape();
    makeVertices([
        stacheCentrePoint,
        addVectors(stacheCentrePoint, [0, -stacheApexHeightOffset])
    ]);
    endShape();
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
    else if (key == '@') {
        saveBlocksImages(true);
    }
}
