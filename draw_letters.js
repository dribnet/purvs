/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const babyBlue  = "#89cff0";
const lightBlue  = "#cdebf9";
const lBabyBlue = "#b6e2f6";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  drawA(letterData["A"]);
  drawB(letterData["B"]);
  drawC(letterData["C"]);
}
function drawA(letterData){

  let start = letterData["start"];
  let stop =  letterData["end"];
  let start2 = letterData["start2"];
  let stop2 =  letterData["end2"];
  let start3 = letterData["start3"];
  let stop3 =  letterData["end3"];
  let start4 = letterData["start4"];
  let stop4 =  letterData["end4"];

  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
 
}
function drawB(letterData){

  let start = letterData["start"];
  let stop =  letterData["end"];
  let start2 = letterData["start2"];
  let stop2 =  letterData["end2"];
  let start3 = letterData["start3"];
  let stop3 =  letterData["end3"];
  let start4 = letterData["start4"];
  let stop4 =  letterData["end4"];
  let start5 = letterData["start5"];
  let stop5 =  letterData["end5"];

  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
  line(start4,stop4,start5,stop5);

  }

function drawC(letterData){
 
  let start = letterData["start"];
  let stop =  letterData["end"];
  let start2 = letterData["start2"];
  let stop2 =  letterData["end2"];
  let start3 = letterData["start3"];
  let stop3 =  letterData["end3"];
  let start4 = letterData["start4"];
  let stop4 =  letterData["end4"];
  let start5 = letterData["start5"];
  let stop5 =  letterData["end5"];

  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
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




