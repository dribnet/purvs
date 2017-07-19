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
var bg_color = "#3a4251";
var fg_color1 = "#fce9e0";
var fg_color2 = "#2b6308";
var stroke_color = "#f8f8f8";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)

 
  //PRINCESS LEIA 
  push();
  translate(960/4, 500/2);
  rotate(4);
  fill(fg_color1);
    
    ellipse(40,0,250,300);
    fill(94, 57, 10);
    noStroke();
     beginShape();
  vertex(40,-100);
  vertex(-100, 10);
    vertex(-100, -50);
    vertex(-80, -90);
    vertex(-60, -110);
     vertex(-10, -150);
    vertex(40, -160);
    vertex(40,-100);
   endShape();
    
     beginShape();
    vertex(40, -160);
    vertex(43,-100);
    vertex(90,-80);
    vertex(160,-50);
    vertex(160,-80);
    vertex(120,-140);
    vertex(40, -160);
    
   endShape();
    
fill(109, 67, 13);
noStroke();
    
    beginShape();
  vertex(-125,-80);
  vertex(-80, -90);
  vertex(-65, -60);
 vertex (-65,100);
vertex (-80,130);
    vertex(-115, 120);
    vertex(-130,-60);
vertex(-125,-80);
  endShape();
    
push();
    translate(1050/4, -40/2);
  beginShape();
  vertex(-125,-80);
  vertex(-80, -90);
  vertex(-65, -60);
 vertex (-65,100);
vertex (-80,130);
    vertex(-115, 120);
    vertex(-130,-60);
vertex(-125,-80);
  endShape();
pop();


  pop();

  // YODA
      push();
  translate(3*960/4, 500/2);
    fill(fg_color2);
    noStroke();
ellipse(0,0,250,250);

    beginShape();
  vertex(-110,-30);
  vertex(-150, -25);
  vertex(-230, -35);
  vertex(-175, 0);
    vertex(-150, 10);
    vertex(-112, 20);
      endShape();
    push();
    
    translate(0); 
     scale(-1.0,1.0); 
     beginShape();
  vertex(-110,-30);
  vertex(-150, -25);
  vertex(-230, -35);
  vertex(-175, 0);
    vertex(-150, 10);
    vertex(-112, 20);

  endShape();
    pop();
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
