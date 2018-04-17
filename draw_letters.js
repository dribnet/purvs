const colorFront  = "#199cff";
const colorStroke = "#233f11";

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
  
}
