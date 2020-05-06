const colorFront1  = "#454342";
const colorFront2  = "#36d6ac";
const colorFront3  = "#f0c85b";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {


  angleMode(DEGREES)


  let size1 = letterData["size1"];
  let size1cont = letterData["size1cont"];
  let xpos1 = letterData["offsetx1"];
  let xpos1cont = letterData["offsetx1cont"];
  let ypos1 = letterData["offsety1"]/(size1/2) * -size1 * tan(30);
  let ypos1cont = letterData["offsety1cont"]/(size1/2) * -size1 * tan(30);


  let size2 = letterData["size2"];
  let size2cont = letterData["size2cont"];
  let xpos2 = letterData["offsetx2"];
  let xpos2cont = letterData["offsetx2cont"];
  let ypos2 = letterData["offsety2"]/(size2/2) * -size2 * tan(30);
  let ypos2cont = letterData["offsety2cont"]/(size2/2) * -size2 * tan(30);


  let size3 = letterData["size3"];
  let size3cont = letterData["size3cont"];
  let xpos3 = letterData["offsetx3"];
  let xpos3cont = letterData["offsetx3cont"];
  let ypos3 = letterData["offsety3"]/(size3/2) * -size3 * tan(30);
  let ypos3cont = letterData["offsety3cont"]/(size3/2) * -size3 * tan(30);


  noStroke()
  let yamm1 = size1 * tan(30)
  let yamm1cont = size1cont * tan(30)
  let yamm2 = size2 * tan(30)
  let yamm2cont = size2cont * tan(30)
  let yamm3 = size3 * tan(30)
  let yamm3cont = size3cont * tan(30)
  let xcentre = 50
  let ycentre = 100


// Front-Right Face
  fill(colorFront1);

  beginShape()

  vertex(xcentre + xpos1, ycentre + ypos1)
  vertex(xcentre + xpos1 + size1, ycentre + ypos1 - yamm1)
  vertex(xcentre + xpos1 + size1, ycentre + ypos1 + yamm1)
  vertex(xcentre + xpos1, ycentre + ypos1 + 2 * yamm1)

    beginContour()

    vertex(xcentre + xpos1cont, ycentre + ypos1cont)
    vertex(xcentre + xpos1cont, ycentre + ypos1cont + 2 * yamm1cont)
    vertex(xcentre + xpos1cont + size1cont, ycentre + ypos1cont + yamm1cont)
    vertex(xcentre + xpos1cont + size1cont, ycentre + ypos1cont - yamm1cont)

    endContour(CLOSE)
  
  endShape(CLOSE)


// Front-Left Face
  fill(colorFront2);

  beginShape()

  vertex(xcentre + xpos2, ycentre + ypos2)
  vertex(xcentre + xpos2 - size2, ycentre + ypos2 - yamm2)
  vertex(xcentre + xpos2 - size2, ycentre + ypos2 + yamm2)
  vertex(xcentre + xpos2, ycentre + ypos2 + 2 * yamm2)

  beginContour()

    vertex(xcentre + xpos2cont, ycentre + ypos2cont)
    vertex(xcentre + xpos2cont, ycentre + ypos2cont + 2 * yamm2cont)
    vertex(xcentre + xpos2cont - size2cont, ycentre + ypos2cont + yamm2cont)
    vertex(xcentre + xpos2cont - size2cont, ycentre + ypos2cont - yamm2cont)
    
    endContour(CLOSE)

  endShape(CLOSE)

  // Top Face
  fill(colorFront3);

  beginShape()

  vertex(xcentre + xpos3, ycentre + ypos3)
  vertex(xcentre + xpos3 + size3, ycentre + ypos3 - yamm3)
  vertex(xcentre + xpos3, ycentre + ypos3 - 2 * yamm3)
  vertex(xcentre + xpos3 - size3, ycentre + ypos3 - yamm3)

    beginContour()

    vertex(xcentre + xpos3cont, ycentre + ypos3cont)
    vertex(xcentre + xpos3cont - size3cont, ycentre + ypos3cont - yamm3cont)
    vertex(xcentre + xpos3cont, ycentre + ypos3cont - 2 * yamm3cont)
    vertex(xcentre + xpos3cont + size3cont, ycentre + ypos3cont - yamm3cont)

    endContour(CLOSE)

  endShape(CLOSE)

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size1"]    = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["size1cont"]    = map(percent, 0, 100, oldObj["size1cont"], newObj["size1cont"]);

  new_letter["size2"]    = map(percent, 0, 100, oldObj["size2"], newObj["size2"]);
  new_letter["size2cont"]    = map(percent, 0, 100, oldObj["size2cont"], newObj["size2cont"]);

  new_letter["size3"]    = map(percent, 0, 100, oldObj["size3"], newObj["size3"]);
  new_letter["size3cont"]    = map(percent, 0, 100, oldObj["size3cont"], newObj["size3cont"]);

  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsetx1cont"] = map(percent, 0, 100, oldObj["offsetx1cont"], newObj["offsetx1cont"]);

  new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
  new_letter["offsety1cont"] = map(percent, 0, 100, oldObj["offsety1cont"], newObj["offsety1cont"]);

  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsetx2cont"] = map(percent, 0, 100, oldObj["offsetx2cont"], newObj["offsetx2cont"]);

  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsety2cont"] = map(percent, 0, 100, oldObj["offsety2cont"], newObj["offsety2cont"]);

  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsetx3cont"] = map(percent, 0, 100, oldObj["offsetx3cont"], newObj["offsetx3cont"]);

  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offsety3cont"] = map(percent, 0, 100, oldObj["offsety3cont"], newObj["offsety3cont"]);
  return new_letter;
  return new_letter;
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]