const colorFront1 = "#1677bc";
const colorFront2 = "#32c9b7";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
    // color/stroke setup
    stroke(colorFront2);
    strokeWeight(5);
    noFill();
    // A and B triangles
    triangle(letterData["Av1x"], letterData["Av1y"], letterData["Av2x"], letterData["Av2y"], letterData["Av3x"], letterData["Av3y"]);
    triangle(letterData["Bv1x"], letterData["Bv1y"], letterData["Bv2x"], letterData["Bv2y"], letterData["Bv3x"], letterData["Bv3y"]);
    // C triangle
    stroke(colorFront1);
    triangle(letterData["Cv1x"], letterData["Cv1y"], letterData["Cv2x"], letterData["Cv2y"], letterData["Cv3x"], letterData["Cv3y"]);



}

function interpolate_letter(percent, oldObj, newObj) {
    let new_letter = {};
    new_letter["Av1x"] = map(percent, 0, 100, oldObj["Av1x"], newObj["Av1x"]);
    new_letter["Av1y"] = map(percent, 0, 100, oldObj["Av1y"], newObj["Av1y"]);
    new_letter["Av2x"] = map(percent, 0, 100, oldObj["Av2x"], newObj["Av2x"]);
    new_letter["Av2y"] = map(percent, 0, 100, oldObj["Av2y"], newObj["Av2y"]);
    new_letter["Av3x"] = map(percent, 0, 100, oldObj["Av3x"], newObj["Av3x"]);
    new_letter["Av3y"] = map(percent, 0, 100, oldObj["Av3y"], newObj["Av3y"]);
    new_letter["Bv1x"] = map(percent, 0, 100, oldObj["Bv1x"], newObj["Bv1x"]);
    new_letter["Bv1y"] = map(percent, 0, 100, oldObj["Bv1y"], newObj["Bv1y"]);
    new_letter["Bv2x"] = map(percent, 0, 100, oldObj["Bv2x"], newObj["Bv2x"]);
    new_letter["Bv2y"] = map(percent, 0, 100, oldObj["Bv2y"], newObj["Bv2y"]);
    new_letter["Bv3x"] = map(percent, 0, 100, oldObj["Bv3x"], newObj["Bv3x"]);
    new_letter["Bv3y"] = map(percent, 0, 100, oldObj["Bv3y"], newObj["Bv3y"]);
    new_letter["Cv1x"] = map(percent, 0, 100, oldObj["Cv1x"], newObj["Cv1x"]);
    new_letter["Cv1y"] = map(percent, 0, 100, oldObj["Cv1y"], newObj["Cv1y"]);
    new_letter["Cv2x"] = map(percent, 0, 100, oldObj["Cv2x"], newObj["Cv2x"]);
    new_letter["Cv2y"] = map(percent, 0, 100, oldObj["Cv2y"], newObj["Cv2y"]);
    new_letter["Cv3x"] = map(percent, 0, 100, oldObj["Cv3x"], newObj["Cv3x"]);
    new_letter["Cv3y"] = map(percent, 0, 100, oldObj["Cv3y"], newObj["Cv3y"]);
    return new_letter;
}

var swapWords = [
    "TRIANGLE",
    "THEOBALD",
    "12345678"
]
