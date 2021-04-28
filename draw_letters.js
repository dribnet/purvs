/* these are optional special variables which will change the system */
const backgroundColor = "#0D0208";
var systemBackgroundColor = backgroundColor;

var systemLineColor = "#045e19";
var systemBoxColor = "#045e19";

/* internal constants */
const fillcol="#008F11";//letter green

//centre pos of each letter
const CENTREX = 50;
const CENTREY = 100;

function drawpoly(letterData, x1, y1, x2, y2) { //draw the green poly

  fill(fillcol);

  beginShape();
  //x1 and x2 are +1 or -1 to set whether the point is to the left or right of CENTREX for that half of the poly
  //y1 and y2 are +1 or -1 to set whether the point is above or below of CENTREY for that half of the poly
  //x2 and y2 are 0 if no symmetry
  vertex(CENTREX + x1 * letterData["x1"], CENTREY + y1 * letterData["y1"]);
  vertex(CENTREX + x1 * letterData["x2"], CENTREY + y1 * letterData["y2"]);
  vertex(CENTREX + x1 * letterData["x3"], CENTREY + y1 * letterData["y3"]);
  vertex(CENTREX + x1 * letterData["x4"], CENTREY + y1 * letterData["y4"]);
  vertex(CENTREX + x1 * letterData["x5"], CENTREY + y1 * letterData["y5"]);

  if (x2 != 0) { //if the poly has symmetry draw the second half of it mirrored
    vertex(CENTREX + x2 * letterData["x5"], CENTREY + y2 * letterData["y5"]);
    vertex(CENTREX + x2 * letterData["x4"], CENTREY + y2 * letterData["y4"]);
    vertex(CENTREX + x2 * letterData["x3"], CENTREY + y2 * letterData["y3"]);
    vertex(CENTREX + x2 * letterData["x2"], CENTREY + y2 * letterData["y2"]);
    vertex(CENTREX + x2 * letterData["x1"], CENTREY + y2 * letterData["y1"]);
  }
  endShape();

}


function cir(letterData, x, y) { //draw a black ellipse
  fill(backgroundColor);
  //x is location of the  centre of the ellipse is to the left (-1) or right (+1) relative to CENTREX
  //y is location of the  centre of the ellipse is above ()-1) or below (+1) relative to CENTREY
  ellipse(CENTREX + x * letterData["ex"], CENTREY + y * letterData["ey"], letterData["ewidth"], letterData["eheight"]);
}

function drawLetter(letterData) {

  noStroke();

  let symmode = letterData["symmode"];

  if (symmode.startsWith("symmetry_vert")) { //if vertical sym

    drawpoly(letterData, 1, 1, -1, 1); //draw green poly
    if (symmode.endsWith("offsetcir")) { //offseted sym circles both are symetrical down x but 1 is +y and 1 is -y
      cir(letterData, 1, -1);
      cir(letterData, -1, 1);
    } else if (symmode.endsWith("no_cir")) {//if no sym on the circle

      cir(letterData, 1, 1);
    } else {
      //symmetrical circles from the centre of letter using x axis
      cir(letterData, 1, 1);
      cir(letterData, -1, 1);
    }
  } else if (symmode.startsWith("symmetry_hor")) { //if horizontal sym on the poly

    drawpoly(letterData, 1, -1, 1, 1);
    if (symmode.endsWith("no_cir")) {//if no sym on the circle
      cir(letterData, 1, 1);
    } else if (symmode.endsWith("offsetcirvert")) {//offseted sym circles both are symetrical down x but 1 is +y and 1 is -y
      cir(letterData, 1, -1);
      cir(letterData, -1, 1);
    } else {
      cir(letterData, 1, -1);//horizonal sym on circles from centre
      cir(letterData, 1, 1);
    }


  } else {
    //no poly sym:
    drawpoly(letterData, 1, 1, 0, 0);
    if (symmode.endsWith("cir_only")) {//circle sym
      cir(letterData, 1, 1);
      cir(letterData, 1, -1);
    } else {//no circle sym
      cir(letterData, 1, 1);
    }
  }

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let num=random();//work out random number between 0 and 1
  let number;
  if (num<.5){//decide whether the interpolation should generate 0 or 1 (the 2 numbers in binary)
    number=getObjFromChar("0");
  }
  else {
    number=getObjFromChar("1");
  }


let swaptonumpercent=40;//percent where it swaps from shrinking old letter to num
let swapfromnumpercent=60;//percent where it swaps from num to start going to new letter

if (percent < swaptonumpercent) { //shrink the old letter into the number:
  new_letter["symmode"] = number["symmode"];
  new_letter["x1"] = map(percent, 0, swaptonumpercent, oldObj["x1"], number["x1"]);
  new_letter["x2"] = map(percent, 0, swaptonumpercent, oldObj["x2"], number["x2"]);
  new_letter["x3"] = map(percent, 0, swaptonumpercent, oldObj["x3"], number["x3"]);
  new_letter["x4"] = map(percent, 0, swaptonumpercent, oldObj["x4"], number["x4"]);
  new_letter["x5"] = map(percent, 0, swaptonumpercent, oldObj["x5"], number["x5"]);
  new_letter["y1"] = map(percent, 0, swaptonumpercent, oldObj["y1"], number["y1"]);
  new_letter["y2"] = map(percent, 0, swaptonumpercent, oldObj["y2"], number["y2"]);
  new_letter["y3"] = map(percent, 0, swaptonumpercent, oldObj["y3"], number["y3"]);
  new_letter["y4"] = map(percent, 0, swaptonumpercent, oldObj["y4"], number["y4"]);
  new_letter["y5"] = map(percent, 0, swaptonumpercent, oldObj["y5"], number["y5"]);
  new_letter["ex"] = map(percent, 0, swaptonumpercent, oldObj["ex"], number["ex"]);
  new_letter["ey"] = map(percent, 0, swaptonumpercent, oldObj["ey"], number["ey"]);
  new_letter["ewidth"] = map(percent, 0, swaptonumpercent, oldObj["ewidth"], number["ewidth"]);
  new_letter["eheight"] = map(percent, 0, swaptonumpercent, oldObj["eheight"], number["eheight"]);
}else if(percent<swapfromnumpercent){//show the num
  new_letter["symmode"] = number["symmode"];
  new_letter["x1"] =  number["x1"];
  new_letter["x2"] = number["x2"];
  new_letter["x3"] = number["x3"];
  new_letter["x4"] = number["x4"];
  new_letter["x5"] = number["x5"];
  new_letter["y1"] =  number["y1"];
  new_letter["y2"] = number["y2"];
  new_letter["y3"] = number["y3"];
  new_letter["y4"] = number["y4"];
  new_letter["y5"] = number["y5"];
  new_letter["ex"] = number["ex"];
  new_letter["ey"] = number["ey"];
  new_letter["ewidth"] = number["ewidth"];
  new_letter["eheight"] = number["eheight"];
} else { //turn the num into the new letter
  new_letter["symmode"] = newObj["symmode"];
  new_letter["x1"] = map(percent, swapfromnumpercent+1, 100, number["x1"], newObj["x1"]);
  new_letter["x2"] = map(percent, swapfromnumpercent+1, 100, number["x2"], newObj["x2"]);
  new_letter["x3"] = map(percent, swapfromnumpercent+1, 100, number["x3"], newObj["x3"]);
  new_letter["x4"] = map(percent, swapfromnumpercent+1, 100, number["x4"], newObj["x4"]);
  new_letter["x5"] = map(percent, swapfromnumpercent+1, 100, number["x5"], newObj["x5"]);
  new_letter["y1"] = map(percent, swapfromnumpercent+1, 100, number["y1"], newObj["y1"]);
  new_letter["y2"] = map(percent, swapfromnumpercent+1, 100, number["y2"], newObj["y2"]);
  new_letter["y3"] = map(percent, swapfromnumpercent+1, 100, number["y3"], newObj["y3"]);
  new_letter["y4"] = map(percent, swapfromnumpercent+1, 100, number["y4"], newObj["y4"]);
  new_letter["y5"] = map(percent, swapfromnumpercent+1, 100, number["y5"], newObj["y5"]);
  new_letter["ex"] = map(percent, swapfromnumpercent+1, 100, number["ex"], newObj["ex"]);
  new_letter["ey"] = map(percent, swapfromnumpercent+1, 100, number["ey"], newObj["ey"]);
  new_letter["ewidth"] = map(percent, swapfromnumpercent+1, 100, number["ewidth"], newObj["ewidth"]);
  new_letter["eheight"] = map(percent, swapfromnumpercent+1, 100, number["eheight"], newObj["eheight"]);
}


  return new_letter;
}

var swapWords = [

  "GLITCHED",
  "?MATRIX?",
  "01234567"
]
