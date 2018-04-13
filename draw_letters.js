const colorFront  = "#199cff";
const colorStroke = "#233f11";

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
  strokeWeight(4);
   angleMode(DEGREES);

   noFill();
   stroke('red');
   rect(0, 0, 100, 200);
   stroke('black');

  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50+letterData["offsetx"];
  // let pos2y = 150+letterData["offsety"];
let posx = 0;
let posy = 0;
//let rotatearc = 0;
//let roac = 0;
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset3x"];
  let pos3y = posy + letterData["offset3y"];
  let arcAngle = 270;
  let rotatearc2 = letterData["rotate2"];
  let rotatearc3= letterData["rotate3"];

  // draw two circles
  // ellipse(50, 150, 100, 100);
  // ellipse(pos2x, pos2y, size2, size2);

  push();

  rotate(rotatearc2+46.5);
  translate(50,175);
  noFill();
  arc(pos2x, pos2y, 80, -80, arcAngle, PI, PI + QUARTER_PI);

  rotate(rotatearc3);
  translate(20,20);
  arc(pos3x, pos3y, 30, -30, arcAngle, PI, PI + QUARTER_PI);

  //translate(140,70);

  //arc(pos2x, pos2y, 100, -100, arcAngle, PI, PI + QUARTER_PI);

  // rotate(-180);
  // translate(-5,-25);
  // arc(pos3x, pos3y, 40, -40, arcAngle, PI, PI + QUARTER_PI);

  // rotate(-180);
  // translate(100,75);

  // arc(pos2x, pos2y, 120, -120, arcAngle, PI, PI + QUARTER_PI);

  // rotate(-180);
  // translate(-5,-25);
  // arc(pos3x, pos3y, 40, -40, 270, PI, PI + QUARTER_PI);

  pop();

    
  // push();

  // noFill();
  // rotate(-45);
  // translate(-30,-40);


  // arc(pos2x, pos2y, 200, -200, 270, PI, PI + QUARTER_PI);
  // arc(pos3x, pos3y, 60, -60, 270, PI, PI + QUARTER_PI);
    
  // pop();
    
    
  // push();  
  // noFill();
  // rotate(-225);
  // translate(-660, -1280);
  // arc(pos3x, pos3y, 60, -60, 270, PI, PI + QUARTER_PI);
  // pop();
    
  // push();
  
  // noFill();
  // rotate(-45);
  // translate(-250,-260);
  // arc(pos2x, pos2y, 200, -200, 270, PI, PI + QUARTER_PI); 
    
    
  // pop();
}
