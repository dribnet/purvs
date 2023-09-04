/* these are optional special variables which will change the system */
var systemBackgroundColor = "#EBD5F7";
var systemLineColor = "#8ce6aa";
var systemBoxColor = "#f74f4f";

/* internal constants */
const mainpurple  = "#461849";
const lightpurp = "#F0A4F4";
const pinkypurp = "#D561DB";

function drawLetter(letterData) {
  // color/stroke setup
noStroke();

  let circle1x = 0 + letterData["circle1x"];
  let circle1y = 0 + letterData["circle1y"];

  let circle2x = 0 + letterData["circle2x"];
  let circle2y = 0 + letterData["circle2y"];

  let circle3x = 0 + letterData["circle3x"];
  let circle3y = 0 + letterData["circle3y"];

  let circle4x = 0 + letterData["circle4x"];
  let circle4y = 0 + letterData["circle4y"];

  let circle5x = 0 + letterData["circle5x"];
  let circle5y = 0 + letterData["circle5y"];

  let circle6x = 0 + letterData["circle6x"];
  let circle6y = 0 + letterData["circle6y"];

  let circle7x = 0 + letterData["circle7x"];
  let circle7y = 0 + letterData["circle7y"];

  let circle8x = 0 + letterData["circle8x"];
  let circle8y = 0 + letterData["circle8y"];

  let circle9x = 0 + letterData["circle9x"];
  let circle9y = 0 + letterData["circle9y"];

  let circle10x = 0 + letterData["circle10x"];
  let circle10y = 0 + letterData["circle10y"];

  let circle11x = 0 + letterData["circle11x"];
  let circle11y = 0 + letterData["circle11y"];

  let circle12x = 0 + letterData["circle12x"];
  let circle12y = 0 + letterData["circle12y"];
  

// ******************** BACK BOARD *********************
  rectMode(CENTER);
  fill(lightpurp);
  rect (40, 125, 90, 120, 2);

// ******************** DOT SHADOWS BACK *********************

  fill(76, 31, 84, 160); // DARK PURPLE

  // bottom right shadow
  ellipse(circle1x-15, circle1y-13, 8, 8);// edited
  ellipse(circle1x-15, circle1y-2, 8, 8); // edited
  ellipse(circle1x-15, circle1y+9, 8, 8); // edited

  // top left shadow
  ellipse(circle2x-15, circle2y-13, 8, 8);// edited
  ellipse(circle2x-15, circle2y-2, 8, 8); // edited
  ellipse(circle2x-15, circle2y+9, 8, 8); // edited
  ellipse(circle2x+5, circle2y-14, 10, 10);// edited
  ellipse(circle2x-4, circle2y-14, 10, 10); // edited
  ellipse(circle2x-14, circle2y-14, 10, 10); // edited

  // top middle shadow
  ellipse(circle10x+5, circle10y-14, 10, 10);// edited
  ellipse(circle10x-4, circle10y-14, 10, 10); // edited
  ellipse(circle10x-14, circle10y-14, 10, 10); // edited

  // left below line shadow
  ellipse(circle5x-15, circle5y-13, 8, 8);// edited
  ellipse(circle5x-15, circle5y-2, 8, 8); // edited
  ellipse(circle5x-15, circle5y+9, 8, 8); // edited

  // left bottom shadow
  ellipse(circle5x-15, circle5y-13, 8, 8);// edited
  ellipse(circle5x-15, circle5y-2, 8, 8); // edited
  ellipse(circle5x-15, circle5y+9, 8, 8); // edited
  ellipse(circle5x-12, circle5y+10, 10, 10); // edited
  ellipse(circle5x-12, circle5y, 10, 10);

  // above the line left shadow
  ellipse(circle4x-15, circle4y-13, 8, 8);// edited
  ellipse(circle4x-15, circle4y-2, 8, 8); // edited
  ellipse(circle4x-15, circle4y+9, 8, 8); // edited

  ellipse(circle4x+5, circle4y-14, 10, 10);// edited
  ellipse(circle4x-4, circle4y-14, 10, 10); // edited
  ellipse(circle4x-14, circle4y-14, 10, 10); // edited

  // top right shadow
    ellipse(circle6x+5, circle6y-14, 10, 10);// edited
    ellipse(circle6x-4, circle6y-14, 10, 10); // edited
    ellipse(circle6x-14, circle6y-14, 10, 10); // edited

// ******************** DOT SHADOWS FRONT *********************

fill(76, 31, 84, 180); // DARK PURPLE

  ellipse(circle1x+7, circle1y-12, 10, 10);// edited
  ellipse(circle1x-2, circle1y-12, 10, 10); // edited
  ellipse(circle1x-12, circle1y-12, 10, 10); // edited
  ellipse(circle1x-12, circle1y+10, 10, 10); // edited
  ellipse(circle1x-12, circle1y, 10, 10);

//  fill ('black');
  // top row grid
  ellipse(circle10x+7, circle10y-12, 10, 10);// edited
  ellipse(circle10x-2, circle10y-12, 10, 10); // edited
  ellipse(circle10x-12, circle10y-12, 10, 10); // edited

//fill ('red');
  ellipse(circle5x+7, circle5y-12, 10, 10);// edited
  ellipse(circle5x-2, circle5y-12, 10, 10); // edited
  ellipse(circle5x-12, circle5y-12, 10, 10); // edited
  ellipse(circle5x-12, circle5y+10, 10, 10); // edited
  ellipse(circle5x-12, circle5y, 10, 10);

//  fill('yellow');
  // bottom row grid
  ellipse(circle4x+7, circle4y-12, 10, 10);// edited
  ellipse(circle4x-2, circle4y-12, 10, 10); // edited
  ellipse(circle4x-12, circle4y-12, 10, 10); // edited
  ellipse(circle4x-12, circle4y+10, 10, 10); // edited
  ellipse(circle4x-12, circle4y, 10, 10);

//  fill('pink');
  ellipse(circle6x+7, circle6y-12, 10, 10);// edited
  ellipse(circle6x-2, circle6y-12, 10, 10); // edited
  ellipse(circle6x-12, circle6y-12, 10, 10); // edited

//  fill ('lightblue');
  ellipse(circle2x-12, circle2y+9, 10, 10); // edited
  ellipse(circle2x-12, circle2y-1, 10, 10);//edite
  ellipse(circle2x+7, circle2y-12, 10, 10);// edited
  ellipse(circle2x-2, circle2y-12, 10, 10); // edited
  ellipse(circle2x-12, circle2y-12, 10, 10); // edited

// ******************** BOARD CONNECTOR LINES *********************
push();
  stroke(mainpurple);
  strokeWeight(5);
  line(-3, 67, 6, 75);
  line(-3, 184, 6, 193);
  line(84, 67, 93, 76);
pop();

// ******************** BACK BOARD *********************

  rectMode(CENTER);
  fill(pinkypurp);
  rect (50, 135, 90, 120, 2);

  // ******************** MAIN DOTS *********************

// ******************** BOTTOM LEFT SECTION *********************
fill(mainpurple);
// bottom row grid
ellipse(circle1x, circle1y+10, 10, 10);
ellipse(circle1x+10, circle1y+10, 10, 10);
ellipse(circle1x-10, circle1y+10, 10, 10);

// middle row grid
ellipse(circle1x-10, circle1y, 10, 10);
ellipse(circle1x, circle1y, 10, 10);
ellipse(circle1x+10, circle1y, 10, 10);

// top row grid
ellipse(circle1x-10, circle1y-10, 10, 10);
ellipse(circle1x+10, circle1y-10, 10, 10);
ellipse(circle1x, circle1y-10, 10, 10);

// ******************** MIDDLE BOTTOM SECTION *********************

// bottom row grid
ellipse(circle2x, circle2y+10, 10, 10);
ellipse(circle2x+10, circle2y+10, 10, 10);
ellipse(circle2x-10, circle2y+10, 10, 10);

// middle row grid
ellipse(circle2x-10, circle2y, 10, 10);
ellipse(circle2x, circle2y, 10, 10);
ellipse(circle2x+10, circle2y, 10, 10);

// top row grid
ellipse(circle2x-10, circle2y-10, 10, 10);
ellipse(circle2x+10, circle2y-10, 10, 10);
ellipse(circle2x, circle2y-10, 10, 10);

// ******************** MIDDLE TOP SECTION *********************

// bottom row grid
ellipse(circle3x, circle3y+10, 10, 10);
ellipse(circle3x+10, circle3y+10, 10, 10);
ellipse(circle3x-10, circle3y+10, 10, 10);

// middle row grid
ellipse(circle3x-10, circle3y, 10, 10);
ellipse(circle3x, circle3y, 10, 10);
ellipse(circle3x+10, circle3y, 10, 10);

// top row grid
ellipse(circle3x-10, circle3y-10, 10, 10);
ellipse(circle3x+10, circle3y-10, 10, 10);
ellipse(circle3x, circle3y-10, 10, 10);

// ******************** LEFT ABOVE LINE SECTION *********************

// bottom row grid
ellipse(circle4x, circle4y+10, 10, 10);
ellipse(circle4x+10, circle4y+10, 10, 10);
ellipse(circle4x-10, circle4y+10, 10, 10);

// middle row grid
ellipse(circle4x-10, circle4y, 10, 10);
ellipse(circle4x, circle4y, 10, 10);
ellipse(circle4x+10, circle4y, 10, 10);

// top row grid
ellipse(circle4x-10, circle4y-10, 10, 10);
ellipse(circle4x+10, circle4y-10, 10, 10);
ellipse(circle4x, circle4y-10, 10, 10);

// ******************** LEFT BELOW LINE SECTION *********************

// bottom row grid
ellipse(circle5x, circle5y+10, 10, 10);
ellipse(circle5x+10, circle5y+10, 10, 10);
ellipse(circle5x-10, circle5y+10, 10, 10);

// middle row grid
ellipse(circle5x-10, circle5y, 10, 10);
ellipse(circle5x, circle5y, 10, 10);
ellipse(circle5x+10, circle5y, 10, 10);

// top row grid
ellipse(circle5x-10, circle5y-10, 10, 10);
ellipse(circle5x+10, circle5y-10, 10, 10);
ellipse(circle5x, circle5y-10, 10, 10);

// ******************** TOP RIGHT SECTION *********************

// bottom row grid
ellipse(circle6x, circle6y+10, 10, 10);
ellipse(circle6x+10, circle6y+10, 10, 10);
ellipse(circle6x-10, circle6y+10, 10, 10);

// middle row grid
ellipse(circle6x-10, circle6y, 10, 10);
ellipse(circle6x, circle6y, 10, 10);
ellipse(circle6x+10, circle6y, 10, 10);

// top row grid
ellipse(circle6x-10, circle6y-10, 10, 10);
ellipse(circle6x+10, circle6y-10, 10, 10);
ellipse(circle6x, circle6y-10, 10, 10);

// ******************** BOTTOM RIGHT SECTION *********************

// bottom row grid
ellipse(circle7x, circle7y+10, 10, 10);
ellipse(circle7x+10, circle7y+10, 10, 10);
ellipse(circle7x-10, circle7y+10, 10, 10);

// middle row grid
ellipse(circle7x-10, circle7y, 10, 10);
ellipse(circle7x, circle7y, 10, 10);
ellipse(circle7x+10, circle7y, 10, 10);

// top row grid
ellipse(circle7x-10, circle7y-10, 10, 10);
ellipse(circle7x+10, circle7y-10, 10, 10);
ellipse(circle7x, circle7y-10, 10, 10);

// ******************** RIGHT ABOVE LINE SECTION *********************

// bottom row grid
ellipse(circle8x, circle8y+10, 10, 10);
ellipse(circle8x+10, circle8y+10, 10, 10);
ellipse(circle8x-10, circle8y+10, 10, 10);

// middle row grid
ellipse(circle8x-10, circle8y, 10, 10);
ellipse(circle8x, circle8y, 10, 10);
ellipse(circle8x+10, circle8y, 10, 10);

// top row grid
ellipse(circle8x-10, circle8y-10, 10, 10);
ellipse(circle8x+10, circle8y-10, 10, 10);
ellipse(circle8x, circle8y-10, 10, 10);

// ******************** RIGHT BELOW LINE SECTION *********************

// bottom row grid
ellipse(circle9x, circle9y+10, 10, 10);
ellipse(circle9x+10, circle9y+10, 10, 10);
ellipse(circle9x-10, circle9y+10, 10, 10);

// middle row grid
ellipse(circle9x-10, circle9y, 10, 10);
ellipse(circle9x, circle9y, 10, 10);
ellipse(circle9x+10, circle9y, 10, 10);

// top row grid
ellipse(circle9x-10, circle9y-10, 10, 10);
ellipse(circle9x+10, circle9y-10, 10, 10);
ellipse(circle9x, circle9y-10, 10, 10);

// ******************** MIDDLE TOP SECTION *********************

// bottom row grid
ellipse(circle10x, circle10y+10, 10, 10);
ellipse(circle10x+10, circle10y+10, 10, 10);
ellipse(circle10x-10, circle10y+10, 10, 10);

// middle row grid
ellipse(circle10x-10, circle10y, 10, 10);
ellipse(circle10x, circle10y, 10, 10);
ellipse(circle10x+10, circle10y, 10, 10);

// top row grid
ellipse(circle10x-10, circle10y-10, 10, 10);
ellipse(circle10x+10, circle10y-10, 10, 10);
ellipse(circle10x, circle10y-10, 10, 10);

// ******************** MIDDLE ABOVE LINE SECTION *********************

// bottom row grid
ellipse(circle11x, circle11y+10, 10, 10);
ellipse(circle11x+10, circle11y+10, 10, 10);
ellipse(circle11x-10, circle11y+10, 10, 10);

// middle row grid
ellipse(circle11x-10, circle11y, 10, 10);
ellipse(circle11x, circle11y, 10, 10);
ellipse(circle11x+10, circle11y, 10, 10);

// top row grid
ellipse(circle11x-10, circle11y-10, 10, 10);
ellipse(circle11x+10, circle11y-10, 10, 10);
ellipse(circle11x, circle11y-10, 10, 10);

// ******************** MIDDLE BELOW LINE SECTION *********************

// bottom row grid
ellipse(circle12x, circle12y+10, 10, 10);
ellipse(circle12x+10, circle12y+10, 10, 10);
ellipse(circle12x-10, circle12y+10, 10, 10);

// middle row grid
ellipse(circle12x-10, circle12y, 10, 10);
ellipse(circle12x, circle12y, 10, 10);
ellipse(circle12x+10, circle12y, 10, 10);

// top row grid
ellipse(circle12x-10, circle12y-10, 10, 10);
ellipse(circle12x+10, circle12y-10, 10, 10);
ellipse(circle12x, circle12y-10, 10, 10);

}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let defaultchar = getObjFromChar("default");

if (percent < 50){
  new_letter["circle1x"]    = map(percent, 0, 50, oldObj["circle1x"], defaultchar["circle1x"]);
  new_letter["circle1y"] = map(percent, 0, 50, oldObj["circle1y"], defaultchar["circle1y"]);
  new_letter["circle2x"]    = map(percent, 0, 50, oldObj["circle2x"], defaultchar["circle2x"]);
  new_letter["circle2y"] = map(percent, 0, 50, oldObj["circle2y"], defaultchar["circle2y"]);
  new_letter["circle3x"]    = map(percent, 0, 50, oldObj["circle3x"], defaultchar["circle3x"]);
  new_letter["circle3y"] = map(percent, 0, 50, oldObj["circle3y"], defaultchar["circle3y"]);
  new_letter["circle4x"]    = map(percent, 0, 50, oldObj["circle4x"], defaultchar["circle4x"]);
  new_letter["circle4y"] = map(percent, 0, 50, oldObj["circle4y"], defaultchar["circle4y"]);
  new_letter["circle5x"]    = map(percent, 0, 50, oldObj["circle5x"], defaultchar["circle5x"]);
  new_letter["circle5y"] = map(percent, 0, 50, oldObj["circle5y"], defaultchar["circle5y"]);
  new_letter["circle6x"]    = map(percent, 0, 50, oldObj["circle6x"], defaultchar["circle6x"]);
  new_letter["circle6y"] = map(percent, 0, 50, oldObj["circle6y"], defaultchar["circle6y"]);
  new_letter["circle7x"]    = map(percent, 0, 50, oldObj["circle7x"], defaultchar["circle7x"]);
  new_letter["circle7y"] = map(percent, 0, 50, oldObj["circle7y"], defaultchar["circle7y"]);
  new_letter["circle8x"]    = map(percent, 0, 50, oldObj["circle8x"], defaultchar["circle8x"]);
  new_letter["circle8y"] = map(percent, 0, 50, oldObj["circle8y"], defaultchar["circle8y"]);
  new_letter["circle9x"]    = map(percent, 0, 50, oldObj["circle9x"], defaultchar["circle9x"]);
  new_letter["circle9y"] = map(percent, 0, 50, oldObj["circle9y"], defaultchar["circle9y"]);
  new_letter["circle10x"]    = map(percent, 0, 50, oldObj["circle10x"], defaultchar["circle10x"]);
  new_letter["circle10y"] = map(percent, 0, 50, oldObj["circle10y"], defaultchar["circle10y"]);
  new_letter["circle11x"]    = map(percent, 0, 50, oldObj["circle11x"], defaultchar["circle11x"]);
  new_letter["circle11y"] = map(percent, 0, 50, oldObj["circle11y"], defaultchar["circle11y"]);
  new_letter["circle12x"]    = map(percent, 0, 50, oldObj["circle12x"], defaultchar["circle12x"]);
  new_letter["circle12y"] = map(percent, 0, 50, oldObj["circle12y"], defaultchar["circle12y"]);

}
else {
  new_letter["circle1x"]    = map(percent, 51, 100, defaultchar["circle1x"], newObj["circle1x"]);
  new_letter["circle1y"] = map(percent, 51, 100, defaultchar["circle1y"], newObj["circle1y"]);
  new_letter["circle2x"]    = map(percent, 51, 100, defaultchar["circle2x"], newObj["circle2x"]);
  new_letter["circle2y"] = map(percent, 51, 100, defaultchar["circle2y"], newObj["circle2y"]);
  new_letter["circle3x"]    = map(percent, 51, 100, defaultchar["circle3x"], newObj["circle3x"]);
  new_letter["circle3y"] = map(percent, 51, 100, defaultchar["circle3y"], newObj["circle3y"]);
  new_letter["circle4x"]    = map(percent, 51, 100, defaultchar["circle4x"], newObj["circle4x"]);
  new_letter["circle4y"] = map(percent, 51, 100, defaultchar["circle4y"], newObj["circle4y"]);
  new_letter["circle5x"]    = map(percent, 51, 100, defaultchar["circle5x"], newObj["circle5x"]);
  new_letter["circle5y"] = map(percent, 51, 100, defaultchar["circle5y"], newObj["circle5y"]);
  new_letter["circle6x"]    = map(percent, 51, 100, defaultchar["circle6x"], newObj["circle6x"]);
  new_letter["circle6y"] = map(percent, 51, 100, defaultchar["circle6y"], newObj["circle6y"]);
  new_letter["circle7x"]    = map(percent, 51, 100, defaultchar["circle7x"], newObj["circle7x"]);
  new_letter["circle7y"] = map(percent, 51, 100, defaultchar["circle7y"], newObj["circle7y"]);
  new_letter["circle8x"]    = map(percent, 51, 100, defaultchar["circle8x"], newObj["circle8x"]);
  new_letter["circle8y"] = map(percent, 51, 100, defaultchar["circle8y"], newObj["circle8y"]);
  new_letter["circle9x"]    = map(percent, 51, 100, defaultchar["circle9x"], newObj["circle9x"]);
  new_letter["circle9y"] = map(percent, 51, 100, defaultchar["circle9y"], newObj["circle9y"]);
  new_letter["circle10x"]    = map(percent, 51, 100, defaultchar["circle10x"], newObj["circle10x"]);
  new_letter["circle10y"] = map(percent, 51, 100, defaultchar["circle10y"], newObj["circle10y"]);
  new_letter["circle11x"]    = map(percent, 51, 100, defaultchar["circle11x"], newObj["circle11x"]);
  new_letter["circle11y"] = map(percent, 51, 100, defaultchar["circle11y"], newObj["circle11y"]);
  new_letter["circle12x"]    = map(percent, 51, 100, defaultchar["circle12x"], newObj["circle12x"]);
  new_letter["circle12y"] = map(percent, 51, 100, defaultchar["circle12y"], newObj["circle12y"]);
}
  return new_letter;
  return new_letter;
}

var swapWords = [
  "PINPOINT",
  "PLAYTIME",
  "FRIENDLY",
  "GAMETIME",
  "FUN FUN",
  "WOO HOOO",

]
