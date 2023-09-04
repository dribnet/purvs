/* these are optional special variables which will change the system */
var systemBackgroundColor = (0);
var systemLineColor = (250);
var systemBoxColor = (250);


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  noFill();
  strokeWeight(5);
  angleMode(DEGREES);
  colorMode(HSB);

  let arc1 = letterData["arcStart"]; //angle to start the arc  
  let arc2 = letterData["arcEnd"]; //angle to finish the arc  
  let tri1 = letterData["triX"]; //X position of triangle
  let tri2 = letterData["triY"]; //Y position of triangle 
  let tri3 = letterData["triR"]; //Rotation of triangle  
  let tri4 = letterData["triH"]; //Height of triangle  
  let tri5 = letterData["triW"]; //Width of triangle   
  let line1 = letterData["lineX"]; //X position of wave  
  let line2 = letterData["lineY"]; //Y position of wave 
  let line3 = letterData["lineR"]; //Rotation of wave  
  let line4 = letterData["wave"]; //Density of wave  
  let line5 = letterData["waveH"]; //Length of wave

  //draw arc
  stroke(334, 93, 100);
  customarc(arc1, arc2);
  //draw the bluest triangle 
  strokeWeight(5);
  stroke(177, 100, 100);
  customtriangle(tri1, tri2, tri3, tri4, tri5);
  //this section draws the shadow of the triangles
  strokeWeight(4);
  stroke(177, 50, 100, 0.5);
  customtriangle(tri1 - 5, tri2 - 5, tri3, tri4 + 5, tri5 + 5);

  blendMode(REMOVE); //this mode makes the colour whiter
  strokeWeight(2);
  stroke(177, 60, 100, 0.5);
  customtriangle(tri1 - 10, tri2 - 10, tri3, tri4 + 10, tri5 + 10);

  strokeWeight(1.5);
  stroke(177, 50, 100, 0.4);
  customtriangle(tri1 + 5, tri2 + 5, tri3, tri4 - 5, tri5 - 5);

  stroke(177, 40, 100, 0.4);
  customtriangle(tri1 + 10, tri2 + 10, tri3, tri4 - 10, tri5 - 10);
  // triangle section ends

  //draw wave
  customwave(line1, line2, line3, line4, line5);

}

function customarc(arc1, arc2) {
  push();

  //this draws the blue glow
  strokeWeight(18);
  stroke(177, 30, 100, 0.2);
  arc(50, 100, 85, 85, arc1, arc2, PIE);

  //this draws the pink glow
  strokeWeight(12);
  stroke(334, 70, 100, 0.4);
  arc(50, 100, 85, 85, arc1, arc2, PIE);

  //this draws the pink stroke
  stroke(334, 93, 100);
  strokeWeight(5);
  arc(50, 100, 85, 85, arc1, arc2, PIE);

  //this draws the white stroke
  strokeWeight(2);
  stroke(250);
  arc(50, 100, 85, 85, arc1, arc2, PIE);

  pop();
}

function customtriangle(tri1, tri2, tri3, tri4, tri5) {
  strokeCap(ROUND);
  // original code taken from Programming Design Systems chapter 5 Procedural Shapes
  push();
  //number of edges for this polygone
  var numVertices = 3;
  //sum of the angles
  const spacing = 360 / numVertices;
  //this determines the XY position and the rotation of the triangle
  translate(tri1, tri2);
  rotate(tri3);
  //draw triangle using cosin
  beginShape();
  for (let i = 0; i <= numVertices; i++) {
    const x = cos((i * spacing)) * tri4;
    const y = sin((i * spacing)) * tri5;
    vertex(x, y);
  }
  endShape();
  //finish draw
  pop();

}

function customwave(line1, line2, line3, line4, line5) {
  //this blend mode makes cool effect
  blendMode(LIGHTEST);

  //draw sin wave
  push();
  strokeWeight(5);
  stroke(57, 98, 100);
  //this determines the XY position and the rotation of the wave
  translate(line1, line2);
  rotate(line3);
  //original code taken from Programming Design Systems chapter 5 Procedural Shapes
  beginShape();
  for (let i = 0; i < line4; i++) {
    const x = i * 2;
    const y = sin(i * 2) * 100;
    vertex(x / line5, y / 14);
  }
  endShape();
  pop();

  //draw a brighter green that offsets the original wave
  push();
  strokeWeight(3);
  stroke(90, 28, 100, 1);
  translate(line1 + 4, line2 + 4);
  rotate(line3);
  beginShape();
  for (let i = 0; i < line4; i++) {
    const x = i * 2;
    const y = sin(i * 2) * 100;
    vertex((x / line5), (y / 14));
  }
  endShape();
  pop();

  //draw a brighter yellow over the original
  push();
  strokeWeight(2);
  stroke(90, 40, 100);
  translate(line1, line2);
  rotate(line3);
  beginShape();
  for (let i = 0; i < line4; i++) {
    const x = i * 2;
    const y = sin(i * 2) * 100;
    vertex((x / line5), (y / 14));
  }
  endShape();
  pop();
}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let defaultChar = getObjFromChar("default");
  //this is the target wave density
  let targetwave = 20;
  //this is the target wave length
  let targetwaveH = 5;
  //this is the target traingle height
  let targettriH = 90;

  // this will allow the arc to turn into a full circle during interpolation 
  if (percent < 50) {
    new_letter["arcStart"] = map(percent, 0, 50, oldObj["arcStart"], defaultChar["arcStart"]);
    new_letter["arcEnd"] = map(percent, 0, 50, oldObj["arcEnd"], defaultChar["arcEnd"]);
  } else {
    new_letter["arcStart"] = map(percent, 51, 100, defaultChar["arcStart"], newObj["arcStart"]);
    new_letter["arcEnd"] = map(percent, 51, 100, defaultChar["arcEnd"], newObj["arcEnd"]);

  }

  // this will let the triangle to grow bigger and smaller during interpolation
  //this will also let the wave to grow from a shorter length to its target alphabet length
  if (percent < 40) {
    new_letter["triH"] = map(percent, 0, 40, oldObj["triH"], targettriH);
    new_letter["wave"] = map(percent, 0, 40, oldObj["wave"], targetwave);
    new_letter["waveH"] = map(percent, 0, 40, oldObj["waveH"], targetwaveH);
  } else {
    new_letter["triH"] = map(percent, 41, 100, targettriH, defaultChar["triH"]);
    new_letter["wave"] = map(percent, 41, 100, targetwave, newObj["wave"]);
    new_letter["waveH"] = map(percent, 41, 100, targetwaveH, newObj["waveH"]);
  }

  new_letter["triX"] = map(percent, 30, 100, oldObj["triX"], newObj["triX"]);
  new_letter["triY"] = map(percent, 30, 100, oldObj["triY"], newObj["triY"]);
  new_letter["triW"] = map(percent, 0, 100, defaultChar["triW"], newObj["triW"]);
  new_letter["triR"] = map(percent, 0, 100, oldObj["triR"], newObj["triR"]);
  new_letter["lineX"] = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  new_letter["lineY"] = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
  new_letter["lineR"] = map(percent, 40, 100, oldObj["lineR"], newObj["lineR"]);

  return new_letter;
}

var swapWords = [
  "PARTYPOP",
  "CVIVIANC",
  "LIGHTING",
  "GLOWYDAY",
  "12345678",
  "SHADING!",
  "NEONGLOW",
  "NIGHTOWL",
  "04292021",
  "!FRIDAY!",
  "RRSSGGFF",
  "DARKNESS",
  "ELECTRIC",
  "POPCORN!",
  "MOOOOOON"
]