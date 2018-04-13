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
  

  angleMode(DEGREES);

  //showbounding boxes
  noFill();
  //stroke ('red');
  //rect (0,0,100,200);


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

  stroke ('white');


  // DRAWING SHAPES// 
  //CIRCLES 
  fill('black');
    //fill(155, 158, 163);
    //ellipse(50, 150, 100, 100);

    //fill (247,168,255,80);
    noFill();
    stroke (112, 124, 99);
    strokeWeight (5);
    ellipse (50,135,120,120);
    fill(157, 165, 94,80);
    ellipse(pos2x, pos2y, size2, size2);
    //triangle(50,100,0,200,100,200);
    triangle(pos2x,pos2y,size,size);

    stroke ('white');
    //strokeWeight(5);

   //rotating rect 
   push ();
   rotate (rotation);
   //fill('white')
   fill (211, 211, 209);
   //fill('black');
   rect(posX, posY, sizeR, sizeR);
   pop();

   //rotating rect 2 

   push ();
   rotate (rotation);
   fill (211, 211, 209);
   
  //fill ('white');
   rect(posZX, posZY, sizeR, sizeR);
   pop();

   //testing commmit !!!!!!


  }
  function interpolate_letter(percent,oldObj,newObj){
    let new_letter ={};
    new_letter["sizeRect"] =map(percent,0,100,oldObj["sizeRect"],newObj["sizeRect"]);
    new_letter["positionX"] =map(percent,0,100,oldObj["positionX"],newObj["positionX"]);
    new_letter["positionY"] =map(percent,0,100,oldObj["positionY"],newObj["positionY"]);
    new_letter["rotate"] =map(percent,0,100,oldObj["rotate"],newObj["rotate"]);
    new_letter["size"] =map(percent,0,100,oldObj["size"],newObj["size"]);
    return new_letter;

    // "sizeRect": 80,
    //   "positionX": 120,
    //   "positionY": 50,
    //   "size": 100,
    //   "offsetx": 0,
    //   "offsety": -15,
    //   "rotate": 44



  }
