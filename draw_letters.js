
const colorFront  = "#30FF1A";


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



    

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50+letterData["offsetx"];
  //let pos2y = 150+letterData["offsety"];

  // draw two circles
 // ellipse(50, 150, 100, 100);
 // ellipse(pos2x, pos2y, size2, size2);


//Parameter 1
//if(letterData["grid"]==1){
 // grid();
//
fill(95, 99, 98);
 rect(0, 0, 100, 100);
//P2
if(letterData["Top"]==1){
  fill(48, 255, 26);
  rect(0, 0, 100, 25);

}else{
  if(letterData["Top"]==2){
    fill(48, 214, 157);
    rect(0, 0, 100, 25);
  }
}


//P3
if(letterData["Left"]==1){
   fill(48, 255, 26);
   rect(0, 0, 25, 100);
}else{
  if(letterData["Left"]==2){
    fill(48, 214, 157);
    rect(0, 0, 25, 100);
  }
}

//P4
if(letterData["Bottom"]==1){
   fill(48, 255, 26);
  rect(0, 75, 100, 25);
}else{
  if(letterData["Bottom"]==2){
    fill(48, 214, 157);
    rect(0, 75, 100, 25);
  }
}


//P5
if(letterData["Right"]==1){
   fill(48, 255, 26);
   rect(75, 0, 25, 100);
}else{
  if(letterData["Right"]==2){
    fill(48, 214, 157);
    rect(75, 0, 25, 100);
  }
}

//P6
if(letterData["M1"]==1){
    fill(48, 255, 26);
    rect(25, 0, 50, 25);
}else{
  if(letterData["M1"]==2){
    fill(48, 214, 157);
    rect(25, 0, 50, 25);
  }
}

//P7
if(letterData["M2"]==1){
   fill(48, 255, 26);
   rect(25, 25, 50, 25);
}else{
  if(letterData["M2"]==2){
    fill(48, 214, 157);
    rect(25, 25, 50, 25);
  }
}

//P8
if(letterData["M3"]==1){
   fill(48, 255, 26);
   rect(25, 50, 50, 25);
  }else{
  if(letterData["M3"]==2){
    fill(48, 214, 157);
    rect(25, 50, 50, 25);
  }
}

//P9
if(letterData["M4"]==1){
   fill(48, 255, 26);
   rect(25, 75, 50, 25);
}else{
  if(letterData["M4"]==2){
    fill(48, 214, 157);
    rect(25, 75, 50, 25);
  }
}

//P10
if(letterData["R4"]==1){
   rect(50, 75, 50, 25);
   fill(48, 255, 26);
}else{
  if(letterData["R4"]==2){
    fill(48, 214, 157);
    rect(50, 75, 50, 25);
  }
}

//P11
if(letterData["R2"]==1){
  fill(48, 255, 26);
  rect(50, 0, 50, 25);
  
}else{
  if(letterData["R2"]==2){
    fill(48, 214, 157);
    rect(50, 0, 50, 25);
  }
}

//P12
if(letterData["R3"]==1){
  fill(48, 255, 26);
  rect(0, 75, 50, 25);
  
 }else{
  if(letterData["R3"]==2){
    fill(48, 214, 157);
    rect(0, 75, 50, 25);
 }
}




 //Grid
    //noFill();
    //stroke(46, 48, 48);
    //strokeWeight(4);
    //rect(0, 0, 100, 100);

    //Down
    //line(25, 0, 25, 100);
    //line(50, 0, 50, 100);
    //line(75, 0, 75, 100);

    //Across
    //line(0, 25, 100, 25);
    //line(0, 50, 100, 50);
    //line(0, 75, 100, 75); 
 

}


