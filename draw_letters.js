// Sets constants/variables
const honeycombFill = "#FFC748";
const colorStroke = "#FFEFC1";

// Draw the letter given the letterData
function drawLetter(letterData) {
    angleMode(DEGREES);
    
    // Sets parameters
    let hex1_xPos = letterData["1xPos"];
    let hex1_yPos = letterData["1yPos"];

    let hex2_xPos = letterData["2xPos"];
    let hex2_yPos = letterData["2yPos"];

    let hex3_xPos = letterData["3xPos"];
    let hex3_yPos = letterData["3yPos"];

    let hex4_xPos = letterData["4xPos"];
    let hex4_yPos = letterData["4yPos"];

    let hex5_xPos = letterData["5xPos"];
    let hex5_yPos = letterData["5yPos"];

    let hex6_xPos = letterData["6xPos"];
    let hex6_yPos = letterData["6yPos"];

    let hex7_xPos = letterData["7xPos"];
    let hex7_yPos = letterData["7yPos"];

    let hex8_xPos = letterData["8xPos"];
    let hex8_yPos = letterData["8yPos"];

    let hex9_xPos = letterData["9xPos"];
    let hex9_yPos = letterData["9yPos"];

    // Draws 9 hexagons
    fill(honeycombFill);
    stroke(colorStroke);
    draw_hex(hex1_xPos, hex1_yPos);
    draw_hex(hex2_xPos, hex2_yPos);
    draw_hex(hex3_xPos, hex3_yPos);
    draw_hex(hex4_xPos, hex4_yPos);
    draw_hex(hex5_xPos, hex5_yPos);
    draw_hex(hex6_xPos, hex6_yPos);
    draw_hex(hex7_xPos, hex7_yPos);
    draw_hex(hex8_xPos, hex8_yPos);
    draw_hex(hex9_xPos, hex9_yPos);
}

// Makes hexagon shape
function draw_hex(hex1_xPos, hex1_yPos) {
    angleMode(DEGREES);
    push();
    translate(hex1_xPos, hex1_yPos);
    rotate(30);
    strokeWeight(4);
    beginShape();
    for (i = 0; i < 6; i++) { // Makes all sides equal
        ang = i * (360 / 6);
        xVertex = sin(ang) * 15;
        yVertex = cos(ang) * 15;
        vertex(xVertex, yVertex);
    }
    endShape(CLOSE);
    pop();
}

// Creates transitions between letters
function interpolate_letter(percent, oldObj, newObj) {
    let new_letter = {};
    new_letter["1xPos"] = map(percent, 0, 100, oldObj["1xPos"], newObj["1xPos"]);
    new_letter["1yPos"] = map(percent, 0, 100, oldObj["1yPos"], newObj["1yPos"]);
    new_letter["2xPos"] = map(percent, 0, 100, oldObj["2xPos"], newObj["2xPos"]);
    new_letter["2yPos"] = map(percent, 0, 100, oldObj["2yPos"], newObj["2yPos"]);
    new_letter["3xPos"] = map(percent, 0, 100, oldObj["3xPos"], newObj["3xPos"]);
    new_letter["3yPos"] = map(percent, 0, 100, oldObj["3yPos"], newObj["3yPos"]);
    new_letter["4xPos"] = map(percent, 0, 100, oldObj["4xPos"], newObj["4xPos"]);
    new_letter["4yPos"] = map(percent, 0, 100, oldObj["4yPos"], newObj["4yPos"]);
    new_letter["5xPos"] = map(percent, 0, 100, oldObj["5xPos"], newObj["5xPos"]);
    new_letter["5yPos"] = map(percent, 0, 100, oldObj["5yPos"], newObj["5yPos"]);
    new_letter["6xPos"] = map(percent, 0, 100, oldObj["6xPos"], newObj["6xPos"]);
    new_letter["6yPos"] = map(percent, 0, 100, oldObj["6yPos"], newObj["6yPos"]);
    new_letter["7xPos"] = map(percent, 0, 100, oldObj["7xPos"], newObj["7xPos"]);
    new_letter["7yPos"] = map(percent, 0, 100, oldObj["7yPos"], newObj["7yPos"]);
    new_letter["8xPos"] = map(percent, 0, 100, oldObj["8xPos"], newObj["8xPos"]);
    new_letter["8yPos"] = map(percent, 0, 100, oldObj["8yPos"], newObj["8yPos"]);
    new_letter["9xPos"] = map(percent, 0, 100, oldObj["9xPos"], newObj["9xPos"]);
    new_letter["9yPos"] = map(percent, 0, 100, oldObj["9yPos"], newObj["9yPos"]);
    return new_letter;
}

// My chosen placeholder words
var swapWords = [
    "HUNICOMB",
    "MUCHBEES",
    "MANYCUTE",
    "SO HONEY"
]
