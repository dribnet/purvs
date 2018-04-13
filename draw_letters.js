const colorFront  = "#ffffff";
const colorStroke = "#233f11";
//const colorStroke = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(5);

  angleMode(DEGREES);

  //showbounding boxes
  noFill();
  stroke ('white');
  // rect (0,0,100,200);


  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];
  let rotation = letterData["rotate"]; 
  let sizeR = letterData ["sizeRect"];
  let posX = letterData["positionX"];
  let posY = letterData["positionY"];
  let posZX = letterData ["XZ"];
  let posZY = letterData ["XY"];


  // DRAWING SHAPES// 
  //CIRCLES 
    fill(155, 158, 163);
    //ellipse(50, 150, 100, 100);

    //fill (247,168,255,80);
    ellipse(pos2x, pos2y, size2, size2);

   //rotating rect 
   push ();
   rotate (rotation);
   fill('white')
   //fill (247,168,255,80);
   rect(posX, posY, sizeR, sizeR);
   pop();

   //rotating rect 2 

   push ();
   rotate (rotation);
   //fill (247,168,255,80);
  fill ('white');
   rect(posZX, posZY, sizeR, sizeR);
   pop();



  }
