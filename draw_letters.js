/* these are optional special variables which will change the system */
const backgroundColor  = "#0D0208";
var systemBackgroundColor = backgroundColor;
var systemLineColor = "#FFA500";
var systemBoxColor = "#FFA500";

/* internal constants */



const fillcol  = "#008F11";
const CENTREX=50;
const CENTREY=100;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function sym(letterData,x,y){
fill(fillcol);
  beginShape();
  vertex(CENTREX+x*letterData["x1"],CENTREY+y*letterData["y1"]);
  vertex(CENTREX+x*letterData["x2"],CENTREY+y*letterData["y2"]);
  vertex(CENTREX+x*letterData["x3"],CENTREY+y*letterData["y3"]);
  vertex(CENTREX+x*letterData["x4"],CENTREY+y*letterData["y4"]);
  vertex(CENTREX+x*letterData["x5"],CENTREY+y*letterData["y5"]);
  endShape();


}
function cir(letterData,x,y){
  fill(backgroundColor);
     ellipse(CENTREX+x*letterData["ex"], CENTREY+y*letterData["ey"], letterData["ewidth"], letterData["eheight"]);
}
function drawLetter(letterData) {
  // color/stroke setup
 noStroke();
//  let symmode = letterData["symmode"];
//  let res = symmode.startsWith("sym");


if (letterData["symmode"]=='symmetry_vert'){//if vertical sym
  sym(letterData, -1,1);
  sym(letterData, 1,1);
  cir(letterData,1,1);
  cir(letterData,-1,1);

}
else if (letterData["symmode"]=='symmetry_hor') {//if horizontal sym

  sym(letterData,1,-1);
  sym(letterData,1,1);
    cir(letterData,1,-1);
    cir(letterData,1,1);




}
else if (letterData["symmode"]=='symmetry_cir_only'){//if no on poly on on circles
  sym(letterData,1,1);
  cir(letterData,1,1);
  cir(letterData,1,-1);
}
else if (letterData["symmode"]=='symmetry_hor_no_cir'){//if sym on poly and not on circles
  sym(letterData,1,-1);
  sym(letterData,1,1);
    cir(letterData,1,1);
}
else if (letterData["symmode"]=='symmetry_vert_offsetcir'){//if vertical sym and the
  sym(letterData, -1,1);
  sym(letterData, 1,1);
  cir(letterData,1,-1);
  cir(letterData,-1,1);
}
else{
  sym(letterData,1,1);
  cir(letterData,1,1);
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
