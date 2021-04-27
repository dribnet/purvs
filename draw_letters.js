/* these are optional special variables which will change the system */
var systemBackgroundColor = "#fffde6";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
    // color/stroke setup
push();
  noStroke()
   angleMode(DEGREES);
  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 100 + letterData["offsety"];

  let tposx1 = 50+ letterData["tx1"];
  let tposy1 = 100+ letterData["ty1"];
  let tposx2 = 50 + letterData["tx2"];
  let tposy2 = 100 + letterData["ty2"];
  let tposx3 = 50 + letterData["tx3"];
  let tposy3 = 100 + letterData["ty3"];

  let rposx1 = 50 + letterData["rx1"];
  let rposy1 = 100 + letterData["ry1"];
  let rposx2 = 50 + letterData["rx2"];
  let rposy2 = 100 + letterData["ry2"];
  let rsizex1 = letterData["rw1"];
  let rsizey1 = letterData["rh1"];
  let rsizex2 = letterData["rw2"];
  let rsizey2 = letterData["rh2"];

  let arcx1 = 50+ letterData["ax1"]
  let arcy1 = 100+ letterData["ay1"];
  let arcSize1 = letterData["aw1"];
  let arcSize2 = letterData["ah1"];
  let angle1 = letterData["angle1"]
  let angle2 = letterData["angle2"]

  let arcx2 = 50+ letterData["ax2"]
  let arcy2 = 100+ letterData["ay2"];
  let arcSize3 = letterData["aw2"];
  let arcSize4 = letterData["ah2"];
  let angle3 = letterData["angle3"]
  let angle4 = letterData["angle4"]
  rectMode(CENTER)
  // draw two circles
  // fill(lightBlue);
  // ellipse(50, 150, 75, 75);
  // fill(lightBlue);
  // ellipse(pos2x, pos2y, size2, size2);


  fill(202,227,226,150)
  rect(50,100,120,200,25)

  if (rsizex1 == null) {
    print("fixing variable rsizex1");
    rsizex1 = 0;
  }
  if (rsizey1 == null) {
    print("fixing variable rsizey1");
    rsizey1 = 0;
  }
  if (rsizex2 == null) {
    print("fixing variable rsizex2");
    rsizex2 = 0;
  }
  if (rsizey2 == null) {
    print("fixing variable rsizey2");
    rsizey2 = 0;
  }
  if (arcx1 == null) {
    print("fixing variable arcx1");
    arcx1 = 0;
  }
  if (arcy1 == null) {
    print("fixing variable arcy1");
    arcy1 = 0;
  }
  if (arcSize1 == null) {
    print("fixing variable arcSize1");
    arcSize1 = 0;
  }
  if (arcSize2 == null) {
    print("fixing variable arcSize2");
    arcSize2 = 0;
  }
  if (angle1 == null) {
    print("fixing variable angle1");
    angle1 = 0;
  }
  if (angle2 == null) {
    print("fixing variable angle2");
    angle2 = 0;
  }




  if (arcx2 == null) {
    print("fixing variable arcx2");
    arcx2 = 0;
  }
  if (arcy2 == null) {
    print("fixing variable arcy2");
    arcy1 = 0;
  }
  if (arcSize3 == null) {
    print("fixing variable arcSize3");
    arcSize3 = 0;
  }
  if (arcSize4 == null) {
    print("fixing variable arcSize4");
    arcSize4 = 0;
  }
  if (angle3 == null) {
    print("fixing variable angle3");
    angle3 = 0;
  }
  if (angle4 == null) {
    print("fixing variable angle4");
    angle4 = 0;
  }


  fill(144,177,170)
  rect(rposx1, rposy1, rsizex1, rsizey1);

  fill(254,212,113)
  rect(rposx2, rposy2, rsizex2, rsizey2);

  fill(239,102,72);
  triangle(tposx1,tposy1,tposx2,tposy2,tposx3,tposy3);

  fill(72,126,207);
  arc(arcx2,arcy2,arcSize3,arcSize4,angle3,angle4);


  fill(72,126,207,120);
  arc(arcx1,arcy1,arcSize1,arcSize2,angle1,angle2);



pop();

}




function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["tx1"]    = map(percent, 0, 100, oldObj["tx1"], newObj["tx1"]);
  new_letter["ty1"] = map(percent, 0, 100, oldObj["ty1"], newObj["ty1"]);
  new_letter["tx2"] = map(percent, 0, 100, oldObj["tx2"], newObj["tx2"]);
  new_letter["ty2"] = map(percent, 0, 100, oldObj["ty2"], newObj["ty2"]);
  new_letter["tx3"] = map(percent, 0, 100, oldObj["tx3"], newObj["tx3"]);
  new_letter["ty3"] = map(percent, 0, 100, oldObj["ty3"], newObj["ty3"]);

  new_letter["rx1"] = map(percent, 0, 100, oldObj["rx1"], newObj["rx1"]);
  new_letter["ry1"] = map(percent, 0, 100, oldObj["ry1"], newObj["ry1"]);
  new_letter["rx2"] = map(percent, 0, 100, oldObj["rx2"], newObj["rx2"]);
  new_letter["ry2"] = map(percent, 0, 100, oldObj["ry2"], newObj["ry2"]);
  new_letter["rw1"] = map(percent, 0, 100, oldObj["rw1"], newObj["rw1"]);
  new_letter["rh1"] = map(percent, 0, 100, oldObj["rh1"], newObj["rh1"]);
  new_letter["rw2"] = map(percent, 0, 100, oldObj["rw2"], newObj["rw2"]);
  new_letter["rh2"] = map(percent, 0, 100, oldObj["rh2"], newObj["rh2"]);

  new_letter["ax1"] = map(percent, 0, 100, oldObj["ax1"], newObj["ax1"]);
  new_letter["ay1"] = map(percent, 0, 100, oldObj["ay1"], newObj["ay1"]);
  new_letter["aw1"] = map(percent, 0, 100, oldObj["aw1"], newObj["aw1"]);
  new_letter["ah1"] = map(percent, 0, 100, oldObj["ah1"], newObj["ah1"]);
  new_letter["angle1"] = map(percent, 0, 100, oldObj["angle1"], newObj["angle1"]);
  new_letter["angle2"] = map(percent, 0, 100, oldObj["angle2"], newObj["angle2"]);

  new_letter["ax2"] = map(percent, 0, 100, oldObj["ax2"], newObj["ax2"]);
  new_letter["ay2"] = map(percent, 0, 100, oldObj["ay2"], newObj["ay2"]);
  new_letter["aw2"] = map(percent, 0, 100, oldObj["aw2"], newObj["aw2"]);
  new_letter["ah2"] = map(percent, 0, 100, oldObj["ah2"], newObj["ah2"]);
  new_letter["angle3"] = map(percent, 0, 100, oldObj["angle3"], newObj["angle3"]);
  new_letter["angle4"] = map(percent, 0, 100, oldObj["angle4"], newObj["angle4"]);





  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
