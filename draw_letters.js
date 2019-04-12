const colorFront1  = "#00368e";
const colorFront2  = "#93cbff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let posx = 0;
  let posy = 0;

  let pos2x = posx  + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"]; 

  let pos3x = posx  + letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"]; 

  let pos4x = posx  + letterData["offsetx3"];
  let pos4y = posy + letterData["offsety3"]; 

  let pos5x = posx  + letterData["offsetx4"];
  let pos5y = posy + letterData["offsety4"]; 



 let pos6x = posx  + letterData["offsetx5"];
  let pos6y = posy + letterData["offsety5"]; 

  let pos7x = posx  + letterData["offsetx6"];
  let pos7y = posy + letterData["offsety6"]; 

  let pos8x = posx  + letterData["offsetx7"];
  let pos8y = posy + letterData["offsety7"]; 

  let pos9x = posx  + letterData["offsetx8"];
  let pos9y = posy + letterData["offsety8"]; 




  fill(colorFront1);
     beginShape()
  vertex(pos2x,pos2y);
  vertex(pos3x,pos3y);
  vertex(pos4x,pos4y);
  vertex(pos5x,pos5y);
  endShape(CLOSE);

    fill(colorFront2);
   beginShape()
  vertex(pos6x,pos6y);
  vertex(pos7x,pos7y);
  vertex(pos8x,pos8y);
  vertex(pos9x,pos9y);
  endShape(CLOSE);
  

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
 if(percent < 50) {
new_letter["offsetx"] = oldObj["offsetx"];
new_letter["offsetx2"] = oldObj["offsetx2"];
new_letter["offsetx3"] = oldObj["offsetx3"];
new_letter["offsetx4"] = oldObj["offsetx4"];
new_letter["offsetx5"] = oldObj["offsetx5"];
new_letter["offsetx6"] = oldObj["offsetx6"];
new_letter["offsetx7"] = oldObj["offsetx7"];
new_letter["offsetx8"] = oldObj["offsetx8"];
}
else{
new_letter["offsetx"] = map(percent, 50, 100, oldObj["offsetx"], newObj["offsetx"]);
new_letter["offsetx2"] = map(percent, 50, 100, oldObj["offsetx2"], newObj["offsetx2"]);
new_letter["offsetx3"] = map(percent, 50, 100, oldObj["offsetx3"], newObj["offsetx3"]);
new_letter["offsetx4"] = map(percent, 50, 100, oldObj["offsetx4"], newObj["offsetx4"]);
new_letter["offsetx5"] = map(percent, 50, 100, oldObj["offsetx5"], newObj["offsetx5"]);
new_letter["offsetx6"] = map(percent, 50, 100, oldObj["offsetx6"], newObj["offsetx6"]);
new_letter["offsetx7"] = map(percent, 50, 100, oldObj["offsetx7"], newObj["offsetx7"]);
new_letter["offsetx8"]  = map(percent, 50, 100, oldObj["offsetx8"], newObj["offsetx8"]);
}

  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["offsety5"] = map(percent, 0, 100, oldObj["offsety5"], newObj["offsety5"]);
  new_letter["offsety6"] = map(percent, 0, 100, oldObj["offsety6"], newObj["offsety6"]);
  new_letter["offsety7"] = map(percent, 0, 100, oldObj["offsety7"], newObj["offsety7"]);
  new_letter["offsety8"] = map(percent, 0, 100, oldObj["offsety8"], newObj["offsety8"]);

  return new_letter;



}

var swapWords = [
  "SERRATED",
  "WILLRIDD",
  "VICTORIA"
]