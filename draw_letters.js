// Sets constants/variables
const honeycombFill = "#FFC748";
const colorStroke = "#FFEFC1";
let verticalShift = 68;
let horizontalShift = 60;

// Draw the letter given the letterData
function drawLetter(letterData) {
    // sets parameters
    let hex1_size = letterData["1size"];
    let hex1_xPos = 50 + letterData["1xPos"];
    let hex1_yPos = 100 + letterData["1yPos"];
    
    let hex2_size = letterData["2size"];
    let hex2_xPos = 0 + letterData["2xPos"];
    let hex2_yPos = 0 + letterData["2yPos"];
    
    let hex3_size = letterData["3size"];
    let hex3_xPos = 0 + letterData["3xPos"];
    let hex3_yPos = 0 + letterData["3yPos"];

    // Draws hexagon
    fill(honeycombFill);
    stroke(colorStroke);
    draw_hex();
}

// Makes hexagon shape
function draw_hex(hex1_xPos, hex1_yPos) {
    push();
    translate(hex1_xPos, hex1_yPos);
    strokeWeight(4);
    beginShape();
    vertex(0, -34);
    vertex(40, -34);
    vertex(19, 0);
    vertex(40, 34);
    vertex(-0, 34);
    vertex(-19, 0);
    endShape(CLOSE);
    pop();
}


function interpolate_letter(percent, oldObj, newObj) {
    let new_letter = {};
    new_letter["1size"] = map(percent, 0, 100, oldObj["1size"], newObj["1size"]);
    new_letter["1xPos"] = map(percent, 0, 100, oldObj["1xPos"], newObj["1xPos"]);
    new_letter["1yPos"] = map(percent, 0, 100, oldObj["1yPos"], newObj["1yPos"]);
    return new_letter;
}

var swapWords = [
    "ABBAABBA",
    "CAB?CAB?",
    "BAAAAAAA"
]