/* these are optional special variables which will change the system */
var systemBackgroundColor = "#a7c6d5";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#7aa2b6";
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

  //gets all the parameters from the letters and makes them into variables to use for drawing lines thatll for letters

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

    //this is my fake 3d
  stroke(darkBlue);
  strokeWeight(7);
  line(start +4,stop +4,start2 +4,stop2 +4);
  line(start3 +4,stop3 +4,start4 +4,stop4 +4);
  line(start5 +4,stop5 +4,start6 +4,stop6 +4);
  line(start7 +4,stop7 +4,start8 +4,stop8 +4);

  //draws the letters
  stroke(lBabyBlue);
  strokeWeight(4);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
  line(start5,stop5,start6,stop6);
  line(start7,stop7,start8,stop8);

}
 
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};


//this was my first attempt at the scale interpolation
  //new_letter["scale"] = map(percent,0,100,0.1,2); //maps the scale so it increases the size from the top left corner
 // scale(new_letter["scale"]); //puts the current sc data from the map to te scale of the letter

  //interpolates between the letters 
  if(percent <= 50){ //checks if the percentage is below 50 then merges all the lines into the middle of the screen 
  new_letter["start"]    = map(percent, 0, 50, oldObj["start"], 50);
    new_letter["end"]    = map(percent, 0, 50, oldObj["end"], 100);
  new_letter["start2"]    = map(percent, 0, 50, oldObj["start2"], 50);
    new_letter["end2"]    = map(percent, 0, 50, oldObj["end2"], 100);
  new_letter["start3"]    = map(percent, 0, 50, oldObj["start3"], 50);
    new_letter["end3"]    = map(percent, 0, 50, oldObj["end3"], 100);
  new_letter["start4"]    = map(percent, 0, 50, oldObj["start4"], 50);
    new_letter["end4"]    = map(percent, 0, 50, oldObj["end4"], 100);
  new_letter["start5"]    = map(percent, 0, 50, oldObj["start5"], 50);
    new_letter["end5"]    = map(percent, 0, 50, oldObj["end5"], 100);
  new_letter["start6"]    = map(percent, 0, 50, oldObj["start6"], 50);
    new_letter["end6"]    = map(percent, 0, 50, oldObj["end6"], 100);
  new_letter["start7"]    = map(percent, 0, 50, oldObj["start7"], 50);
    new_letter["end7"]    = map(percent, 0, 50, oldObj["end7"], 100);
  new_letter["start8"]    = map(percent, 0, 50, oldObj["start8"], 50);
    new_letter["end8"]    = map(percent, 0, 50, oldObj["end8"], 100);
}
else if(percent > 50) { //checks if the percentage is above 50 then grows the lines into the new letter
    new_letter["start"]    = map(percent, 51, 100, 50, newObj["start"]);
    new_letter["end"]    = map(percent, 51, 100, 100, newObj["end"]);
  new_letter["start2"]    = map(percent, 51, 100, 50, newObj["start2"]);
    new_letter["end2"]    = map(percent, 51, 100, 100, newObj["end2"]);
  new_letter["start3"]    = map(percent, 51, 100, 50, newObj["start3"]);
    new_letter["end3"]    = map(percent, 51, 100, 100, newObj["end3"]);
  new_letter["start4"]    = map(percent, 51, 100, 50, newObj["start4"]);
    new_letter["end4"]    = map(percent, 51, 100, 100, newObj["end4"]);
  new_letter["start5"]    = map(percent, 51, 100, 50, newObj["start5"]);
    new_letter["end5"]    = map(percent, 51, 100, 100, newObj["end5"]);
  new_letter["start6"]    = map(percent, 51, 100, 50, newObj["start6"]);
    new_letter["end6"]    = map(percent, 51, 100, 100, newObj["end6"]);
  new_letter["start7"]    = map(percent, 51, 100, 50, newObj["start7"]);
    new_letter["end7"]    = map(percent, 51, 100, 100, newObj["end7"]);
  new_letter["start8"]    = map(percent, 51, 100, 50, newObj["start8"]);
    new_letter["end8"]    = map(percent, 51, 100, 100, newObj["end8"]);
  }
  return new_letter;
}
var swapWords = [
  "VASTRACT", //name of my font
  "12345678",
  "ALTHOUGH",
  "HAPPENED",
  "QUESTION",
  "ANYTHING",
  "BUILDING",
  "BUSINESS",
  "NATIONAL",
  "CONTINUE",
  "PLANNING",
  "STUDENTS",
  "ECONOMIC",
  "EVIDENCE",
  "99TEST99",
  "ADDITION"
]




