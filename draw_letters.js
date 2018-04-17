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
  let Xrotate = letterData ["xR"];
  let Yrotate = letterData ["yR"];

  stroke ('white');


  // DRAWING SHAPES// 
  //CIRCLES 

    //fill(155, 158, 163);
    //ellipse(50, 150, 100, 100);

    //fill (247,168,255,80);
    //noFill();
    fill (203, 206, 119);
    
    strokeWeight (5);
    //fill(203, 206, 119,90);
    fill (203, 206, 119);
    ellipse (50,135,120,120);
    stroke (112, 124, 99,80);
  
  
    push ();
   rotate (Xrotate);
   //fill('white')
   fill('white');
   //fill (203, 206, 119);
   //fill('black');
   rect(pos2x, pos2y, size2, size2);
   pop();

    stroke ('white');
    //strokeWeight(5);

   //rotating rect 
   push ();
   rotate (rotation);
   //fill('white')
   fill (203, 206, 119);
   //fill('black');
   rect(posX, posY, sizeR, sizeR);
   pop();

   //rotating rect 2 
   push ();
   rotate (Yrotate);
   fill (203, 206, 119);
   
  //fill ('white');
   rect(posZX, posZY, sizeR, sizeR);
   pop();

  

  


  }
  function interpolate_letter(percent,oldObj,newObj){
    let new_letter ={};
    new_letter["sizeRect"] =map(percent,0,100,oldObj["sizeRect"],newObj["sizeRect"]);
    new_letter["positionX"] =map(percent,0,100,oldObj["positionX"],newObj["positionX"]);
    new_letter["positionY"] =map(percent,0,100,oldObj["positionY"],newObj["positionY"]);
    new_letter["rotate"] =map(percent,0,100,oldObj["rotate"],newObj["rotate"]);
    new_letter["size"] =map(percent,0,100,oldObj["size"],newObj["size"]);
    new_letter["offsetx"] =map(percent,0,100,oldObj["offsetx"],newObj["offsetx"]);
    new_letter["offsety"] =map(percent,0,100,oldObj["offsety"],newObj["offsety"]);
    new_letter["xR"] =map(percent,0,100,oldObj["xR"],newObj["xR"]);
    new_letter["XZ"] =map(percent,0,100,oldObj["XZ"],newObj["XZ"]);
    new_letter["yR"] =map(percent,0,100,oldObj["yR"],newObj["yR"]);
    new_letter["XY"] =map(percent,0,100,oldObj["XY"],newObj["XY"]);
    return new_letter;




  }
