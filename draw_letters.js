const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
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

<<<<<<< HEAD
  const black  = "#000000";
  const colorBack   = "#000000";
  const white  = "#3d6d96";

   //draw lines 

  fill(black); 
  stroke(black); 
  strokeWeight(15); 

  //HORIZONTAL 

  if(letterData["p1p2"]==1){ 
    line(10, 20, 80, 20); 
  } 

  if(letterData["p3p4"]==1){ 
    line(10, 100, 80, 100); 
  } 

  if(letterData["p5p6"]==1){ 
    line(10, 180, 80, 180); 
  } 

   //VERTICAL 

  if(letterData["p1p3"]==1){ 
   line(10, 20, 10, 100);
  }

  if(letterData["p2p4"]==1){
    line(80, 20, 80, 100);
  } 

  if(letterData["p3p5"]==1){
    line(10, 100, 10, 180);
  }

  if(letterData["p4p6"]){
    line(80, 100, 80, 180);
  }

//DIAGONAL
 if(letterData["p1p6"]==1){
  line(10, 20, 80, 180);
}

  if(letterData["p2p5"]==1){
    line(80, 20, 10, 180);
  }
   

  //draw dots 
  fill(white); 
  stroke(white); 
  strokeWeight(5); 

  ellipse(10, 20, 20);//top left p1 
  ellipse(80, 20, 20);//top right p2 

  ellipse(10, 100, 20); //mid left p3 
  ellipse(80, 100, 20); //mid right p4 

  ellipse(10, 180, 20); //bottom left p5 
  ellipse(80, 180, 20); //bottom right p6 
  }
  
 
  


=======
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  ellipse(50, 150, 75, 75);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
}

>>>>>>> origin/master
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