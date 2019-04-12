

const colorStroke  = "#233f11";
const colorBody  = "#199cff";
const bugSize = 25;


/**
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

let nextPoints = [];
let offset = 0;
function drawLetter(letterData) {

    let maxLineBugs = 3;
    let numLineBugs = letterData["numLineBugs"];

    let numSplineBugs = 6;

    let bugSpacing = bugSize;
    let splinePoints = [];
    let linePoints = [];

    // set the modes
    angleMode(DEGREES);
    ellipseMode(CENTER);
    rectMode(CENTER);
    colorMode(HSB);
    curveTightness(-2);

    // read the letter data into an easier to manage data structure.
    // First we have the spline points
    splinePoints.push({x: letterData["point1_x"], y: letterData["point1_y"]});
    splinePoints.push({x: letterData["point2_x"], y: letterData["point2_y"]});
    splinePoints.push({x: letterData["point3_x"], y: letterData["point3_y"]});
    splinePoints.push({x: letterData["point4_x"], y: letterData["point4_y"]});

    // line points
    linePoints.push({x: letterData["point5_x"], y: letterData["point5_y"]});
    linePoints.push({x: letterData["point6_x"], y: letterData["point6_y"]});


    // let offset = letterData["offset"];

    // create a boolean to see if we're moving
    let currentlyMoving = nextPoints.length > 0;
    let nextOffset;
    let nextLinePoints = [];
    if (currentlyMoving) {
        nextOffset = nextPoints.pop();
        nextLinePoints.push(nextPoints.pop());
        nextLinePoints.push(nextPoints.pop());

    }


    for (let i = numSplineBugs + maxLineBugs; i >= 0; i--) {
        /** offset calculation */
        let xOffset = map(sin(offset+offset*((i-2)*-6)), -1, 1, -25, 25);
        let yOffset = map(sin(offset+offset*((i+4)*4)), -1, 1, -25, 25);


        /** position calculation */
        let pos;
        let t;
        // if we're currently doing the straight line points, use the line function
        if (i >= numSplineBugs){
            // the modulo is to wrap the bugs around and draw them on top of each other if
            // we want to display less than the max amount of bugs
            t = ((i - numSplineBugs) % numLineBugs) / (numLineBugs- 1);
            pos = parametricLine(linePoints, splinePoints, t);
        } else {
            t = i / (numSplineBugs - 1) * 3;
            pos = parametricSpline(splinePoints, t);
        }

        pos.add(xOffset, yOffset);

        /** angle calculation */
        // choose the next position based on whether or not we're moving and whether or not we're currently
        // looping over the line points or the spline points
        let nextPos;
        if (currentlyMoving){
            let nextOffsetX = map(sin(nextOffset+nextOffset*((i-2)*-6)), -1, 1, -25, 25);
            let nextOffsetY = map(sin(nextOffset+nextOffset*((i+4)*4)), -1, 1, -25, 25);
            // find the current bug position along the spline points that govern the next position
            if (i >= numSplineBugs){
                nextPos = parametricLine(nextLinePoints, nextPoints,  t);
            } else {
                nextPos = parametricSpline(nextPoints, t);
            }
            nextPos.add(nextOffsetX, nextOffsetY);

        } else {
            // find the next position along this curve and add the offset
            if (i >= numSplineBugs){
                nextPos = parametricLine(linePoints, splinePoints, t + 0.2);
            } else {
                nextPos = parametricSpline(splinePoints, t + 0.2);
            }
            nextPos.add(xOffset, yOffset);

        }

        // get the direction vector that the bug is supposed to be facing toward
        let directionVector = p5.Vector.sub(nextPos, pos);
        // get the angle
        let angle = directionVector.heading() + 90;

        /** color calculation */
        let col = color(360.0 / (numSplineBugs+maxLineBugs) * (i), 100, 100);
        drawBug(pos.x, pos.y, angle, col);
    }

    // reset modes for the rest of the applications
    colorMode(RGB);
    angleMode(RADIANS);
    ellipseMode(CENTER);
    rectMode(CORNER);

    // save the points for next time
    nextPoints = [];
    // reset the offset
    offset = 0;

}

/** ================================ Draw Letter Helper Functions ================================ */

function parametricSpline(points, t){

    let i = floor(t);
    let p1 = points[i % 4];
    let p2 = points[(i + 1) % 4];
    let p3 = points[(i + 2) % 4];
    let p4 = points[(i + 3) % 4];
    // extract the numbers after the decimal point
    t = t%1;
    let x = curvePoint(p1.x, p2.x, p3.x, p4.x, t);
    let y = curvePoint(p1.y, p2.y, p3.y, p4.y, t);
    return createVector(x, y);

}

// this function uses the spline points to give a gentle curve to the straight line
function parametricLine(linePoints, splinePoints, t) {
    // spline points
    let p1 = splinePoints[0];
    let p4 = splinePoints[3];

    // line points
    let p2 = linePoints[0];
    let p3 = linePoints[1];

    t = t%1.01;
    let x = curvePoint(p1.x, p2.x, p3.x, p4.x, t);
    let y = curvePoint(p1.y, p2.y, p3.y, p4.y, t);
    return createVector(x, y);


}



function drawBug(posX, posY, orient, color) {
    stroke(0,0,0);
    strokeWeight(2);
    // move and rotate but to correct position
    push();
    translate(posX, posY);
    rotate(orient);
    push();

    // draw the eyes
    fill(255);
    push();
    rotate(13);
    ellipse(0, -bugSize / 1.8, bugSize / 5, bugSize / 5);
    pop();
    rotate(-13);
    ellipse(0, -bugSize / 1.8, bugSize / 4.7, bugSize / 4.7);
    pop();
    
    // draw the body
    fill(colorBody);
    rect(0, 0, bugSize * 0.9, bugSize, bugSize / 3);

    // draw the dots
    fill(color);
    ellipse(bugSize / 5, bugSize / 4, bugSize / 5, bugSize / 5);
    ellipse(bugSize / 5, -bugSize / 5, bugSize / 3.8, bugSize / 3.8);
    ellipse(-bugSize / 5, bugSize / 10, bugSize / 3, bugSize / 3);

    // draw legs
    noFill();
    for (let j = -1; j < 2; j += 2) {
        let currentX = j * bugSize / 2.2;
        let currentY = -bugSize / 2.2;
        for (let i = 0; i < 4; i++) {
            currentY += bugSize * 0.17;
            push();
            translate(currentX, currentY);
            rotate(map(sin(offset*(i+2) + 1.66 * (i+1)), -1, 1, -90, 90));
            beginShape();
            vertex(0,0);
            vertex( j * bugSize * 0.06, -bugSize * 0.02);
            vertex( j * bugSize * 0.13,  bugSize * 0.03);
            endShape();
            pop();
        }
    }

    pop();

}



/** ================================ Interpolate Letter Functions ================================ */

let scatterPoints = [];

function interpolate_letter(percent, oldObj, newObj) {

    // calculate the in-between scatter points using the old and new objects as 'seeds'
    let semiRand = oldObj["point4_y"] * newObj["point3_x"] + oldObj["point1_y"] * newObj["point2_x"];
    for (let i = 0; i < 6; i++) {
        let xOffset = map(sin(semiRand * (i+1) + semiRand *3), -1, 1, 15, 85);
        let yOffset = map(sin(semiRand * (i+1) + semiRand*21), -1, 1, 100, 190);
        scatterPoints[i] = createVector(xOffset, yOffset);
    }



    // let newPercent = InOutQuadratic(percent/100)*100;
    let newPercent = percent;
    let obj = {};
    // spline points
    obj["point1_x"] = conjoinedInterp(newPercent, oldObj["point1_x"], newObj["point1_x"], scatterPoints[0].x);
    obj["point1_y"] =  conjoinedInterp(newPercent, oldObj["point1_y"], newObj["point1_y"], scatterPoints[0].y);
    obj["point2_x"] =  conjoinedInterp(newPercent, oldObj["point2_x"], newObj["point2_x"], scatterPoints[1].x);
    obj["point2_y"] = conjoinedInterp(newPercent,  oldObj["point2_y"], newObj["point2_y"], scatterPoints[1].y);
    obj["point3_x"] = conjoinedInterp(newPercent,  oldObj["point3_x"], newObj["point3_x"], scatterPoints[2].x);
    obj["point3_y"] =  conjoinedInterp(newPercent,  oldObj["point3_y"], newObj["point3_y"], scatterPoints[2].y);
    obj["point4_x"] =  conjoinedInterp(newPercent,  oldObj["point4_x"], newObj["point4_x"], scatterPoints[3].x);
    obj["point4_y"] =  conjoinedInterp(newPercent,  oldObj["point4_y"], newObj["point4_y"], scatterPoints[3].y);

    // straight line points
    obj["point5_x"] =  conjoinedInterp(newPercent,  oldObj["point5_x"], newObj["point5_x"], scatterPoints[4].x);
    obj["point5_y"] =  conjoinedInterp(newPercent,  oldObj["point5_y"], newObj["point5_y"], scatterPoints[4].y);
    obj["point6_x"] =  conjoinedInterp(newPercent,  oldObj["point6_x"], newObj["point6_x"], scatterPoints[5].x);
    obj["point6_y"] =  conjoinedInterp(newPercent,  oldObj["point6_y"], newObj["point6_y"], scatterPoints[5].y);

    // number of bugs to display on the line
    obj["numLineBugs"] =  map(newPercent, 0, 100, oldObj["numLineBugs"], newObj["numLineBugs"]);


    // offset for scattering
    offset = conjoinedInterp(percent, 0, 0, PI);

    // interpolating
    if (percent > 1 && percent < 100){
        nextPoints = calcPoints(percent + 5, oldObj, newObj);
    } else {
        nextPoints = [];
    }


    return obj;
}

function conjoinedInterp(percent, oldNum, newNum, midNum) {
    if (percent < 51){
        // percent = InOutQuadratic(percent/50) * 50;
        return map(percent, 0, 50, oldNum, midNum);
    } else {
        // percent = InOutQuadratic(percent/100) * 100;
        return map(percent%51, 1, 50, midNum, newNum);
    }
}

function calcPoints(percent, oldObj, newObj){
    let points = [];
    points[0] = createVector(conjoinedInterp( percent, oldObj["point1_x"], newObj["point1_x"], scatterPoints[0].x),
        conjoinedInterp( percent, oldObj["point1_y"], newObj["point1_y"], scatterPoints[0].y));
    points[1] = createVector(conjoinedInterp( percent, oldObj["point2_x"], newObj["point2_x"], scatterPoints[1].x),
        conjoinedInterp( percent,  oldObj["point2_y"], newObj["point2_y"], scatterPoints[1].y));
    points[2] = createVector(conjoinedInterp( percent,  oldObj["point3_x"], newObj["point3_x"], scatterPoints[2].x),
        conjoinedInterp( percent,  oldObj["point3_y"], newObj["point3_y"], scatterPoints[2].y));
    points[3] = createVector(conjoinedInterp( percent, oldObj["point4_x"], newObj["point4_x"], scatterPoints[3].x),
        conjoinedInterp( percent, oldObj["point4_y"], newObj["point4_y"], scatterPoints[3].y));
    points[4] = createVector(conjoinedInterp( percent, oldObj["point5_x"], newObj["point5_x"], scatterPoints[3].x),
        conjoinedInterp( percent, oldObj["point5_y"], newObj["point5_y"], scatterPoints[3].y));
    points[5] = createVector(conjoinedInterp( percent, oldObj["point6_x"], newObj["point6_x"], scatterPoints[3].x),
        conjoinedInterp( percent, oldObj["point6_y"], newObj["point6_y"], scatterPoints[3].y));
    
    points[6] = conjoinedInterp(percent, 0, 0, PI);
    return points;
}

var swapWords = [
    "BUGWORLD",
    "BUGSBUGS",
    "SKITTERS",
    "TOGETHER"
]

// Smooth animation functions borrowed from Michaelangel007's excellent writeup
// https://github.com/Michaelangel007/easing/blob/master/js/core/easing.js
function InOutQuadratic(p) { var m=p-1,t=p*2; if (t < 1) return p*t; return 1-m*m  *  2; }
function InOutCubic     (p) { var m=p-1,t=p*2; if (t < 1) return p*t*t;           return 1+m*m*m *  4; }
function InOutQuartic   (p) { var m=p-1,t=p*2; if (t < 1) return p*t*t*t;     return 1-m*m*m*m *  8; }

