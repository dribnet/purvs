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
  //let start = letterData["start"];
  //let stop =  letterData["end"];
  //let start2 = letterData["start2"];
  //let stop2 =  letterData["end2"];

  //line(start,stop,start2,stop2);

  drawB(letterData);
  // drawA(letterData["A"]);
  // drawB(letterData);
   // drawC(letterData);
}


function drawA(letterD){

  let start = letterD["start"];
  let stop =  letterD["end"];
  let start2 = letterD["start2"];
  let stop2 =  letterD["end2"];
  let start3 = letterD["start3"];
  let stop3 =  letterD["end3"];
  let start4 = letterD["start4"];
  let stop4 =  letterD["end4"];

  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
 
}
function drawB(letterD){

  let start = letterD["start"];
  let stop =  letterD["end"];
  let start2 = letterD["start2"];
  let stop2 =  letterD["end2"];
  let start3 = letterD["start3"];
  let stop3 =  letterD["end3"];
  let start4 = letterD["start4"];
  let stop4 =  letterD["end4"];
  let start5 = letterD["start5"];
  let stop5 =  letterD["end5"];

  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
  line(start4,stop4,start5,stop5);

  }

function drawC(letterD){
 
  let start = letterD["start"];
  let stop =  letterD["end"];
  let start2 = letterD["start2"];
  let stop2 =  letterD["end2"];
  let start3 = letterD["start3"];
  let stop3 =  letterD["end3"];
  let start4 = letterD["start4"];
  let stop4 =  letterD["end4"];
  let start5 = letterD["start5"];
  let stop5 =  letterD["end5"];

  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["start"]    = map(percent, 0, 100, oldObj["start"], newObj["start"]);
  new_letter["end"]    = map(percent, 0, 100, oldObj["end"], newObj["end"]);
  new_letter["start2"]    = map(percent, 0, 100, oldObj["start2"], newObj["start2"]);
  new_letter["end2"]    = map(percent, 0, 100, oldObj["end2"], newObj["end2"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]




