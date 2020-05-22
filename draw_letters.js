const curveColour  = "#ff245e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // determine parameters for circle
  let x = letterData["offsetx"];
  let y = letterData["offsety"];
  
  //arc params
  let h = letterData["height"];
  let w = letterData["width"];
  let angleStart = letterData["angleStart"];
  let angleEnd = letterData["angleEnd"];

  //line 1
  let x1 = letterData["line 1 x1"];
  let x2 = letterData["line 1 x2"];
  let y3 = letterData["line 2 y1"];
  let y4 = letterData["line 2 y2"];
  
  //line 2
  let x3 = letterData["line 2 x1"];
  let x4 = letterData["line 2 x2"];
  let y1 = letterData["line 1 y1"];
  let y2 = letterData["line 1 y2"];

  //drawing the line
  angleMode(DEGREES);
  noStroke();
  fill(curveColour);

  push();
    //scale(0.82);
    //translate(12, 22);

    //draw arch
    arc(x, y, w, h, angleStart, angleEnd);

    strokeWeight(8);
    stroke(255);

    if (x1 != 'x') {
      line(x1, y1, x2, y2);  
    }
    if (x3 != 'x') {
      line(x3, y3, x4, y4);
    }

    noStroke();
  pop();
}

function drawPatch(face, align, width){
  let start, end; //start end end angle of arch
  let w, h; //widht and height of arch
  let x, y; //position of arch

  //angle area
  if (face == "NORTH") {
    start = 180;
    end = 0;
    w = width;
    h = 400;
  }
  else if (face == "SOUTH") {
    start = 0; 
    end = 180;
    w = width;
    h = 400;
  }
  else if (face == "WEST") {
    start = 90; 
    end = 270;
    w = width*2;
    h = 200;
  }
  else if (face == "EAST") {
    start = 270;
    end = 90;
    w = width*2;
    h = 200;
  }

  //arch placement
  if (align == "LEFT") {
  }

}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  
  new_letter["height"] = map(percent, 0, 400, oldObj["height"], newObj["height"]);
  new_letter["width"] = map(percent, 0, 100, oldObj["width"], newObj["width"]);
  
  new_letter["angleStart"] = map(percent, 0, 360, oldObj["angleStart"], newObj["angleStart"]);
  new_letter["angleEnd"] = map(percent, 0, 360, oldObj["angleEnd"], newObj["angleEnd"]);

  new_letter["line 1 x1"] = map(percent, 0, 100, oldObj["line 1 x1"], newObj["line 1 x1"]);
  new_letter["line 1 y1"] = map(percent, 0, 200, oldObj["line 1 y1"], newObj["line 1 y1"]);
  new_letter["line 1 x2"] = map(percent, 0, 100, oldObj["line 1 x2"], newObj["line 1 x2"]);
  new_letter["line 1 y2"] = map(percent, 0, 200, oldObj["line 1 y2"], newObj["line 1 y2"]);

  new_letter["line 2 x1"] = map(percent, 0, 100, oldObj["line 2 x1"], newObj["line 2 x1"]);
  new_letter["line 2 y1"] = map(percent, 0, 200, oldObj["line 2 y1"], newObj["line 2 y1"]);
  new_letter["line 2 x2"] = map(percent, 0, 100, oldObj["line 2 x2"], newObj["line 2 x2"]);
  new_letter["line 2 y2"] = map(percent, 0, 200, oldObj["line 2 y2"], newObj["line 2 y2"]);
  return new_letter;
}

function drawBase(align, width, height, ){

}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]