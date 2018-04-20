const colorFront  = "#199cff";
const colorStroke = "#233f11";
//const colorStroke = "#ffffff";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
 var swapWords = [
    "CRAZYBOX",
    "LO?VE?IT",
    "12345678",
    "HAPPY?U",
    "BLOCKZZZ",
    "ILLISION",
    "COLORFUL",
    "BLOCKBOX"
    



  ]
  
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
  let defineColor = letterData ["colourpicker"];

  noStroke();

  //stroke ('white');


  // DRAWING SHAPES// 
  //circles
    fill (203, 206, 119);
    
    strokeWeight (5);

    // changing the colour if it is a # or letter 

    if (defineColor == 1){
    fill (229, 135, 135,180);
    ellipse (50,135,105,105);
   }
   if (defineColor == 0){
    fill (160, 157, 157,180);
    ellipse (50,135,105,105);
   }

    stroke ('white');
  
  //drawing rects 
  
    push ();
   rotate (Xrotate);

   fill(182, 221, 166,180);
  
   rect(pos2x, pos2y, size2, size2);
   pop();

   
  stroke ('white');
  

   //rotating rect 
   push ();
   rotate (rotation);
   
   fill (216, 208, 99,180);
   
   rect(posX, posY, sizeR, sizeR);
   pop();

   //rotating rect 2 
   push ();
   rotate (Yrotate);
   fill (216, 208, 99,180);
   
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
    new_letter["colourpicker"] =map(percent,0,100,oldObj["colourpicker"],newObj["colourpicker"]);
    return new_letter;




  }

