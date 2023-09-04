const colorFront1  = "#50b58d"; //Jungle green
const colorFront2  = "#f4ddb4"; //Peach yellow
const colorFront3  = "#d04b38"; //Fire-brick red

function drawLetter(letterData) {
  noStroke();

  //Arc size setup
  let arcWid = letterData ["arcW"];
  let arcHei = letterData ["arcH"];

  //letter parameters
  //Arc 1
  let arcX = letterData ["arcX"];
  let arcY = letterData ["arcY"];
  let arcS = letterData ["arcS"];
  let arcE = letterData ["arcE"];

  //Arc 2
  let arcX2 = letterData ["arcX2"];
  let arcY2 = letterData ["arcY2"];
  let arcS2 = letterData ["arcS2"];
  let arcE2 = letterData ["arcE2"];

  //Arc 3
  let arcX3 = letterData ["arcX3"];
  let arcY3 = letterData ["arcY3"];
  let arcS3 = letterData ["arcS3"];
  let arcE3 = letterData ["arcE3"];

  //Arc 1
  fill(colorFront1);
  arc(arcX, arcY, arcWid, arcHei, arcS, arcE);

  //Arc 2
  fill(colorFront2);
  arc(arcX2, arcY2, arcWid, arcHei, arcS2, arcE2);

  //Arc 3
  fill(colorFront3);
  stroke(colorFront3);
  strokeWeight(1);
  arc(arcX3, arcY3, arcWid, arcHei, arcS3, arcE3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  //Arc width and height map setup
  new_letter["arcW"] = map(percent, 0, 100, oldObj["arcW"], newObj["arcW"]);
  new_letter["arcH"] = map(percent, 0, 100, oldObj["arcH"], newObj["arcH"]);

  //Arc 1
  new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);

  //Percent transition control setup
  if (percent < 70) { //Controls the transition of the letter switching from its previous form, from a smooth movement, until it finally clicks/locks into place in its new form
    new_letter["arcS"] = oldObj["arcS"];
    new_letter["arcE"] = oldObj["arcE"];
  }

  else {
    new_letter["arcS"] = map(percent/5, 0, 100, oldObj["arcS"], newObj["arcS"]); //Controls the speed of the arcs transitioning into the new letter form
    new_letter["arcE"] = map(percent/5, 0, 100, oldObj["arcE"], newObj["arcE"]); //Controls the speed of the arcs transitioning into the new letter form
  }

  //Arc 2
  new_letter["arcX2"] = map(percent, 0, 100, oldObj["arcX2"], newObj["arcX2"]);
  new_letter["arcY2"] = map(percent, 0, 100, oldObj["arcY2"], newObj["arcY2"]);

  //Percent transition control setup
  if (percent < 70) { //Controls the transition of the letter switching from its previous form, from a smooth movement, until it finally clicks/locks into place in its new form
    new_letter["arcS2"] = oldObj["arcS2"];
    new_letter["arcE2"] = oldObj["arcE2"];
  }

  else {
    new_letter["arcS2"] = map(percent/5, 0, 100, oldObj["arcS2"], newObj["arcS2"]); //Controls the speed of the arcs transitioning into the new letter form
    new_letter["arcE2"] = map(percent/5, 0, 100, oldObj["arcE2"], newObj["arcE2"]); //Controls the speed of the arcs transitioning into the new letter form
  }

  //Arc 3
  new_letter["arcX3"] = map(percent, 0, 100, oldObj["arcX3"], newObj["arcX3"]);
  new_letter["arcY3"] = map(percent, 0, 100, oldObj["arcY3"], newObj["arcY3"]);

  //Percent transition control setup
  if (percent < 70) { //Controls the transition of the letter switching from its previous form, from a smooth movement, until it finally clicks/locks into place in its new form
    new_letter["arcS3"] = oldObj["arcS3"];
    new_letter["arcE3"] = oldObj["arcE3"];
  }

  else {
    new_letter["arcS3"] = map(percent/5, 0, 100, oldObj["arcS3"], newObj["arcS3"]); //Controls the speed of the arcs transitioning into the new letter form
    new_letter["arcE3"] = map(percent/5, 0, 100, oldObj["arcE3"], newObj["arcE3"]); //Controls the speed of the arcs transitioning into the new letter form
  }

  return new_letter;
}

var swapWords = [
  "ASTROMEC", //The name of my font (pronounced as astro-mech)
  "ROBOTICS",
  "COUPLING",
  "INFRARED",
  "DROID789",
  "VOYAGER2",
  "ODYSSEY?",
  "EXPLORER",
]
