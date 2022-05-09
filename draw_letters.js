/* these are optional special variables which will change the system */
var systemBackgroundColor = "white";
var systemLineColor = "#8ce6aa";
var systemBoxColor = "#f74f4f";

/* internal constants */
const darkBlue  = "#f5eddc";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

const lightred = "#F15A4D";
const darkred = "#A53D3C";
const darkerblue = "#5496A5";
const lighterblue = "#90D7EF";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
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

  rectMode(CENTER);
  fill('#F0A4F4'); // light red
  rect (40, 135, 90, 120, 5);

  fill('#916593'); // light red
  rect (4, 80, 18, 10);
  rect (4, 190, 18, 10);

  rectMode(CENTER);
  fill('#D561DB'); // light red
  rect (50, 135, 90, 120, 5);




 //rectMode(CENTER);
 //push();
//  fill('white');
//  stroke('black');
//  strokeWeight(3);
//  rect (55, 100, 100, 210, 20);

//  fill('white');
//  stroke('black');
//  strokeWeight(3);
//  rect (45, 100, 100, 210, 20);
//  pop();



  fill(lighterblue); // WHITE CIRC
//  stroke(darkerblue);
//  strokeWeight(1);

//  fill('grey');
//  ellipse(circle1x-7, circle1y+7, 20, 20);
//  ellipse(circle2x-7, circle2y+7, 20, 20);
//  ellipse(circle3x-7, circle3y+7, 20, 20);
//  ellipse(circle4x-7, circle4y+7, 20, 20);
//  ellipse(circle5x-7, circle5y+7, 20, 20);
//  ellipse(circle6x-7, circle6y+7, 20, 20);
//  ellipse(circle7x-7, circle7y+7, 20, 20);
//  ellipse(circle8x-7, circle8y+7, 20, 20);
//  ellipse(circle9x-7, circle9y+7, 20, 20);
//  ellipse(circle10x-7, circle10y+7, 20, 20);
//  ellipse(circle11x-7, circle11y+7, 20, 20);
//  ellipse(circle12x-7, circle12y+7, 20, 20);

//fill('black'); // RED CIRC
//noStroke();
//ellipse(circle1x-5, circle1y+5, 20, 20);
//ellipse(circle2x-5, circle2y+5, 20, 20);
//ellipse(circle3x-5, circle3y+5, 20, 20);
//ellipse(circle4x-5, circle4y+5, 20, 20);
//ellipse(circle5x-5, circle5y+5, 20, 20);
//ellipse(circle6x-5, circle6y+5, 20, 20);
//ellipse(circle7x-5, circle7y+5, 20, 20);
//ellipse(circle8x-5, circle8y+5, 20, 20);
//ellipse(circle9x-5, circle9y+5, 20, 20);
//ellipse(circle10x-5, circle10y+5, 20, 20);
//ellipse(circle11x-5, circle11y+5, 20, 20);
//ellipse(circle12x-5, circle12y+5, 20, 20);



fill('#461849'); // WHITE CIRC
//stroke('yellow');
//strokeWeight(1);

//set of circles 1

//fill('blue');
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


//fill ('green');
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

//fill('red');
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

//fill('lightblue');
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

//fill('darkblue');
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

//fill('pink');
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

//fill('purple');
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

//fill('grey');
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

//fill('yellow');
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

//fill('orange');
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

//fill('red');
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

//fill('brown');
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

//  ellipse(circle1x, circle1y, 20, 20);
//  ellipse(circle2x, circle2y, 20, 20);
//  ellipse(circle3x, circle3y, 20, 20);
//  ellipse(circle4x, circle4y, 20, 20);
//  ellipse(circle5x, circle5y, 20, 20);
//  ellipse(circle6x, circle6y, 20, 20);
//  ellipse(circle7x, circle7y, 20, 20);
//  ellipse(circle8x, circle8y, 20, 20);
//  ellipse(circle9x, circle9y, 20, 20);
//  ellipse(circle10x, circle10y, 20, 20);
//  ellipse(circle11x, circle11y, 20, 20);
//  ellipse(circle12x, circle12y, 20, 20);

//  ellipse(circle1x+5, circle1y-5, 20, 20);
//  ellipse(circle2x+5, circle2y-5, 20, 20);
// ellipse(circle3x+5, circle3y-5, 20, 20);
//  ellipse(circle4x+5, circle4y-5, 20, 20);
//  ellipse(circle5x+5, circle5y-5, 20, 20);
//  ellipse(circle6x+5, circle6y-5, 20, 20);
//  ellipse(circle7x+5, circle7y-5, 20, 20);
//  ellipse(circle8x+5, circle8y-5, 20, 20);
//  ellipse(circle9x+5, circle9y-5, 20, 20);
//  ellipse(circle10x+5, circle10y-5, 20, 20);
//  ellipse(circle11x+5, circle11y-5, 20, 20);
//  ellipse(circle12x+5, circle12y-5, 20, 20);

fill('yellow'); // WHITE CIRC

//  ellipse(circle1x+10, circle1y-10, 20, 20);
//  ellipse(circle2x+10, circle2y-10, 20, 20);
//  ellipse(circle3x+10, circle3y-10, 20, 20);
//  ellipse(circle4x+10, circle4y-10, 20, 20);
//  ellipse(circle5x+10, circle5y-10, 20, 20);
//  ellipse(circle6x+10, circle6y-10, 20, 20);
//  ellipse(circle7x+10, circle7y-10, 20, 20);
//  ellipse(circle8x+10, circle8y-10, 20, 20);
//  ellipse(circle9x+10, circle9y-10, 20, 20);
//  ellipse(circle10x+10, circle10y-10, 20, 20);
//  ellipse(circle11x+10, circle11y-10, 20, 20);
//  ellipse(circle12x+10, circle12y-10, 20, 20);


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["circle1x"]    = map(percent, 0, 100, oldObj["circle1x"], newObj["circle1x"]);
  new_letter["circle1y"] = map(percent, 0, 100, oldObj["circle1y"], newObj["circle1y"]);
  new_letter["circle2x"]    = map(percent, 0, 100, oldObj["circle2x"], newObj["circle2x"]);
  new_letter["circle2y"] = map(percent, 0, 100, oldObj["circle2y"], newObj["circle2y"]);
  new_letter["circle3x"]    = map(percent, 0, 100, oldObj["circle3x"], newObj["circle3x"]);
  new_letter["circle3y"] = map(percent, 0, 100, oldObj["circle3y"], newObj["circle3y"]);
  new_letter["circle4x"]    = map(percent, 0, 100, oldObj["circle4x"], newObj["circle4x"]);
  new_letter["circle4y"] = map(percent, 0, 100, oldObj["circle4y"], newObj["circle4y"]);
  new_letter["circle5x"]    = map(percent, 0, 100, oldObj["circle5x"], newObj["circle5x"]);
  new_letter["circle5y"] = map(percent, 0, 100, oldObj["circle5y"], newObj["circle5y"]);
  new_letter["circle6x"]    = map(percent, 0, 100, oldObj["circle6x"], newObj["circle6x"]);
  new_letter["circle6y"] = map(percent, 0, 100, oldObj["circle6y"], newObj["circle6y"]);
  new_letter["circle7x"]    = map(percent, 0, 100, oldObj["circle7x"], newObj["circle7x"]);
  new_letter["circle7y"] = map(percent, 0, 100, oldObj["circle7y"], newObj["circle7y"]);
  new_letter["circle8x"]    = map(percent, 0, 100, oldObj["circle8x"], newObj["circle8x"]);
  new_letter["circle8y"] = map(percent, 0, 100, oldObj["circle8y"], newObj["circle8y"]);
  new_letter["circle9x"]    = map(percent, 0, 100, oldObj["circle9x"], newObj["circle9x"]);
  new_letter["circle9y"] = map(percent, 0, 100, oldObj["circle9y"], newObj["circle9y"]);
  new_letter["circle10x"]    = map(percent, 0, 100, oldObj["circle10x"], newObj["circle10x"]);
  new_letter["circle10y"] = map(percent, 0, 100, oldObj["circle10y"], newObj["circle10y"]);
  new_letter["circle11x"]    = map(percent, 0, 100, oldObj["circle11x"], newObj["circle11x"]);
  new_letter["circle11y"] = map(percent, 0, 100, oldObj["circle11y"], newObj["circle11y"]);
  new_letter["circle12x"]    = map(percent, 0, 100, oldObj["circle12x"], newObj["circle12x"]);
  new_letter["circle12y"] = map(percent, 0, 100, oldObj["circle12y"], newObj["circle12y"]);
  new_letter["circlesize_midunder"] = map(percent, 0, 100, oldObj["circlesize_midunder"], newObj["circlesize_midunder"]);

  return new_letter;
  return new_letter;
}

var swapWords = [
  "ABCCABCC",
  "CAB?CAB?",
  "BAAAAAAA"
]
