/* these are optional special variables which will change the system */
var systemBackgroundColor = "#E3D7F0";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue = "#199cff";
const lightBlue = "#59ccff";
const strokeColor = "#233f11";


// colors
const white = "#FFFFFF";
const yellow = "#FFBA26";
const darkOrange = "#A54900";
const darkPink = "#A8409F";
const purple = "#7435A0";
const pink = "#D527B7";
const babyPink = "#FBB1FF";
const green = "#21C1B7";
const babyOrange = "#FEC68E";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

    stroke(strokeColor);
    strokeWeight(4);
    angleMode(DEGREES);
    noStroke();

    //parameters

    let sizeLetter = letterData["sizeLetter"];
    let sizeLetter1 = letterData["sizeLetter1"];
    let sizeLetter2 = letterData["sizeLetter2"];
    let sizeLetter3 = letterData["sizeLetter3"];
    let sizeLetter4 = letterData["sizeLetter4"];
    let pos2x = letterData["pos2x"];
    let pos2y = letterData["pos2y"];
    let pos3x = letterData["pos3x"];
    let pos3y = letterData["pos3y"];
    let pos4x = letterData["pos4x"];
    let pos4y = letterData["pos4y"];
    let pos5x = letterData["pos5x"];
    let pos5y = letterData["pos5y"];
    let pos6x = letterData["pos6x"];
    let pos6y = letterData["pos6y"];
    let angle = letterData["angle"];
    let start = letterData["start"];
    let start1 = letterData["start1"];
    let end = letterData["end"];
    let end1 = letterData["end1"];

    //-------------------------------------------------------

    // draw rectangle ---- body letters

    push();
    fill(pink);
    rect(pos4x, pos4y, sizeLetter1, sizeLetter2);
    pop();

    push();
    fill(pink);
    rect(pos5x, pos5y, sizeLetter1, sizeLetter2);
    pop();

    // texture pink lines vertical

    var linesVertical = true;
    if (linesVertical) {
        var gap = 5;
        var textureX = int(sizeLetter1 / gap);
        var textureY = int(sizeLetter2 / gap);

        push();
        for (var x = -2 + pos4x; x <= pos4x + (gap * textureX); x += gap) {
            for (var y = -2 + pos4y; y <= pos4y + (gap * textureY); y += gap) {
                noStroke();
                fill(darkPink);
                rect(x - 12, y + 1, 15, 2);
            }
        }
        pop();
    }

    // texture pink lines horizontal

    var linesHorizontal = true;
    if (linesHorizontal) {
        var gap = 5;
        var textureX = int(sizeLetter1 / gap);
        var textureY = int(sizeLetter2 / gap);

        push();
        for (var x = +pos5x; x <= pos5x + (gap * textureX); x += gap) {
            for (var y = 10 + pos5y; y <= pos5y + (gap * textureY); y += gap) {
                noStroke();
                fill(darkPink);
                rect(x - 1, y - 10.5, 2, 15);
            }
        }
        pop();
    }


    //draw arc purple

    push();
    fill(purple);
    arc(pos2x, pos2y, sizeLetter3, sizeLetter3, start, end);
    pop();


    // draw flower

    push();

    //petal
    push();
    fill(white);
    ellipse(pos3x - 6, pos3y + 9, sizeLetter - 20, sizeLetter - 15);
    ellipse(pos3x + 6, pos3y + 9, sizeLetter - 20, sizeLetter - 15);
    ellipse(pos3x - 6, pos3y - 9, sizeLetter - 20, sizeLetter - 15);
    ellipse(pos3x + 6, pos3y - 9, sizeLetter - 20, sizeLetter - 15);
    ellipse(pos3x - 12, pos3y, sizeLetter - 15, sizeLetter - 20);
    ellipse(pos3x + 12, pos3y, sizeLetter - 15, sizeLetter - 20);
    pop();

    //circle
    fill(yellow);
    ellipse(pos3x, pos3y, sizeLetter - 10, sizeLetter - 10);

    //face
    push();

    fill(darkOrange);
    ellipse(pos3x - 6, pos3y - 3, sizeLetter - 31, sizeLetter - 31);
    ellipse(pos3x + 6, pos3y - 3, sizeLetter - 31, sizeLetter - 31);
    arc(pos3x, pos3y + 3, sizeLetter - 22, sizeLetter - 22, 360, 180);
    pop();
    pop();


    // draw arc and change color for size

    var colorLine = sizeLetter4;
    if (colorLine) {
        push();
        noFill();

        if (colorLine > 0 && colorLine <= 20) {
            stroke(babyOrange);
        } else if (colorLine > 20 && colorLine < 40) {
            stroke(yellow);
        } else if (colorLine > 40 && colorLine < 60) {
            stroke(babyPink);
        } else if (colorLine > 60 && colorLine < 80) {
            stroke(green);
        } else {
            stroke(white);
        }
        strokeWeight(4);
        arc(pos6x, pos6y, sizeLetter4, sizeLetter4, start1, end1);
        pop();
    }
}

function interpolate_letter(percent, oldObj, newObj) {
    let new_letter = {};
    new_letter["sizeLetter"] = map(percent, 0, 100, oldObj["sizeLetter"], newObj["sizeLetter"]);
    new_letter["sizeLetter1"] = map(percent, 0, 100, oldObj["sizeLetter1"], newObj["sizeLetter1"]);
    new_letter["sizeLetter2"] = map(percent, 0, 100, oldObj["sizeLetter2"], newObj["sizeLetter2"]);
    new_letter["sizeLetter3"] = map(percent, 0, 100, oldObj["sizeLetter3"], newObj["sizeLetter3"]);
    new_letter["sizeLetter4"] = map(percent, 0, 100, oldObj["sizeLetter4"], newObj["sizeLetter4"]);
    new_letter["pos2x"] = map(percent, 0, 100, oldObj["pos2x"], newObj["pos2x"]);
    new_letter["pos2y"] = map(percent, 0, 100, oldObj["pos2y"], newObj["pos2y"]);
    new_letter["pos3x"] = map(percent, 0, 100, oldObj["pos3x"], newObj["pos3x"]);
    new_letter["pos3y"] = map(percent, 0, 100, oldObj["pos3y"], newObj["pos3y"]);
    new_letter["pos4x"] = map(percent, 0, 100, oldObj["pos4x"], newObj["pos4x"]);
    new_letter["pos4y"] = map(percent, 0, 100, oldObj["pos4y"], newObj["pos4y"]);
    new_letter["pos5x"] = map(percent, 0, 100, oldObj["pos5x"], newObj["pos5x"]);
    new_letter["pos5y"] = map(percent, 0, 100, oldObj["pos5y"], newObj["pos5y"]);
    new_letter["pos6x"] = map(percent, 0, 100, oldObj["pos6x"], newObj["pos6x"]);
    new_letter["pos6y"] = map(percent, 0, 100, oldObj["pos6y"], newObj["pos6y"]);
    new_letter["start"] = map(percent, 0, 100, oldObj["start"], newObj["start"]);
    new_letter["start1"] = map(percent, 0, 100, oldObj["start1"], newObj["start1"]);
    new_letter["end"] = map(percent, 0, 100, oldObj["end"], newObj["end"]);
    new_letter["end1"] = map(percent, 0, 100, oldObj["end1"], newObj["end1"]);
    return new_letter;
}

var swapWords = [
    "POW3RFLO",
    "SMILE!",
    "BYGUADA",
    "FLOWERS!",
    "PROYECT2"
]