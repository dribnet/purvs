/* these are optional special variables which will change the system */
var systemBackgroundColor = "#a7c6d5";
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

  let start6 = letterData["start6"];
   let stop6 =  letterData["end6"];

  let start7 = letterData["start7"];
    let stop7 =  letterData["end7"];

  let start8 = letterData["start8"];
    let stop8 =  letterData["end8"];

     stroke(babyBlue);
  strokeWeight(7);
  line(start +3,stop +3,start2 +3,stop2 +3);
  line(start3 +3,stop3 +3,start4 +3,stop4 +3);
  line(start5 +3,stop5 +3,start6 +3,stop6 +3);
  line(start7 +3,stop7 +3,start8 +3,stop8 +3);

  stroke(lBabyBlue);
  strokeWeight(4);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
  line(start5,stop5,start6,stop6);
  line(start7,stop7,start8,stop8);


 /*stroke(babyBlue);
  strokeWeight(5);
  line(start -10,stop -10,start2 -10,stop2 -10);
  line(start3 -10,stop3 -10,start4 -10,stop4 -10);
  line(start5 -10,stop5 -10,start6 -10,stop6 -10);
  line(start7 -10,stop7 -10,start8 -10,stop8 -10);*/


}
 
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["start"]    = map(percent, 0, 100, oldObj["start"], newObj["start"]);
    new_letter["end"]    = map(percent, 0, 100, oldObj["end"], newObj["end"]);
  new_letter["start2"]    = map(percent, 0, 100, oldObj["start2"], newObj["start2"]);
    new_letter["end2"]    = map(percent, 0, 100, oldObj["end2"], newObj["end2"]);
  new_letter["start3"]    = map(percent, 0, 100, oldObj["start3"], newObj["start3"]);
    new_letter["end3"]    = map(percent, 0, 100, oldObj["end3"], newObj["end3"]);
  new_letter["start4"]    = map(percent, 0, 100, oldObj["start4"], newObj["start4"]);
    new_letter["end4"]    = map(percent, 0, 100, oldObj["end4"], newObj["end4"]);
  new_letter["start5"]    = map(percent, 0, 100, oldObj["start5"], newObj["start5"]);
    new_letter["end5"]    = map(percent, 0, 100, oldObj["end5"], newObj["end5"]);
  new_letter["start6"]    = map(percent, 0, 100, oldObj["start6"], newObj["start6"]);
    new_letter["end6"]    = map(percent, 0, 100, oldObj["end6"], newObj["end6"]);
  new_letter["start7"]    = map(percent, 0, 100, oldObj["start7"], newObj["start7"]);
    new_letter["end7"]    = map(percent, 0, 100, oldObj["end7"], newObj["end7"]);
  new_letter["start8"]    = map(percent, 0, 100, oldObj["start8"], newObj["start8"]);
    new_letter["end8"]    = map(percent, 0, 100, oldObj["end8"], newObj["end8"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]




