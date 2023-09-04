/* these are optional special variables which will change the system */
var systemBackgroundColor = "#0d0c24";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  noStroke();
  let size = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let sizeTwo = letterData["size2"];
  let pos3x = letterData["offsetx3"];
  let pos3y = letterData["offsety3"];
  let sizeThree = letterData["size3"];
  let pos4x = letterData["offsetx4"];
  let pos4y = letterData["offsety4"];
  let angleOne = letterData["angleStart"];
  let angleTwo = letterData["angleStop"];

  sun(50, 150, 75); //the main body of the letter - always in the same place and always looks the same
  moon(pos2x, pos2y, size, size);
  planetOne(pos3x, pos3y, sizeTwo, sizeTwo);
  comet(pos4x, pos4y, sizeThree, sizeThree, angleOne, angleTwo)
}

//this is the arc part of the letter form 
//it'll have a comet in the centre point so the arc is like the trail of the comet
function comet(pos4x, pos4y, sizeThree, sizeThree, angleOne, angleTwo) {
  fill(189, 255, 255, 200);
  noStroke();
  //this makes the trail be a gradient
  for (let i = 0; i < 10; i++) {
    gradient = i * sizeThree / 10;
    size = gradient - sizeThree;
    colour = gradient + 140;
    fill(colour, 195, 215, 90);
    arc(pos4x, pos4y, size, size, angleOne, angleTwo); //the trail
  }

  //this draws the comet
  push();
  strokeWeight(1);
  stroke(150);
  fill(75);
  beginShape();
  for (let i = 0; i < 359; i++) {
    var r1 = map(sin(i * 3), -1, 1, sizeThree / 20 - sizeThree / 160, sizeThree / 20);
    var r2 = map(sin(i * 6), -1, 1, sizeThree / 20 - sizeThree / 160, sizeThree / 20);
    var r = r1 + r2;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(pos4x + x, pos4y + y);
  }
  endShape(CLOSE);
  pop();
}

//this is the planet with the 3 wavey rings on it
function planetOne(pos3x, pos3y, sizeTwo, sizeTwo) {
  strokeWeight(1);
  stroke(61, 54, 207); //creates a glowing edge effect around the planet
  fill(35, 32, 97); //dark blue
  ellipse(pos3x, pos3y, sizeTwo, sizeTwo); //the centre planet part
  stroke(117, 154, 255);
  noFill();
  for (f = 0; f < 3; f++) { //this draws the 3 rings
    var offsety = f * sizeTwo / 10;
    bezier(pos3x + sizeTwo / 1.85, pos3y + offsety, pos3x + sizeTwo / 2.25, pos3y + sizeTwo / 6 + offsety, pos3x - sizeTwo / 2.25, pos3y - sizeTwo / 6 + offsety, pos3x - sizeTwo / 1.85, pos3y + offsety);
  }
}


//this is the sun in the centre of the letter
//it's made of multiple sin loops layered on top of each other creating a gradient colour effect
function sun(x, y) {
  rValueArray = [235, 230, 245, 255, 255];
  gValueArray = [119, 165, 191, 212, 230];
  bValueArray = [119, 119, 125, 102, 102];

  for (let j = 0; j < 5; j++) {
    let Rcolour = rValueArray[j];
    let Gcolour = gValueArray[j];
    let Bcolour = bValueArray[j];
    fill(Rcolour, Gcolour, Bcolour, 100); //purple
    let sizeOne = 38 - j * 3;
    let sizeTwo = 42 - j * 3;
    beginShape();
    for (let i = 0; i < 359; i++) {
      var r = map(sin(i * 8), -1, 1, sizeOne, sizeTwo);
      var sunx = r * cos(i);
      var suny = r * sin(i);
      vertex(x + sunx, y + suny);
    }
    endShape(CLOSE);

  }
}

//this is the moon that moves infront of the sun
function moon(pos2x, pos2y, size, size) {
  stroke(130, 130, 160); //this make it seem like the moon has a glowing edge (like it would in an eclipse)
  strokeWeight(1);
  fill(100, 100, 130);

  //this makes the moon not perfectly circular
  beginShape();
  for (let i = 0; i < 359; i++) {
    var r1 = map(sin(i * 3), -1, 1, size / 4 - size / 32, size / 4);
    var r2 = map(sin(i * 6), -1, 1, size / 4 - size / 32, size / 4);
    var r = r1 + r2;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(pos2x + x, pos2y + y);
  }
  endShape(CLOSE);

  //these are the craters
  noStroke();
  fill(130, 130, 160);
  ellipse(pos2x - size / 6, pos2y + size / 6, size / 2.5, size / 2.5);
  ellipse(pos2x + size / 4.5, pos2y - size / 6, size / 3, size / 3);
  ellipse(pos2x + size / 8, pos2y, size / 6, size / 6);
  ellipse(pos2x - size / 4, pos2y - size / 4, size / 5, size / 5);
}

//this is the animation when the letters change over
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  //these change the moon parameters
  if (percent < 30) { //this makes the planet grow slightly before it shrinks so it makes it seem like it's orbiting the sun
    new_letter["size"] = map(percent, 0, 25, oldObj["size"], oldObj["size"] + (oldObj["size"] / 2));
  } else {
    new_letter["size"] = map(percent, 25, 100, oldObj["size"] + (oldObj["size"] / 2), newObj["size"]);
  }

  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);

  //these change the planet parameters
  if (percent < 30) {
    new_letter["size2"] = map(percent, 0, 25, oldObj["size2"], oldObj["size2"] + (oldObj["size2"] / 2));
  } else {
    new_letter["size2"] = map(percent, 25, 100, oldObj["size2"] + (oldObj["size2"] / 2), newObj["size2"]);
  }
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);

  //these change the comet parameters
  if (percent < 30) {
    new_letter["size3"] = map(percent, 0, 25, oldObj["size3"], oldObj["size3"] + (oldObj["size3"] / 2));
  } else {
    new_letter["size3"] = map(percent, 25, 100, oldObj["size3"] + (oldObj["size3"] / 2), newObj["size3"]);
  }
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["angleStart"] = map(percent, 0, 100, oldObj["angleStart"], newObj["angleStart"]);
  new_letter["angleStop"] = map(percent, 0, 100, oldObj["angleStop"], newObj["angleStop"]);
  return new_letter;
}

var swapWords = [
  "ECLIPSED",
  "ASTEROID",
  "AQUARIUS",
  "STARGAZE",
  "OMGCOMET",
  "00000000",
  "SATURN!"
]