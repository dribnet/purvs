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
var bg_color = "#fff";
var face_color1 = "#ffc2a9";
var face_color2 = "#ed926b";
var face_color3 = "#a45338";
var eye_color1 = "#737141";
var eye_color2 = "#000";
var stroke_color = "#000";

function draw () {
  // background color
  background(bg_color);

  //noStroke();

  // move to position1, rotate, draw "head" ellipse
  push();
  translate(960/4, 200);
  fill(face_color1);
    noStroke();
  // ellipse(0, 0, 380, 400);
  // triangle(-125, 150, 0, 260, 125, 150);

    beginShape();

       curveVertex(20, 30);
    curveVertex(100, 0);
    curveVertex(180, 30);
    curveVertex(200, 110);
    curveVertex(165, 215);
    curveVertex(100, 255);
    curveVertex(35, 215);
    curveVertex(0, 110);
    curveVertex(20, 30);
    curveVertex(100, 0);
    curveVertex(180, 30);
    endShape();

  // stroke color

  

  // draw two eyes
fill(eye_color2);
push();
translate(-2, -5);

      beginShape();
    curveVertex(25, 125);
    curveVertex(15, 110);
    curveVertex(25, 95);
    curveVertex(45, 88);
    curveVertex(65, 95);
    curveVertex(75, 110);
    curveVertex(65, 125);
    curveVertex(45, 130);
    curveVertex(25, 125);
    curveVertex(15, 110);
    curveVertex(25, 95);
    endShape();
    pop();

   fill(bg_color);
   stroke(eye_color2);
    beginShape();
    curveVertex(25, 125);
    curveVertex(15, 110);
    curveVertex(25, 95);
    curveVertex(45, 88);
    curveVertex(65, 95);
    curveVertex(75, 110);
    curveVertex(65, 125);
    curveVertex(45, 130);
    curveVertex(25, 125);
    curveVertex(15, 110);
    curveVertex(25, 95);
    endShape();
noStroke();
    fill(eye_color1);
    ellipse(46, 113, 36, 36);
      fill(eye_color2);
    ellipse(46, 113, 20, 20);
    


    push();
      translate(100, 0);
    fill(eye_color2);
push();
translate(2, -5);

      beginShape();
    curveVertex(25, 125);
    curveVertex(15, 110);
    curveVertex(25, 95);
    curveVertex(45, 88);
    curveVertex(65, 95);
    curveVertex(75, 110);
    curveVertex(65, 125);
    curveVertex(45, 130);
    curveVertex(25, 125);
    curveVertex(15, 110);
    curveVertex(25, 95);
    endShape();
    pop();
     fill(bg_color);
   stroke(eye_color2);
    beginShape();
    curveVertex(25, 125);
    curveVertex(15, 110);
    curveVertex(25, 95);
    curveVertex(45, 88);
    curveVertex(65, 95);
    curveVertex(75, 110);
    curveVertex(65, 125);
    curveVertex(45, 130);
    curveVertex(25, 125);
    curveVertex(15, 110);
    curveVertex(25, 95);
    endShape();
noStroke();
    fill(eye_color1);
    ellipse(43, 113, 36, 36);
    fill(eye_color2);
    ellipse(43, 113, 20, 20);
    pop();

  // draw nose
  noStroke();
  fill(face_color2);
  beginShape();
   curveVertex(85, 170);
    curveVertex(102, 145);
    curveVertex(120, 170);
    curveVertex(100, 175);
    curveVertex(85, 170);
    curveVertex(102, 145);
    curveVertex(120, 170);
    endShape();

  fill(face_color3);
  ellipse(95, 172, 12, 8);
  ellipse(110, 172, 12, 8);

  // mouth-hole with background color
  fill(bg_color);

  pop();


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
