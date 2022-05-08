/* these are optional special variables which will change the system */

var systemBackgroundColor = '#665668';
//old: #531AE5 #AE9B62 #97A586
//fun #DF8CC7 #161A46 #ffffff #ffd454
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const dark  = "#473f4f";

//old: #96582f #ACE51A #6276AE
//fun #8CDFA4 #464216 #9486A5
const light  = "#7E8E6A";
const strokeColor  = "#0f0f00";
//green #547780 #7E8E6A

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup



stroke(strokeColor);
 strokeWeight(0);


// let x1 = letterData["x1"];
// let y1 = letterData["y1"];
// let x2 = letterData["x2"];
// let y2 = letterData["y2"];
// let x3 = letterData["x3"];
// let y3 = letterData["y3"];
// let x4 = letterData["x4"];
// let y4 = letterData["y4"];
// let x5 = letterData["x5"];
// let y5 = letterData["y5"];
// let x6 = letterData["x6"];
// let y6 = letterData["y6"];
// let x7 = letterData["x7"];
// let y7 = letterData["y7"];
// let x8 = letterData["x8"];
// let y8 = letterData["y8"];



  // backing shapes
  fill(10,9,7,180);
  //complement to purple: 40,35,30
  rect(0,50,100,100)
  //ellipse(50,100,110,110);



  fill(20,220);
  rect(0,50,80,80)

  push();
  noFill();

  stroke(systemBackgroundColor)
  strokeWeight(1);
    translate(-10,10);
    scale(.8,1.2);

  beginShape();
      vertex(letterData["x1"],letterData["y1"]);
      bezierVertex(letterData["x2"],letterData["y2"],letterData["x3"],letterData["y3"],letterData["x4"],letterData["y4"]);
      bezierVertex(letterData["x4"],letterData["y4"],letterData["x5"],letterData["y5"],letterData["x6"],letterData["y6"]);
      bezierVertex(letterData["x6"],letterData["y6"],letterData["x7"],letterData["y7"],letterData["x8"],letterData["y8"]);
  endShape(CLOSE); //this makes some character outlines look a lot better (no missing lines) but does cause a couple minor visual bugs

  pop();
 // fill(dark);
 //  ellipse(50,100,100,100);
//  ellipse(pos2x, pos2y, size2, size2);
//  strokeWeight(2);
fill(systemBackgroundColor);
push();

  translate(5,15);
  scale(.9);

beginShape();
    vertex(letterData["x1"],letterData["y1"]);
    bezierVertex(letterData["x2"],letterData["y2"],letterData["x3"],letterData["y3"],letterData["x4"],letterData["y4"]);
    bezierVertex(letterData["x4"],letterData["y4"],letterData["x5"],letterData["y5"],letterData["x6"],letterData["y6"]);
    bezierVertex(letterData["x6"],letterData["y6"],letterData["x7"],letterData["y7"],letterData["x8"],letterData["y8"]);
endShape();

pop();

}

function interpolate_letter(percent, oldObj, newObj) {

  let new_letter = {};

  let targetVar = 0; //controlling animation flair



  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["x7"] = map(percent, 0, 100, oldObj["x7"], newObj["x7"]);
  new_letter["x8"] = map(percent, 0, 100, oldObj["x8"], newObj["x8"]);
  if (percent < 50){
rotate(-percent/400);
}
else{
  rotate(-.25)
  rotate(percent/400);
}
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  new_letter["y7"] = map(percent, 0, 100, oldObj["y7"], newObj["y7"]);
  new_letter["y8"] = map(percent, 0, 100, oldObj["y8"], newObj["y8"]);


  return new_letter;


}

var swapWords = [

  "SHADOWS",
  "QUESTION",
  "RESTEASY",
  "12345678",
]
