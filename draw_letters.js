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
  let x = letterData["x"];
  let y = letterData["y"];
  let shp = letterData["shp"];

  // drawShape(x1,y1,shp1);
  // drawShape(x2,y2,shp2);
  // drawShape(x3,y3,shp3);
  // drawShape(x4,y4,shp4);

  for (i=0;i<4;i++) {
    if (shp[i] == 0) {                        //-----------------------No Shape

    } else if (shp[i] == 1) {                 //-----------------------Line
      fill(0);
      rect(x[i],y[i],x[i]+5,y[i]+100);
    } else if (shp[i] == 2) {                 //-----------------------Circle
      fill(0);
      ellipse(x[i],y[i],100,100);
    } else if (shp[i] == 3) {                 //-----------------------Small Circle
      fill(0);
      ellipse(x[i],y[i],50,50);
    } else if (shp[i] == 4) {                 //-----------------------Line Inverted
      fill(255);
      rect(x[i],y[i],x[i]+5,y[i]+100);
    } else if (shp[i] == 5) {                 //-----------------------Circle Inverted
      fill(255);
      ellipse(x[i],y[i],100,100);
    } else if (shp[i] == 6) {                 //-----------------------Small Circle Inverted
      fill(255);
      ellipse(x[i],y[i],50,50);
    }
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