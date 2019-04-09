const colorFront1  = (0);
const colorFront2  = (0);
const colorStroke  = (255);

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(100);
  strokeWeight(4);


  // determine parameters for second circle
  //let size2 = letterData["size"];

   let posx = 0;
  let posy = 0;
 let pos1x = posx+letterData["x"];
  let pos1y = posy+letterData["y"];
  let pos2x = posx+letterData["x1"];
  let pos2y = posy+letterData["y1"];
  let pos3x = posx+letterData["x2"];
  let pos3y = posy+letterData["y2"];
  let pos4x = posx+letterData["x3"];
  let pos4y = posy+letterData["y3"];
  let pos5x = posx+letterData["x4"];
  let pos5y = posy+letterData["y4"];
  let pos6x = posx+letterData["x5"];
  let pos6y = posy+letterData["y5"];
  let pos7x = posx+letterData["x6"];
  let pos7y = posy+letterData["y6"];
  let pos8x = posx+letterData["x7"];
  let pos8y = posy+letterData["y7"];
 

  //color of the alphabet
  fill (255,255,0,50);
  noStroke();
  triangle(pos1x, pos1y, pos2x, pos2y, pos4x, pos4y);

  fill (250,0,0,50);
  triangle(pos3x, pos3y, pos1x, pos1y, pos2x, pos2y);

  fill (250,0,100,50);
  triangle(pos2x, pos2y, pos8x, pos8y, pos3x, pos3y);

  //lines use to draw the alphabet
  stroke(255);
  strokeWeight(1);
  noFill();
  line(pos1x, pos1y, pos2x, pos2y);
  line(pos2x, pos2y, pos3x, pos3y);
  line(pos1x, pos1y, pos4x, pos4y);
  line(pos4x, pos4y, pos5x, pos5y);
  line(pos5x, pos5y, pos6x, pos6y);
  line(pos2x, pos2y, pos7x, pos7y);
  line(pos7x, pos7y, pos5x, pos5y);
  line(pos2x, pos2y, pos8x, pos8y);
  line(pos8x, pos8y, pos3x, pos3y);

//stars or ellipse
  fill(colorStroke);
  ellipse(pos1x, pos1y, 4, 4);
  ellipse(pos2x, pos2y, 4, 4);
  ellipse(pos3x, pos3y, 4, 4);
  ellipse(pos4x, pos4y, 4, 4);
  ellipse(pos5x, pos5y, 4, 4);
  ellipse(pos6x, pos6y, 4, 4);

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let new_percent = 0;
  let amount_of_anticipation = 40;

  if(percent <= amount_of_anticipation) {
    new_percent = map (percent, 0, 40, 0, -30);


  }
  else{
    new_percent = map(percent, 40, 100, -30, 100);
  }

  //   let new_percent = 0;
  // //let amount_of_anticipation = 20;
  // if(percent < amount_of_anticipation) {
  //   new_percent = map (percent, 0, amount_of_anticipation, 0, -10);
  // }
  // else{
  //   new_percent = map(percent, amount_of_anticipation, 100, -10, 100);
  // }
  new_letter["size"]    = map(new_percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["x"] = map(new_percent, 0, 100, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(new_percent, 0, 100, oldObj["y"], newObj["y"]);
  new_letter["x1"] = map(new_percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(new_percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["x2"] = map(new_percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(new_percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["x3"] = map(new_percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(new_percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["x4"] = map(new_percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(new_percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["x5"] = map(new_percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(new_percent, 0, 100, oldObj["y5"], newObj["y5"]);

  new_letter["x5"] = oldObj["x5"];
  new_letter["y5"] = oldObj["y5"];
  // new_letter["x6"] = map(new_percent, -50, 100, oldObj["x6"], newObj["x6"]);
  // new_letter["y6"] = map(new_percent, -50, 100, oldObj["y6"], newObj["y6"]);
  // new_letter["x7"] = map(new_percent, -50, 100, oldObj["x7"], newObj["x7"]);
  // new_letter["y7"] = map(new_percent, -50, 100, oldObj["y7"], newObj["y7"]);
  // if(percent <10) {
   
  //     new_letter["y"] = oldObj["newObj"];
  // }
  // else if (percent > 90){
  //    new_letter["y"] = oldObj["y"];
  //   //new_letter["y"] = oldObj["newObj"];
  //   // new_letter["y"] = map(percent, 50, 100, oldObj["y"], newObj["y"]);
  // }
  // else{
  //   new_letter["y"] = map(percent, 10, 90, oldObj["y"]);
  // }


  return new_letter;
}

var swapWords = [
  "STAR MAP",
  "CAB?CAB?",
  "BEAUTIFUL"
]
