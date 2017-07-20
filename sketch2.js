var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color = "#6d81e5";
var bags_face = "#eed5c1";
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#000000";
var white = "#FFFFFF";
var blueGray = "#363f5a";
var mortyHair = "#7c5937";

function draw () {
  // background color
  background(bg_color);

  drawMonopoly();
  drawMorty();



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

function drawMorty(){

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  rotate(0);

  //hair
    fill(mortyHair);
    ellipse(0, -50, 350, 350);



//face
  fill(bags_face);
  ellipse(0, 0, 300, 300);

  //eye
    fill(white);
    ellipse(-60, -30, 95, 95);
        ellipse(60, -30, 95, 95);
   //pupils
   fill(stroke_color);
    ellipse(-60, -30, 10, 10);
    ellipse(60, -30, 10, 10);

    //nose
    fill(bags_face);
      bezier(0,0,70,30,0,50,-10,20);

      //mouth
      fill(bags_face);
        bezier(30,70,20,120,0,100,-10,70);


  pop();
}


}


function drawMonopoly() {

stroke(stroke_color)
strokeWeight(2)



  // move to position1, rotate, draw "head" ellipse
  push();
  translate(280, 250);
  rotate(0);

  fill(blueGray);
    //top hat
    rect(-160,-400,300,400);


//ear
fill(bags_face);
  ellipse(-160, -0, 50, 60, 90 );


  fill(bags_face);
  ellipse(0, 0, 300, 300);

  // mouth-hole with background color
  fill(stroke_color);
  ellipse( 0, 50, 30, 50);

  //moustache
fill(white);
  beginShape();
  vertex(00,20);
  bezierVertex(100,70,120,50,160,20);
  bezierVertex(160,50,110,140,00,50);
  vertex(00,50);
  bezierVertex(00,50,-110,160,-160,30);
 bezierVertex(-160,10,-120,100,00,20);
 vertex(00,20);

  //vertex(00,40);
  endShape(CLOSE);



fill(bags_face);
  bezier(0,-20,70,30,-15,40,0,20);

  // set fill back to foreground for eyeballs
  fill(stroke_color);
  ellipse(-60, -50, 25, 25);
  ellipse( 50, -50, 25, 25);





fill(blueGray);
//hat brim
  beginShape();
  vertex(-160,0);
  bezierVertex(-100,-0,-350,-280,50,-150);
  bezierVertex(180,-180,180,-150,180,-130);
  vertex(180,-130);
  bezierVertex(50,-100,-80,-100,-130,-160);
  bezierVertex(-180,-120,-100,-250,-160,0);
    vertex(-160,0);
  endShape(CLOSE);


  pop();




}
