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
var bg_color = "#cecece";
var face_color1 = "#ffc2a9";
var face_color2 = "#cc8f72";
var eye_color1 = "#737141";
var eye_color2 = "#000";
var eye_color3 = "#2f56a3";
var hair_color1 = "#fccd85";
var hair_color2 = "#ae1a18"
var stroke_color = "#000";

function draw () {
  // background color
  background(bg_color);

  //////start rapunzel////////

    noStroke();

fill(hair_color1);
push();
translate(960/4, 220);
ellipse(100, 110, 280, 280*1.1);

fill(0, 0, 0, 20);

for (var i = 220; i < 260; i += 5){
  ellipse(100, 110, i, i*1.1); 
}

    //draw neck
fill(face_color2);
    beginShape();
   curveVertex(160, 255);
     curveVertex(70, 220);
    curveVertex(50, 255);
    curveVertex(30, 275);
    curveVertex(15, 285);
    curveVertex(205, 285);
    curveVertex(180, 275);
    curveVertex(160, 255);
    curveVertex(135, 220);
    curveVertex(50, 255);
      endShape();
// draw face
  fill(face_color1);
  push();

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
pop();
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

   fill("#fff");
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
     fill("#fff");
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


//draw flowers
push();
translate(-10, 50);
fill ("#fff");
ellipse(0, 0, 40, 40);
fill("#ffae00");
ellipse(0, 0, 15, 15);


fill("#d16f97")
translate(-10, 30);
ellipse(0, 0, 20, 20);
translate(0, 30);
ellipse(10, -10, 15, 15);
translate(-5, 30);
ellipse(10, -10, 10, 10);

fill("#ffe2de")
translate(-15, -50);
ellipse(0, 0, 10, 10);
translate(5, -15);
ellipse(0, 0, 13, 13);
ellipse(10, -5, 13, 13);

translate(30, 150);
ellipse(10, 0, 10, 10);
ellipse(20, 5, 13, 13);

fill("#fff");
ellipse (30, 5, 10, 10)
ellipse (10, -15, 15, 15)

fill("#d16f97")
ellipse (0, -25, 18, 18)

pop();
pop();

/////start ariel////

push();
translate(900/1.5, 220);
scale(0.4, 0.4);


//draw hair
fill(hair_color2);
push();
rotate(-20);
ellipse(200, 500, 750, 1200);
ellipse(100, 110, 700, 400);
pop();


// //draw neck
// fill(face_color2);
// beginShape();
// curveVertex(400, 540);
// curveVertex(100, 540);
// curveVertex(115, 660);
// curveVertex(105, 720);
// curveVertex(50, 760);
// curveVertex(490, 760);
// curveVertex(445, 720);
// curveVertex(405, 660);
// curveVertex(400, 540);
// curveVertex(100, 540);
// curveVertex(115, 660);
//endShape();

//draw face
fill(face_color1);
 beginShape();
     curveVertex(230, 60);
    curveVertex(375, 0);
    curveVertex(410, 115);
    curveVertex(500, 180);
    curveVertex(490, 260);
    curveVertex(500, 400);
    curveVertex(455, 490);
    curveVertex(390, 590);
    curveVertex(270, 660);
    curveVertex(160, 590);
    curveVertex(55, 490);
    curveVertex(20, 400);
     curveVertex(30, 260);
    curveVertex(0, 180);
    curveVertex(145, 65);
    curveVertex(230, 60);
    curveVertex(375, 0);
    curveVertex(410, 115);
    endShape();


  //draw eyes
fill(eye_color2);
push();
translate(-2, -5);
  beginShape();
curveVertex(65, 320);
curveVertex(70, 255);
curveVertex(130, 250);
curveVertex(180, 270);
curveVertex(200, 320);
curveVertex(130, 340);
curveVertex(65, 320);
curveVertex(70, 255);
curveVertex(130, 250);
endShape();
pop();

  fill("#fff");
  stroke(eye_color2);
beginShape();
curveVertex(65, 320);
curveVertex(70, 255);
curveVertex(130, 250);
curveVertex(180, 270);
curveVertex(200, 320);
curveVertex(130, 340);
curveVertex(65, 320);
curveVertex(70, 255);
curveVertex(130, 250);
endShape();

noStroke();
fill(eye_color3);
ellipse(140, 290, 80, 80);
fill(eye_color2);
ellipse(140, 290, 50, 50);
fill('#fff');
ellipse(120, 280, 10, 20);

//lashes
stroke('#000');
strokeWeight(2);
curve(55, 225, 90, 248, 60, 230, 100, 250)
curve(40, 220, 80, 248, 45, 230, 100, 245)
curve(25, 215, 70, 248, 35, 240, 90, 240)


fill(eye_color2);
push();
translate(500, 0);
scale(-1, 1);
push();
translate(-2, -5);
  beginShape();
curveVertex(65, 320);
curveVertex(70, 255);
curveVertex(130, 250);
curveVertex(180, 270);
curveVertex(200, 320);
curveVertex(130, 340);
curveVertex(65, 320);
curveVertex(70, 255);
curveVertex(130, 250);
endShape();
pop();

  fill("#fff");
  stroke(eye_color2);
beginShape();
curveVertex(65, 320);
curveVertex(70, 255);
curveVertex(130, 250);
curveVertex(180, 270);
curveVertex(200, 320);
curveVertex(130, 340);
curveVertex(65, 320);
curveVertex(70, 255);
curveVertex(130, 250);
endShape();

noStroke();
fill(eye_color3);
ellipse(140, 290, 80, 80);
fill(eye_color2);
ellipse(140, 290, 50, 50);
fill('#fff');
ellipse(120, 280, 10, 20);

//lashes
stroke('#000');
strokeWeight(2);
curve(55, 225, 90, 248, 60, 230, 100, 250)
curve(40, 220, 80, 248, 45, 230, 100, 245)
curve(25, 215, 70, 248, 35, 240, 90, 240)
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
