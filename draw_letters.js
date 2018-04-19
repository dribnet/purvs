/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // Triangle Variables
  let fill1 = letterData["topFill"];
  let fill2 = letterData["rightFill"];
  let fill3 = letterData["bottomFill"];
  let fill4 = letterData["leftFill"];
    
  let fill5 = letterData["SquareFill"];

  // Quad Variables
  let quadPosX = letterData["quadHorozontal"];
  let quadPosY = letterData["quadVerticle"];
    
  // Cross line variables
  let stroke1 = letterData["strokeUp"];
  let stroke2 = letterData["strokeDown"];
    
  // Draw Triangles (4 Parameters) 
  // * ========================= *
  noStroke();
  let totalSize = 2;                   // Scale of letter as a whole
  let triSize = 30 * totalSize;        // Make size relative to totalSize  
  push();  
  translate(50, 100);
scale(0.75,0.75);
  //TOP TRIANGLE\\
  fill(fill1); 
  triangle(- triSize,- triSize, 0, 0, + triSize, - triSize);
    
  //RIGHT TRIANGLE\\    
  fill(fill2);
  triangle(+ triSize, + triSize, 0, 0, + triSize, - triSize);
    
  //BOTTOM TRIANGLE    
  fill(fill3);
  triangle(- triSize, + triSize, 0, 0, + triSize, + triSize);
    
  //LEFT TRIANGLE  
  fill(fill4);
  triangle(- triSize, - triSize, 0, 0, - triSize, + triSize);
    
  // Draw Mid Square (2 Parameters) \\
  // * ========================== *
    
  let quadSize = 15 * totalSize;            // Make Size relative to scale
  fill(fill5);
  quad(quadPosX - quadSize, quadPosY - quadSize, 
       quadPosX - quadSize, quadPosY + quadSize, 
       quadPosX + quadSize, quadPosY + quadSize, 
       quadPosX + quadSize, quadPosY - quadSize);
    
  strokeWeight(20);                         // Stroke of Cross lines
  strokeCap(SQUARE);
  stroke(stroke1)
  line(+ triSize, + triSize, - triSize, - triSize);
  stroke(stroke2)
  line(- triSize, + triSize, + triSize, - triSize);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  if (percent < 50) { new_letter["quadHorozontal"] = oldObj["quadHorozontal"]; }
  else {
      new_letter["quadHorozontal"] = map(percent, 50, 100, oldObj["quadHorozontal"], newObj["quadHorozontal"]);
  }
  if (percent > 50) { new_letter["quadVerticle"] = newObj["quadVerticle"]; }
  else {
      new_letter["quadVerticle"] = map(percent, 0, 50, oldObj["quadVerticle"], newObj["quadVerticle"]);
  }
  
  if (percent < 100) {
  new_letter["topFill"] =       newObj["topFill"];
  new_letter["rightFill"] =     newObj["rightFill"];
  new_letter["bottomFill"] =    newObj["bottomFill"];
  new_letter["leftFill"] =      newObj["leftFill"];
  new_letter["SquareFill"] =    newObj["SquareFill"];
  new_letter["strokeUp"] =      color["trans"];
  new_letter["strokeDown"] =    color["trans"];
  } else {
  new_letter["topFill"] =       newObj["topFill"];
  new_letter["rightFill"] =     newObj["rightFill"];
  new_letter["bottomFill"] =    newObj["bottomFill"];
  new_letter["leftFill"] =      newObj["leftFill"];
  new_letter["SquareFill"] =    newObj["SquareFill"];
  new_letter["strokeUp"] =      newObj["strokeUp"];
  new_letter["strokeDown"] =    newObj["strokeDown"];
  }
  return new_letter;
}

var swapWords = [
"BOXTHING",
"SUDDENLY",
"PIZZAGUY",
"EXPECTED",
"FEELINGS",
"SPINNERS"
]
