const colorFront  = "#000000";
const colorStroke = "#000000";


function drawLetter(letterData) {

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  //paramaters in terms of letterData
  let x = letterData["x"];
  let y = letterData["y"];

  let x2 = letterData["x2"];
  let y2 = letterData["y2"];

  let x3 = letterData["x3"];
  let y3 = letterData["y3"];

  let x4 = letterData["x4"];
  let y4 = letterData["y4"];

  let x5 = letterData["x5"];
  let y5 = letterData["y5"];

  let x6 = letterData["x6"];
  let y6 = letterData["y6"];

  // line segment
  line(x,y,x2,y2);
  line(x2,y2,x3,y3);
  line(x3,y3,x4,y4);

  //single line
  line(x5,y5,x6,y6);
}

function interpolate_letter(percent, oldObj, newObj){
  
  //mapping interpolation
  let new_letter = {};
  new_letter["x"]  = map(percent, 0, 100, oldObj["x"],  newObj["x"]);
  new_letter["y"]  = map(percent, 0, 100, oldObj["y"],  newObj["y"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["x6"] = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  return new_letter;

}


