/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  strokeWeight(4);

  const black  = "#000000";
  const colorBack   = "#000000";
  const dark  = "#ce2c00";
  const mid = "#ff5426";
  const light = "#ff913d";

   //draw lines 

  fill(black); 
  stroke(black); 
  strokeWeight(15); 

  //Create variables from letterData
  p1p2 = letterData["p1p2"];
  p3p4 = letterData["p3p4"];
  p5p6 = letterData["p5p6"];
  p1p3 = letterData["p1p3"];
  p2p4 = letterData["p2p4"];
  p3p5 = letterData["p3p5"];
  p4p6 = letterData["p4p6"];
  p1p6 = letterData["p1p6"];
  p2p5 = letterData["p2p5"];

  let dotSize = 15;
  //HORIZONTAL 

  if(p1p2==1){ 
    line(10, 20, 80, 20); 
  } 

  if(p3p4==1){ 
    line(10, 100, 80, 100); 
  } 

  if(p5p6==1){ 
    line(10, 180, 80, 180); 
  } 

   //VERTICAL 

  if(p1p3==1){ 
   line(10, 20, 10, 100);
  }

  if(p2p4==1){
    line(80, 20, 80, 100);
  } 

  if(p3p5==1){
    line(10, 100, 10, 180);
  }

  if(p4p6==1){
    line(80, 100, 80, 180);
  }

//DIAGONAL
 if(p1p6==1){
  line(10, 20, 80, 180);
}

  if(p2p5==1){
    line(80, 20, 10, 180);
  }
   

//DRAW DOTS
  strokeWeight(5); 
  fill(dark); 
  stroke(dark); 
 
if (p1p2==1 || p1p3==1 || p1p6==1){
  ellipse(10, 20, dotSize);//top left p1 
}
if (p1p2==1 || p2p4==1 || p2p5==1){
  ellipse(80, 20, dotSize);//top right p2 
}
  fill(mid);
  stroke(mid);

if(p3p4==1 || p1p3==1 || p3p5==1){
  ellipse(10, 100, dotSize); //mid left p3 
}
if(p3p4==1 || p2p4==1 || p4p6==1){
  ellipse(80, 100, dotSize); //mid right p4 
}
  fill(light);
  stroke(light);
if(p5p6==1 || p3p5==1 || p2p5==1){
  ellipse(10, 180, dotSize); //bottom left p5 
}
if(p5p6==1 || p4p6==1 || p1p6==1){
  ellipse(80, 180, dotSize); //bottom right p6 
}

}
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]