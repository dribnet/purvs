const colorStroke = "#233f11";
const colourOpac = 200;

var swapWords = [
"GEOMETRY",
]
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push();
  stroke(0);
  strokeWeight(0.5);
  //noFill();
  //blendMode(MULTIPLY);
  angleMode(DEGREES);

  // determine parameters for triangle points
  let p1 = createVector(0 -sin(letterData["p1"]["ang"]) * letterData["p1"]["dist"], 0 + cos(letterData["p1"]["ang"]) * letterData["p1"]["dist"]);
  let p2 = createVector(0 -sin(letterData["p2"]["ang"]) * letterData["p2"]["dist"], 0 + cos(letterData["p2"]["ang"]) * letterData["p2"]["dist"]);
  let p3 = createVector(0 -sin(letterData["p3"]["ang"]) * letterData["p3"]["dist"], 0 + cos(letterData["p3"]["ang"]) * letterData["p3"]["dist"]);
  let p4 = createVector(0 -sin(letterData["p4"]["ang"]) * letterData["p4"]["dist"], 0 + cos(letterData["p4"]["ang"]) * letterData["p4"]["dist"]);
  let p5 = createVector(0 -sin(letterData["p5"]["ang"]) * letterData["p5"]["dist"], 0 + cos(letterData["p5"]["ang"]) * letterData["p5"]["dist"]);
  let p6 = createVector(0 -sin(letterData["p6"]["ang"]) * letterData["p6"]["dist"], 0 + cos(letterData["p6"]["ang"]) * letterData["p6"]["dist"]);

  //calculate central point
  var lowestPoint = 0;
  var min = 10000;
  for (var i = 1; i <= 6; i++) {
    if(cos(letterData["p"+i]["ang"]) * letterData["p"+i]["dist"] < min){
      lowestPoint = i;
      min = cos(letterData["p"+i]["ang"]) * letterData["p"+i]["dist"];
    }
  }

  var highestPoint = 0;
  var max = 0;
  for (var i = 1; i <= 6; i++) {
    if(cos(letterData["p"+i]["ang"]) * letterData["p"+i]["dist"] > max){
      highestPoint = i;
      max = abs(cos(letterData["p"+i]["ang"]) * letterData["p"+i]["dist"]);
    }
  }

  var letterHeightDiff = (max - abs(min));

  var leftPoint = 0;
  var left = 10000;
  for (var i = 1; i <= 6; i++) {
    if(sin(letterData["p"+i]["ang"]) * letterData["p"+i]["dist"] < left){
      leftPoint = i;
      left = sin(letterData["p"+i]["ang"]) * letterData["p"+i]["dist"];
    }
  }

  var rightPoint = 0;
  var right = 0;
  for (var i = 1; i <= 6; i++) {
    if(sin(letterData["p"+i]["ang"]) * letterData["p"+i]["dist"] > right){
      rightPoint = i;
      right = abs(sin(letterData["p"+i]["ang"]) * letterData["p"+i]["dist"]);
    }
  }

  var letterWidthDiff = abs(right - abs(left));
  translate(50+letterWidthDiff/2,100+letterHeightDiff/2);

  //stroke
  noStroke();
  //bottom fill
  fill(80, 150, 255, colourOpac);

  beginShape();
  vertex(0 - p1.x, 0 - p1.y);
  vertex(0 - p2.x, 0 - p2.y);
  vertex(0 - p3.x, 0 - p3.y);
  endShape(CLOSE);

  //top fill
  fill(255, 50, 50, colourOpac);

  beginShape();
  vertex(0 - p4.x, 0 - p4.y);
  vertex(0 - p5.x, 0 - p5.y);
  vertex(0 - p6.x, 0 - p6.y);
  endShape(CLOSE);

  pop();
}

function interpolate_letter(percent, oldData, newData){

  let new_letter = {
    "p1":   { "ang": 0, "dist": 0},
    "p2":   { "ang": 0, "dist": 0},
    "p3": { "ang": 0, "dist": 0},
    "p4":  { "ang": 0, "dist": 0},
    "p5":  { "ang": 0, "dist": 0},
    "p6":   { "ang": 0, "dist": 0},
  }

  new_letter["p1"]["ang"] = map(percent,0,100,oldData["p1"]["ang"],newData["p1"]["ang"]);
  new_letter["p1"]["dist"] = map(percent,0,100,oldData["p1"]["dist"],newData["p1"]["dist"]);

  new_letter["p2"]["ang"] = map(percent,0,100,oldData["p2"]["ang"],newData["p2"]["ang"]);
  new_letter["p2"]["dist"] = map(percent,0,100,oldData["p2"]["dist"],newData["p2"]["dist"]);

    new_letter["p3"]["ang"] = map(percent,0,100,oldData["p3"]["ang"],newData["p3"]["ang"]);
  new_letter["p3"]["dist"] = map(percent,0,100,oldData["p3"]["dist"],newData["p3"]["dist"]);

    new_letter["p4"]["ang"] = map(percent,0,100,oldData["p4"]["ang"],newData["p4"]["ang"]);
  new_letter["p4"]["dist"] = map(percent,0,100,oldData["p4"]["dist"],newData["p4"]["dist"]);

    new_letter["p5"]["ang"] = map(percent,0,100,oldData["p5"]["ang"],newData["p5"]["ang"]);
  new_letter["p5"]["dist"] = map(percent,0,100,oldData["p5"]["dist"],newData["p5"]["dist"]);

    new_letter["p6"]["ang"] = map(percent,0,100,oldData["p6"]["ang"],newData["p6"]["ang"]);
  new_letter["p6"]["dist"] = map(percent,0,100,oldData["p6"]["dist"],newData["p6"]["dist"]);

  return new_letter;
}

// var overlaySize = 10;

//   push();  
//   let shadowp1 = createVector(0 -sin(letterData["p1"]["ang"]) * (letterData["p1"]["dist"]+overlaySize), 0 + cos(letterData["p1"]["ang"]) * (letterData["p1"]["dist"]+overlaySize));
//   let shadowp2 = createVector(0 -sin(letterData["p2"]["ang"]) * (letterData["p2"]["dist"]+overlaySize), 0 + cos(letterData["p2"]["ang"]) * (letterData["p2"]["dist"]+overlaySize));
//   let shadowp3 = createVector(0 -sin(letterData["p3"]["ang"]) * (letterData["p3"]["dist"]+overlaySize), 0 + cos(letterData["p3"]["ang"]) * (letterData["p3"]["dist"]+overlaySize));
//   let shadowp4 = createVector(0 -sin(letterData["p4"]["ang"]) * (letterData["p4"]["dist"]+overlaySize), 0 + cos(letterData["p4"]["ang"]) * (letterData["p4"]["dist"]+overlaySize));
//   let shadowp5 = createVector(0 -sin(letterData["p5"]["ang"]) * (letterData["p5"]["dist"]+overlaySize), 0 + cos(letterData["p5"]["ang"]) * (letterData["p5"]["dist"]+overlaySize));
//   let shadowp6 = createVector(0 -sin(letterData["p6"]["ang"]) * (letterData["p6"]["dist"]+overlaySize), 0 + cos(letterData["p6"]["ang"]) * (letterData["p6"]["dist"]+overlaySize));
  
//   beginShape();
//   vertex(0 - shadowp1.x, 0 - shadowp1.y);
//   vertex(0 - shadowp2.x, 0 - shadowp2.y);
//   vertex(0 - shadowp3.x, 0 - shadowp3.y);
//   endShape(CLOSE);

//   //paper fill
//   //fill(242, 242, 242, colourOpacPaper);
//   //colour fill
//   fill(255, 50, 50,colourOpacColour);

//   beginShape();
//   vertex(0 - shadowp4.x, 0 - shadowp4.y);
//   vertex(0 - shadowp5.x, 0 - shadowp5.y);
//   vertex(0 - shadowp6.x, 0 - shadowp6.y);
//   endShape(CLOSE);
//   pop();
