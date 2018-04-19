const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

//const letterA = {
 // "grid"
//}

//const letterB = {
  //"grid"
//}

//const letterC = {
  //"grid"
//}

//const colorFront  = "#199cff";
//const colorBack   = "#e3eded";
//const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //fill(colorFront);
  //stroke(colorStroke);
  //strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}



function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
 // let pos2x = posx + letterData["offsetx"];
 // let pos2y = posy + letterData["offsety"];


  // draw two circles
    
  



  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);
}

function draw () {
  // clear screen
  background(46, 48, 48);
   fill(255);
   rect(0, 0, 100, 100);



  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;
   
  


fill(48, 255, 26);

   //Top
  //rect(0, 0, 100, 25);

  

   //Bottom
  //rect(0, 75, 100, 25);

   //Right
   //rect(75, 0, 25, 100);

  //Left
   //rect(0, 0, 25, 100);

   //M1
   //rect(25, 0, 50, 25);

   //M2
  //rect(25, 25, 50, 25);

   //M3
   //rect(25, 50, 50, 25);

   //M4
  // rect(25, 75, 50, 25);

   //R4
   //rect(50, 75, 50, 25);

   //R2
  //rect(50, 0, 50, 25);

   //R2 Right
   //rect(0, 75, 50, 25);

  




   //Grid
    noFill();
    stroke(46, 48, 48);
    strokeWeight(4);
    rect(0, 0, 100, 100);

    //Down
    line(25, 0, 25, 100);
    line(50, 0, 50, 100);
    line(75, 0, 75, 100);

    //Across
    line(0, 25, 100, 25);
    line(0, 50, 100, 50);
    line(0, 75, 100, 75); 

  
  //A
  //push();
  //translate(-150, -100);
  //greyBox();
  //Top();
  //Left();
  //Right();
  //M3();
  //grid();
  //pop();

  //B
  //push();
  //translate(100, -100);
  //greyBox();
  //Left();
  //Bottom();
  //M2();
  //M3();
  //grid();
  //pop();

  //C
  //push();
  //translate(350, -100);
  //greyBox();
  //Bottom();
  //Top();
  //Left();
  //grid();
  //pop();



  // draw the letters A, B, C from saved data
  //drawLetter(center_x - 250, center_y, 10, letterA);
  //drawLetter(center_x      , center_y, 10, letterB);
 // drawLetter(center_x + 250, center_y, 10, letterC);
}

//function greyBox(){
  ////Grey
    //fill(71, 74, 73);
    //noStroke();
    //rect(250, 250, 200, 200);
    
//}


  //function grid(){

    
    //Grid
    //noFill();
    //stroke(46, 48, 48);
    //strokeWeight(4);
    //rect(250, 250, 200, 200);

    //Down
    //line(300, 250, 300, 450);
    //line(350, 250, 350, 450);
    //line(400, 250, 400, 450);

    //Across
    //line(250, 300, 450, 300);
    //line(250, 350, 450, 350);
    //line(250, 400, 450, 400); 
  //}

function Left(){
  fill(67, 255, 42);
  rect(250, 250, 50, 200);
}

function Top(){
  fill(67, 255, 42);
  rect(250, 250, 200, 50);
}

function Right(){
  fill(67, 255, 42);
  rect(400, 250, 50, 200);
}

function Bottom(){
  fill(67, 255, 42);
  rect(250, 400, 200, 50);
}

function M1(){
  fill(67, 255, 42);
  rect(300, 300, 100, 50);
}

function M2(){
 fill(67, 255, 42);
  rect(300, 300, 100, 50);
}

function M3(){

  fill(67, 255, 42);
  rect(300, 350, 100, 50);
}

function M4(){
  fill(67, 255, 42);
  rect(300, 400, 100, 50);
}

//Extra Squares.
function R4(){
  fill(67, 255, 42);
  rect(350, 400, 100, 50);
}

function R2(){
  fill(67, 255, 42);
  rect(350, 250, 100, 50);
}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}