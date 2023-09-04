//DARK ORANGE
const colorFront1 = "#e8600b";
//RED
const colorFront2 = "#f24324";
//WHITE
const colorFront3 = "#ffcb8c";
//LIGTH ORANGE
const colorStroke = "#ffae00";
//BLUE
const colorFront4 = "#84b3ff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
    // color/stroke setup

    // draw two circles

    //background lines
    strokeWeight(1);

    //red lines
    stroke(colorFront2);
    fill(colorFront2);
    ellipse(50, 89, 1, 86);
    ellipse(30, 46, 40, 1);
    ellipse(73, 132, 45, 1);

    //orange lines
    stroke(colorFront1);
    ellipse(60, 67, 1, 75);
    ellipse(31, 35, 58, 1);
    ellipse(45, 117, 50, 1);

    //yellow lines
    stroke(colorStroke);
    ellipse(70, 84, 1, 120);
    ellipse(60, 24, 50, 1);

    //blue dots
    noStroke();
    fill(colorFront4);
    ellipse(20, 30, 5, 5);
    ellipse(37, 46, 10, 10);
    ellipse(65, 110, 5, 5);
    ellipse(74, 17, 5, 5);
    ellipse(25, 140, 5, 5);

    //letter ellipses
    strokeWeight(3);
    stroke(colorFront3);
    noFill();
    ellipse(letterData["c1x"], letterData["c1y"], letterData["size", "size"]);

    // side ellipse
    strokeWeight(1);
    noFill();
    ellipse(92, 80, 10, 10);

    //letter lines
    strokeWeight(1.5);
    line(letterData["lx"], letterData["ly"], letterData["lx_1"], letterData["ly_1"]);
    line(letterData["lx2"], letterData["ly2"], letterData["lx2_1"], letterData["ly2_1"]);
    line(letterData["lx3"], letterData["ly3"], letterData["lx3_1"], letterData["ly3_1"]);
    line(letterData["lx4"], letterData["ly4"], letterData["lx4_1"], letterData["ly4_1"]);



}

function interpolate_letter(percent, oldObj, newObj) {
    let new_letter = {};
    new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
    new_letter["lx_1"] = map(percent, 0, 100, oldObj["lx_1"], newObj["lx_1"]);
    new_letter["lx2_1"] = map(percent, 0, 100, oldObj["lx2_1"], newObj["lx2_1"]);
    new_letter["ly_1"] = map(percent, 0, 100, oldObj["ly_1"], newObj["ly_1"]);
    new_letter["ly2_1"] = map(percent, 0, 100, oldObj["ly2_1"], newObj["ly2_1"]);
    new_letter["c1x"] = map(percent, 0, 100, oldObj["c1x"], newObj["c1x"]);
    new_letter["c1y"] = map(percent, 0, 100, oldObj["c1y"], newObj["c1y"]);
    new_letter["lx"] = map(percent, 0, 100, oldObj["lx"], newObj["lx"]);
    new_letter["ly"] = map(percent, 0, 100, oldObj["ly"], newObj["ly"]);
    new_letter["lx2"] = map(percent, 0, 100, oldObj["lx2"], newObj["lx2"]);
    new_letter["ly2"] = map(percent, 0, 100, oldObj["ly2"], newObj["ly2"]);
    new_letter["lx3"] = map(percent, 0, 100, oldObj["lx3"], newObj["lx3"]);
    new_letter["ly3"] = map(percent, 0, 100, oldObj["ly3"], newObj["ly3"]);
    new_letter["lx3_1"] = map(percent, 0, 100, oldObj["lx3_1"], newObj["lx3_1"]);
    new_letter["ly3_1"] = map(percent, 0, 100, oldObj["ly3_1"], newObj["ly3_1"]);
    new_letter["lx4"] = map(percent, 0, 100, oldObj["lx4"], newObj["lx4"]);
    new_letter["ly4"] = map(percent, 0, 100, oldObj["ly4"], newObj["ly4"]);
    new_letter["lx4_1"] = map(percent, 0, 100, oldObj["lx4_1"], newObj["lx4_1"]);
    new_letter["ly4_1"] = map(percent, 0, 100, oldObj["ly4_1"], newObj["ly4_1"]);

    return new_letter;
}

var swapWords = [
    "SUNLIGHT",
    "LATEEFAH",
    "12345678"
]