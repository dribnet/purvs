const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

function drawLetter(letterData) {
  // color/stroke setup
  noStroke();
  rectMode(CORNERS);
  let x = [letterData["x1"],letterData["x2"],letterData["x3"],letterData["x4"]];
  let y = [letterData["y1"]+50,letterData["y2"]+50,letterData["y3"]+50,letterData["y4"]+50];
  let shp = [letterData["shp1"],letterData["shp2"],letterData["shp3"],letterData["shp4"]];

  for (i=0;i<4;i++) {
    if (shp[i] == 0) {                        //-----------------------No Shape

    } else if (shp[i] == 1) {                 //-----------------------Line
      fill(0);
      rect(x[i],y[i],x[i]+5,y[i]+100);
    } else if (shp[i] == 2) {                 //-----------------------Small Circle
      fill(0);
      ellipse(x[i],y[i],50,50);
    } else if (shp[i] == 3) {                 //-----------------------Line Inverted
      fill(255);
      rect(x[i],y[i],x[i]+5,y[i]+100);
    } else if (shp[i] == 4) {                 //-----------------------Small Circle Inverted
      fill(255);
      ellipse(x[i],y[i],50,50);
    }
  }
  stroke(0);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);

  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);

  new_letter["shp1"] = map(percent, 0, 100, oldObj["shp1"], newObj["shp1"]);
  new_letter["shp2"] = map(percent, 0, 100, oldObj["shp2"], newObj["shp2"]);
  new_letter["shp3"] = map(percent, 0, 100, oldObj["shp3"], newObj["shp3"]);
  new_letter["shp4"] = map(percent, 0, 100, oldObj["shp4"], newObj["shp4"]);

  return new_letter;
}

var swapWords = [
  "TIEDREAM",
  " NO MOON",
  "ALDERAAN",
  "SCREEECH",
  "ORDER 66",
  "UV COORD"
]