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

  const lines  = "#ff0000";
  const dots = "#ffffff";
  const colorBack   = "#000000";
  const glow = "#ffb459";

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

//*****DRAWLINES****

  fill(glow); 
  stroke(glow); 
  strokeWeight(22); 

//HORIZONTAL 
  if(p1p2==1){ 
    line(25, 20, 95, 20); 
  } 

  if(p3p4==1){ 
    line(15, 100, 85, 100); 
  } 

  if(p5p6==1){ 
    line(5, 180, 75, 180); 
  } 

//VERTICAL 
  if(p1p3==1){ 
   line(25, 20, 15, 100);
  }

  if(p2p4==1){
    line(95, 20, 85, 100);
  } 

  if(p3p5==1){
    line(15, 100, 5, 180);
  }

  if(p4p6==1){
    line(85, 100, 75, 180);
  }

//DIAGONAL
 if(p1p6==1){
  line(25, 20, 75, 180);
}

  if(p2p5==1){
    line(95, 20, 5, 180);
  }

  fill(lines); 
  stroke(lines); 
  strokeWeight(12); 
   
//HORIZONTAL 
  if(p1p2==1){ 
    line(25, 20, 95, 20); 
  } 

  if(p3p4==1){ 
    line(15, 100, 85, 100); 
  } 

  if(p5p6==1){ 
    line(5, 180, 75, 180); 
  } 

//VERTICAL 
  if(p1p3==1){ 
   line(25, 20, 15, 100);
  }

  if(p2p4==1){
    line(95, 20, 85, 100);
  } 

  if(p3p5==1){
    line(15, 100, 5, 180);
  }

  if(p4p6==1){
    line(85, 100, 75, 180);
  }

//DIAGONAL
 if(p1p6==1){
  line(25, 20, 75, 180);
}

  if(p2p5==1){
    line(95, 20, 5, 180);
  }

//*****DRAW DOTS******
  strokeWeight(5);

//TOP 
  fill(dots); 
  stroke(dots); 
if (p1p2==1 || p1p3==1 || p1p6==1){
  ellipse(25, 20, dotSize);//top left p1 
}
if (p1p2==1 || p2p4==1 || p2p5==1){
  ellipse(95, 20, dotSize);//top right p2 
}

//MID
if(p3p4==1 || p1p3==1 || p3p5==1){
  ellipse(15, 100, dotSize); //mid left p3 
}
if(p3p4==1 || p2p4==1 || p4p6==1){
  ellipse(85, 100, dotSize); //mid right p4 
}

//BOTTOM
if(p5p6==1 || p3p5==1 || p2p5==1){
  ellipse(5, 180, dotSize); //bottom left p5 
}
if(p5p6==1 || p4p6==1 || p1p6==1){
  ellipse(75, 180, dotSize); //bottom right p6 
}

}
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["p1p2"]    = map(percent, 0, 100, oldObj["p1p2"], newObj["p1p2"]);
  new_letter["p3p4"] = map(percent, 0, 100, oldObj["p3p4"], newObj["p3p4"]);
  new_letter["p5p6"] = map(percent, 0, 100, oldObj["p5p6"], newObj["p5p6"]);

  new_letter["p1p3"] = map(percent, 0, 100, oldObj["p1p3"], newObj["p1p3"]);
  new_letter["p2p4"] = map(percent, 0, 100, oldObj["p2p4"], newObj["p2p4"]);
  new_letter["p3p5"] = map(percent, 0, 100, oldObj["p3p5"], newObj["p3p5"]);
  new_letter["p4p6"] = map(percent, 0, 100, oldObj["p4p6"], newObj["p4p6"]);

  new_letter["p1p6"] = map(percent, 0, 100, oldObj["p1p6"], newObj["p1p6"]);
  new_letter["p2p5"] = map(percent, 0, 100, oldObj["p2p5"], newObj["p2p5"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]