const colorFront1  = "#199cff";
const colorFront2  = "#fcba03";
const colorStroke  = "#fff194";
let lightGrey =  "#c9d1d6";

//const colorBack    = "#0a193d";
//const backgroundColour = "#0a193d";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


function drawLetter(letterData) {
  angleMode(DEGREES);
  strokeWeight(2);
  stroke(colorStroke);
  noStroke();
  ellipseMode(CENTER);
 // background(backgroundColour);
 // determine parameters for second circle
  let size = letterData["size"];
  let bgCx = letterData["offsetx"];
  let bgCy =  letterData["offsety"];
  let startA = letterData["start1"];
  let endA = letterData["stop1"];
  let bgEx = letterData["bgCutOutx"];
  let bgEy = letterData["bgCutOuty"];


  //let strokeWei = letterData["strokeW"];

  //noFill();
  // draw two circles
   
  //strokeWeight(strokeWei);

  let lightBlue = color("#199cff");
  lightBlue.setAlpha(125);
  fill(lightGrey);

  drawBgCresent(bgCx,bgCy,size,startA,endA,bgEx,bgEy);
  
 drawMoon();

//drawFgCresent();


  
}



function drawMoon(size){
 fill("#fff194");
 //fill(0,255,0,30);
  ellipse(50, 100, 100, 100);
}


function drawBgCresent(Ax,Ay,size,startA,endA,Ex,Ey){
  //stroke(1);
  //fill(255,0,0);
  arc(Ax, Ay, size, size, startA,endA);

  fill(colorBack);

  if(startA >endA){
  ellipse(Ex,Ey,80,100);
  }
  else{
    ellipse(Ex,Ey,100,80);
  }

}

function drawFgCresent(){
  stroke(1);
  //fill(255,0,0);
  arc(Ax, Ay, size, size, startA,endA);

  fill(colorBack);

  if(startA >endA){
  ellipse(Ex,Ey,80,100);
  }
  else{
    ellipse(Ex,Ey,100,80);
  }
}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //console.log(percent);
   let FASTP = percent;
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100 , oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0,100, oldObj["offsety"], newObj["offsety"]);


 if(percent <70){
 new_letter["start1"] =  oldObj["start1"];
 new_letter["stop1"] =  oldObj["stop1"];
  }
  else{
  new_letter["start1"] = map(percent, 0, 100, oldObj["start1"], newObj["start1"]);
  new_letter["stop1"] = map(percent, 0, 100, oldObj["stop1"], newObj["stop1"]);
  
  }

  new_letter["bgCutOutx"] = map(percent, 0, 100, oldObj["bgCutOutx"], newObj["bgCutOutx"]);
  new_letter["bgCutOuty"] = map(percent, 0, 100, oldObj["bgCutOuty"], newObj["bgCutOuty"]);
 
  return new_letter;
}

var swapWords = [
  "MOONFONT",
  "PHOEBE??",
  "STRENGTH",
  "A1B2C3D4",
]