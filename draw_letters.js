const colorBackg    = "#2B2118";
const colorStroke  = "#e6eef4";
let circleColor = "#c95d92";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {


  // determine parameters for each x,y coordinate
  let pointoneX = letterData["pointoneX"]*.8;
  let pointoneY = letterData["pointoneY"]*.8;
  let pointtwoX = letterData["pointtwoX"]*.8;
  let pointtwoY = letterData["pointtwoY"]*.8;
  let pointthreeX =letterData["pointthreeX"]*.8;
  let pointthreeY = letterData["pointthreeY"]*.8;
  let points = letterData["points"];

  const baselineY = 0 +185; //straight line from 0 to 200
  star(pointthreeX/100*50+20,pointthreeY/200*150+25,pointtwoX/200*100, points);

  stroke(colorStroke);
  strokeWeight(17);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();
  beginShape(); //letter shape
  curveVertex (15, 15);
  curveVertex (15, 15);
  curveVertex (15, baselineY);
  curveVertex (pointoneX, pointoneY);
  curveVertex (pointtwoX, pointtwoY);
  curveVertex (pointthreeX,pointthreeY);
  curveVertex (pointthreeX,pointthreeY);
  endShape();

  ridges(0,100); 


  // line (0,0,0,baselineY);
  // line (0,baselineY,pointoneX,pointoneY);
  // line (pointoneX,pointoneY,pointtwoX,pointtwoY);
  // line (pointtwoX,pointtwoY,pointthreeX,pointthreeY);
  
}

function ridges(xStart,xEnd){ //ridges through the letters
  for (let i = 10; i < 230; i += 10) { 
    if (i % 20 === 0) {
      stroke("#03a0a5"); //same blue as background
      strokeWeight (3);
      bezier(xStart, i, 50, -50+i, 50, 40+i, xEnd, i);
    }
  }

}

function star (starX,starY,starDiam,spacing){
  //function stars(starX, starY, starDiam, spacing) { //function which draws one multi sided star
  fill(201, 93, 146,200);
  noStroke();
  beginShape();
  for (let a = 0; a < 360; a += spacing) {
    let x = starDiam * sin(a) + starX;
    let y = starDiam * cos(a) + starY;
    vertex(x, y);
  }
  endShape(CLOSE);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["pointoneX"]    = map(percent, 0, 100, oldObj["pointoneX"], newObj["pointoneX"]);
  new_letter["pointoneY"] = map(percent, 0, 100, oldObj["pointoneY"], newObj["pointoneY"]);
  new_letter["pointtwoX"] = map(percent, 0, 100, oldObj["pointtwoX"], newObj["pointtwoX"]);
  new_letter["pointtwoY"] = map(percent, 0, 100, oldObj["pointtwoY"], newObj["pointtwoY"]);
  new_letter["pointthreeX"] = map(percent, 0, 100, oldObj["pointthreeX"], newObj["pointthreeX"]);
  new_letter["pointthreeY"] = map(percent, 0, 100, oldObj["pointthreeY"], newObj["pointthreeY"]);
  new_letter["points"] = map(percent, 0,100, oldObj["points"], newObj["points"]);
  return new_letter;
}

var swapWords = [
  "ABSTRACT",
  "SLIPPERY",
  "BLUEWORM"
]