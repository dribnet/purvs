
/***CHANGING THE COLOURS OF THE SYSTEM***/

var systemBackgroundColor = "#fffff9" //off-white
var systemLineColor = "#4ecdc4"; //blue
var systemBoxColor = "#ff8c42"; //orange



/****FUNCTION TO DRAW THE LETTER USING THE PARAMETERS FROM LETTER.JS****/

function drawLetter(letterData) {

  angleMode(DEGREES); //angle mode to degrees

  // determine the parameters for the rectangle
   let size = letterData["size"];
   let posx = letterData["recOffsetx"];
   let posy = letterData["recOffsety"];
   let rectAngle = letterData["rectAngle"];

  // determine parameters for the ellipse
    let size1 = letterData["size1"];
    let pos2x = letterData["offsetx"];
    let pos2y = letterData["offsety"];

  //determine parameters for the arc
    let size2 = letterData["size2"];
    let pos3x = letterData["arcOffsetx"];
    let pos3y = letterData["arcOffsety"];
    let angleStart = letterData["angleStart"];
    let angleEnd = letterData["angleEnd"];


  //Draw an ellipse
    noStroke();
    fill('#db1c5f'); //red
    ellipseMode(CORNER);
    ellipse(pos2x, pos2y, size1, size1);


  //Draw an arc
    fill('#4c5bd8'); //blue
    arc(pos3x, pos3y, size2, size2, angleStart, angleEnd);


  // draw a rectangle with round corners and rotate it
    fill("#fadf43"); //yellow
    push();
    translate(posx,posy);
    rotate(rectAngle);
    rect(0, 0, 15, size, 20);
    pop();

  //Calling functions

  bubbles(posx, posy, pos2x, pos2y, pos3x, pos3y);

  lines(posx, posy, pos2x, pos2y, pos3x, pos3y, size, size1, size2, angleStart, angleEnd, rectAngle);
}



/*******FUNCTION DRAWING CIRCLES BY RE-USING THE EXISTING POSITION PARAMETERS*******/

function bubbles(posx, posy, pos2x, pos2y, pos3x, pos3y){

 push();
 ellipseMode(CENTER);
 noFill();
 strokeWeight(2);
 stroke('#fadf43');//yellow
 ellipse(pos2x, pos2y, 20);
 stroke('#4c5bd8');//blue
 ellipse(pos3x, pos3y, 10);
 stroke('#db1c5f');//red
 ellipse(posx, posy, 30);
 pop();

}



/*******FUNCTION TO CREATE THE BLACK OUTLINES*******/

function lines(posx, posy, pos2x, pos2y, pos3x, pos3y, size, size1, size2, angleStart, angleEnd, rectAngle){

  noFill();
  strokeWeight(1.5);

  if(size1==0){ // is the size of the ellipse is 0 then no stroke applied to the shape so that no dot appears on the top of the letter
    noStroke();
  } else {
   stroke('#000000'); // black stroke if the size is other than 0
  }

  //Draw an ellipse
    ellipseMode(CORNER);
    ellipse(pos2x-5, pos2y-5, size1, size1);

    if(size2==0){ //if the size of the arc is 0 then no stroke applied to the shape
      noStroke();
    } else {
    stroke('#000000'); // black stroke if the size is other than 0
    }

  //Draw an arc
    arc(pos3x-5, pos3y-5, size2, size2, angleStart, angleEnd);

    if(size==0){ //if the size of the rectangle is 0 then no stroke applied to the shape
      noStroke();
    }else{
      stroke('#000000'); // black stroke if the size is other than 0
    }

  // draw a rectangle with round corners and rotate it

    push();
    translate(posx,posy);
    rotate(rectAngle);
    rect(-5, -5, 15, size, 20);
    pop();

}


/***FUNCTION TO SET UP THE ANIMATION IN BETWEEN EACH LETTER CHANGE****/

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let defaultChar = getObjFromChar("default");

  // making the sizes of the rectangle, ellipse and arc go back to the default before interpolating towards the new size
  //thanks to this, you can still see the letter change when you press the same letter
    if(percent < 50){ 

       new_letter["size"] = map(percent, 0, 50, oldObj["size"], defaultChar["size"]); 

       new_letter["size1"] = map(percent, 0, 50, oldObj["size1"], defaultChar["size1"]);

       new_letter["size2"] = map(percent, 0, 50, oldObj["size2"], defaultChar["size2"]);


  } else {

    new_letter["size"] = map(percent, 51, 100, defaultChar["size"], newObj["size"]);

    new_letter["size1"] = map(percent, 51, 100, defaultChar["size1"], newObj["size1"]);

    new_letter["size2"] = map(percent, 51, 100, defaultChar["size2"], newObj["size2"]);
  }

  //rest of the interpolations

    new_letter["recOffsetx"] = map(percent, 30, 100, oldObj["recOffsetx"], newObj["recOffsetx"]);
    new_letter["recOffsety"] = map(percent, 30, 100, oldObj["recOffsety"], newObj["recOffsety"]);

    new_letter["offsetx"] = map(percent, 30, 100, oldObj["offsetx"], newObj["offsetx"]);
    new_letter["offsety"] = map(percent, 30, 100, oldObj["offsety"], newObj["offsety"]);


    new_letter["arcOffsetx"] = map(percent, 30, 100, oldObj["arcOffsetx"], newObj["arcOffsetx"]);
    new_letter["arcOffsety"] = map(percent, 30, 100, oldObj["arcOffsety"], newObj["arcOffsety"]);

  //smoothly changing the angle from the old to the new arc

    new_letter["rectAngle"] = map(percent, 0, 100, oldObj["rectAngle"], newObj["rectAngle"]);
    new_letter["angleStart"] = map(percent, 0, 100, oldObj["angleStart"], newObj["angleStart"]);
    new_letter["angleEnd"] = map(percent, 0, 100, oldObj["angleEnd"], newObj["angleEnd"]);

  return new_letter;
}

/***EXIBITION WORDS***/

var swapWords = [
  "WASSILYK", //name of the artist that inspired the font
  "BAUHAUS!", //movement that inspired the font
  "BY LAURA" // my name!
]