/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
//set up the 
push();
  stroke(255, 0, 0,80);//put into the letter functions 
  strokeWeight(3);
  noFill();

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);

  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];

 
  // push();//turn into functions?//so then i can change which ones have 2 lines or 3 and the colour
  // translate(pos2x, pos2y);
  // rotate(letterData["rotation"]);
  // rect(0, 0, 10, 150);
  // pop();//once in functions chnage rects 2-3 to go down the page more

  aLetter(letterData);

  // push();
  //  translate(pos2x, pos2y);
  // rotate(letterData["rotation1"]);
  // rect(0,0,100,10,);
  // pop();
  
  // push();
  //  translate(pos2x, pos2y);
  // rotate(letterData["rotation2"]);
  // rect(0,0,10,100);
  // pop();
pop();
}
//each letter function 
function aLetter(letterData){//why are all the letters effected by this function?
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
 stroke(255, 0, 0,80);//put into the letter functions 
  strokeWeight(3);
  noFill();
translate(pos2x, pos2y);
  rotate(letterData["rotation"]);
  //rotation vars need to be diferent for each leter 
  rect(0, 0, 10, 150);
  rect(0,0,100,10);//i dont really know what ive done here

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]