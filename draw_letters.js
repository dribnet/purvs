const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke("#d67636");
  strokeWeight(4);

   let i = letterData["shape1type"];
   let c = 0;
   let col1 = color(255, 146, 139,150) ;
   let col2 = color(255, 172, 129,150);
   let col3 = color(254, 195, 130,150);
   let values = [letterData["shape1type"], letterData["shape1pos1x"], letterData["shape1pos1y"], letterData["shape1pos2x"],letterData["shape1pos2y"],letterData["shape2type"], letterData["shape2pos1x"], letterData["shape2pos1y"],letterData["shape2pos2x"], letterData["shape2pos2y"],letterData["shape3type"], letterData["shape3pos1x"],letterData["shape3pos1y"],letterData["shape3pos2x"], letterData["shape3pos2y"]]
   while (i.valueOf() !== "null") {
      let type = values[c];
      let pos1 = createVector(values[c+1], values[c+2]);
      let pos2 = createVector(values[c+3], values[c+4]);
      let curCol;
      if (c === 0) { curCol = col1; }
      else if (c === 5) { curCol = col2; }
      else { curCol = col3; }

      if (type.valueOf() === "tri") {
        let width = (pos1.x - pos2.x) * 2;
        fill(curCol);
        triangle(pos1.x, 50 + pos1.y, pos2.x, 50 + pos2.y, width + pos2.x, 50 + pos2.y);

      }
      else if (type.valueOf() === "circ") {
        ellipseMode(CORNERS);
        fill(curCol);
        ellipse(pos1.x, 50 + pos1.y, pos2.x, 50 + pos2.y);
      }
      else if (type.valueOf() == "rect") {
        rectMode(CORNERS);
        fill(curCol);
        rect(pos1.x, 50 + pos1.y, pos2.x, 50 + pos2.y);
      }

      if (c === 10) { break;}
      c += 5;
      i = values[c];
   }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //shape 1
  if (newObj["shape1type"].valueOf() === oldObj["shape1type"].valueOf()) {
    new_letter["shape1type"] = newObj["shape1type"];
    new_letter["shape1pos1x"]   = map(percent, 0, 100, oldObj["shape1pos1x"], newObj["shape1pos1x"]);
    new_letter["shape1pos1y"]   = map(percent, 0, 100, oldObj["shape1pos1y"], newObj["shape1pos1y"]);
    new_letter["shape1pos2x"]    = map(percent, 0, 100, oldObj["shape1pos2x"], newObj["shape1pos2x"]);
    new_letter["shape1pos2y"]    = map(percent, 0, 100, oldObj["shape1pos2y"], newObj["shape1pos2y"]);
  }
  else {
    if (percent < 50) { 
      new_letter["shape1type"] = oldObj["shape1type"]; 
      let middleX = oldObj["shape1pos2x"] - oldObj["shape1pos1x"];
      let middleY = oldObj["shape1pos2y"] - oldObj["shape1pos1y"];
      new_letter["shape1pos1x"]   = map(percent, 0, 50, oldObj["shape1pos1x"], middleX);
      new_letter["shape1pos1y"]   = map(percent, 0, 50, oldObj["shape1pos1y"], middleY);
      new_letter["shape1pos2x"]    = map(percent, 50, 0, middleX, oldObj["shape1pos2x"]);
      new_letter["shape1pos2y"]    = map(percent, 50, 0, middleY, oldObj["shape1pos2y"]);
    }
    else {
      new_letter["shape1type"] = newObj["shape1type"];
      let middleX = newObj["shape1pos2x"] - newObj["shape1pos1x"];
      let middleY = newObj["shape1pos2y"] - newObj["shape1pos1y"];
      new_letter["shape1pos1x"]   = map(percent, 50, 100,  middleX, newObj["shape1pos1x"]);
      new_letter["shape1pos1y"]   = map(percent, 50, 100,  middleY, newObj["shape1pos1y"]);
      new_letter["shape1pos2x"]    = map(percent, 100, 50, newObj["shape1pos2x"], middleX);
      new_letter["shape1pos2y"]    = map(percent, 100, 50, newObj["shape1pos2y"], middleY);
    }
  }

  //shape 2
  if (newObj["shape2type"].valueOf() === oldObj["shape2type"].valueOf() && newObj["shape2type"].valueOf() !== "null") {
    new_letter["shape2type"] = newObj["shape2type"];
    new_letter["shape2pos1x"]   = map(percent, 0, 100, oldObj["shape2pos1x"], newObj["shape2pos1x"]);
    new_letter["shape2pos1y"]   = map(percent, 0, 100, oldObj["shape2pos1y"], newObj["shape2pos1y"]);
    new_letter["shape2pos2x"]    = map(percent, 0, 100, oldObj["shape2pos2x"], newObj["shape2pos2x"]);
    new_letter["shape2pos2y"]    = map(percent, 0, 100, oldObj["shape2pos2y"], newObj["shape2pos2y"]);
  }
  else if (newObj["shape2type"].valueOf() !== "null" && oldObj["shape2type"].valueOf() === "null") {
      if (percent >= 50) { 
      new_letter["shape2type"] = newObj["shape2type"]; 
      let middleX = newObj["shape2pos2x"] - newObj["shape2pos1x"];
      let middleY = newObj["shape2pos2y"] - newObj["shape2pos1y"];
      new_letter["shape2pos1x"]   = map(percent, 50, 100, middleX, newObj["shape2pos1x"]);
      new_letter["shape2pos1y"]   = map(percent, 50, 100, middleY, newObj["shape2pos1y"]);
      new_letter["shape2pos2x"]    = map(percent, 100, 50, newObj["shape2pos2x"], middleX);
      new_letter["shape2pos2y"]    = map(percent, 100, 50, newObj["shape2pos2y"], middleY);
    }
    else {
      new_letter["shape2type"] = oldObj["shape2type"]; 
      new_letter["shape2pos1x"]   = oldObj["shape2pos1x"];
      new_letter["shape2pos1y"]   = oldObj["shape2pos1y"];
      new_letter["shape2pos2x"]    = oldObj["shape2pos2x"];
      new_letter["shape2pos2y"]    =  oldObj["shape2pos2y"];
    }

  }
  else if (newObj["shape2type"].valueOf() === "null" && oldObj["shape2type"].valueOf() !== "null") {
      if (percent < 50) { 
      new_letter["shape2type"] = oldObj["shape2type"]; 
      let middleX = oldObj["shape2pos2x"] - oldObj["shape2pos1x"];
      let middleY = oldObj["shape2pos2y"] - oldObj["shape2pos1y"];
      new_letter["shape2pos1x"]   = map(percent, 0, 50, oldObj["shape2pos1x"], middleX);
      new_letter["shape2pos1y"]   = map(percent, 0, 50, oldObj["shape2pos1y"], middleY);
      new_letter["shape2pos2x"]    = map(percent, 50, 0, middleX , oldObj["shape2pos2x"]);
      new_letter["shape2pos2y"]    = map(percent, 50, 0, middleY, oldObj["shape2pos2y"]);
    }
    else {
      new_letter["shape2type"] = newObj["shape2type"]; 
      new_letter["shape2pos1x"]   = newObj["shape2pos1x"];
      new_letter["shape2pos1y"]   = newObj["shape2pos1y"];
      new_letter["shape2pos2x"]    = newObj["shape2pos2x"];
      new_letter["shape2pos2y"]    = newObj["shape2pos2y"];
    }
  }
  else {
    if (percent < 50) { 
      new_letter["shape2type"] = oldObj["shape2type"]; 
      let middleX = oldObj["shape2pos2x"] - oldObj["shape2pos1x"];
      let middleY = oldObj["shape2pos2y"] - oldObj["shape2pos1y"];
      new_letter["shape2pos1x"]   = map(percent, 0, 50, oldObj["shape2pos1x"], middleX);
      new_letter["shape2pos1y"]   = map(percent, 0, 50, oldObj["shape2pos1y"],  middleY);
      new_letter["shape2pos2x"]    = map(percent, 50, 0, middleX, oldObj["shape2pos2x"]);
      new_letter["shape2pos2y"]    = map(percent, 50, 0,  middleY, oldObj["shape2pos2y"]);
    }
    else {
      new_letter["shape2type"] = newObj["shape2type"];
      let middleX = newObj["shape2pos2x"] - newObj["shape2pos1x"];
      let middleY = newObj["shape2pos2y"] - newObj["shape2pos1y"];
      new_letter["shape2pos1x"]   = map(percent, 50, 100, middleX, newObj["shape2pos1x"]);
      new_letter["shape2pos1y"]   = map(percent, 50, 100, middleY, newObj["shape2pos1y"]);
      new_letter["shape2pos2x"]    = map(percent, 100, 50, newObj["shape2pos2x"], middleX);
      new_letter["shape2pos2y"]    = map(percent, 100, 50, newObj["shape2pos2y"], middleY);
    }
  }


  //shape 3

  if (newObj["shape3type"].valueOf() === oldObj["shape3type"].valueOf() && newObj["shape3type"].valueOf() !== "null") {
    new_letter["shape3type"] = newObj["shape3type"];
    new_letter["shape3pos1x"]   = map(percent, 0, 100, oldObj["shape3pos1x"], newObj["shape3pos1x"]);
    new_letter["shape3pos1y"]   = map(percent, 0, 100, oldObj["shape3pos1y"], newObj["shape3pos1y"]);
    new_letter["shape3pos2x"]    = map(percent, 0, 100, oldObj["shape3pos2x"], newObj["shape3pos2x"]);
    new_letter["shape3pos2y"]    = map(percent, 0, 100, oldObj["shape3pos2y"], newObj["shape3pos2y"]);
  }
  else if (newObj["shape3type"].valueOf() !== "null" && oldObj["shape3type"].valueOf() === "null") {
      if (percent >= 50) { 
      new_letter["shape3type"] = newObj["shape3type"]; 
      let middleX = newObj["shape3pos2x"] - newObj["shape3pos1x"];
      let middleY = newObj["shape3pos2y"] - newObj["shape3pos1y"];
      new_letter["shape3pos1x"]   = map(percent, 50, 100, middleX, newObj["shape3pos1x"]);
      new_letter["shape3pos1y"]   = map(percent,  50, 100, middleY, newObj["shape3pos1y"]);
      new_letter["shape3pos2x"]    = map(percent, 100, 50, newObj["shape3pos2x"], middleX);
      new_letter["shape3pos2y"]    = map(percent, 100, 50, newObj["shape3pos2y"], middleY);
    }
    else {
      new_letter["shape3type"] = oldObj["shape3type"]; 
      new_letter["shape3pos1x"]   = oldObj["shape3pos1x"];
      new_letter["shape3pos1y"]   = oldObj["shape3pos1y"];
      new_letter["shape3pos2x"]    = oldObj["shape3pos2x"];
      new_letter["shape3pos2y"]    = oldObj["shape3pos2y"];
    }

  }
  else if (newObj["shape3type"].valueOf() === "null" && oldObj["shape3type"].valueOf() !== "null") {
      if (percent < 50) { 
      new_letter["shape3type"] = oldObj["shape3type"]; 
      let middleX = oldObj["shape3pos2x"] - oldObj["shape3pos1x"];
      let middleY = oldObj["shape3pos2y"] - oldObj["shape3pos1y"];
      new_letter["shape3pos1x"]   = map(percent, 0, 50, oldObj["shape3pos1x"], middleX);
      new_letter["shape3pos1y"]   = map(percent, 0, 50, oldObj["shape3pos1y"], middleY);
      new_letter["shape3pos2x"]    = map(percent, 50, 0, middleX, oldObj["shape3pos2x"]);
      new_letter["shape3pos2y"]    = map(percent, 50, 0, middleY, oldObj["shape3pos2y"]);
    }
    else {
      new_letter["shape3type"] = newObj["shape3type"]; 
      new_letter["shape3pos1x"]   =newObj["shape3pos1x"];
      new_letter["shape3pos1y"]   = newObj["shape3pos1y"];
      new_letter["shape3pos2x"]    = newObj["shape3pos2x"];
      new_letter["shape3pos2y"]    = newObj["shape3pos2y"];
    }
  }
  else {
    if (percent < 50) { 
      new_letter["shape3type"] = oldObj["shape3type"]; 
      let middleX = oldObj["shape3pos2x"] - oldObj["shape3pos1x"];
      let middleY = oldObj["shape3pos2y"] - oldObj["shape3pos1y"];
      new_letter["shape3pos1x"]   = map(percent, 0, 50, oldObj["shape3pos1x"], middleX);
      new_letter["shape3pos1y"]   = map(percent, 0, 50, oldObj["shape3pos1y"], middleY);
      new_letter["shape3pos2x"]    = map(percent, 50, 0, middleX, oldObj["shape3pos2x"]);
      new_letter["shape3pos2y"]    = map(percent, 50, 0, middleY, oldObj["shape3pos2y"]);
    }
    else {
      new_letter["shape3type"] = newObj["shape3type"]; 
      let middleX = newObj["shape3pos2x"] - newObj["shape3pos1x"];
      let middleY = newObj["shape3pos2y"] - newObj["shape3pos1y"];
      new_letter["shape3pos1x"]   = map(percent, 50, 100, middleX, newObj["shape3pos1x"]);
      new_letter["shape3pos1y"]   = map(percent, 50, 100, middleY, newObj["shape3pos1y"]);
      new_letter["shape3pos2x"]    = map(percent, 100, 50, newObj["shape3pos2x"], middleX);
      new_letter["shape3pos2y"]    = map(percent, 100, 50, newObj["shape3pos2y"], middleY);
    }
  }
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]