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
var bg_color = "grey";
var fg_color1 = "rgb(177,215,151)";
var ZamasuFaceColor1 = "rgb(177,215,151)";
var ZamasuFaceColor2 = "rgb(157,195,131)";
var ZamasuHairColor1 = "rgb(232,236,236)";
var ZamasuHairColor2 = "rgb(169,176,175)";
var ZamasuPotEaringColor1 = "rgb(243,255,84)";
var ZamasuPotEaringColor2 = "rgb(145,157,0)";
var ZamasuPotEaringColor3 = "rgb(18,223,42)";
var fg_color2 = "#999999";

var stroke_color = "black";
var eyecolor1 = "rgb(158,160,160)";
var eyecolor2 = "rgb(15,15,15)";

function draw () {
  // background color
  background(bg_color);

  // stroke color
  stroke(stroke_color)
  noStroke();

    // move to position1, rotate, draw "head" ellipse
    // Creating the basic head stucture
  push();
  translate(960/4, 500/2);
  rotate(0);
  fill(ZamasuFaceColor1);
  ellipse(0, 0, 300, 350);
    
  //stroke("black");
  quad(0, 40, 146.5, 40, 100, 185, 0, 230);
  quad(0, 40, -146.5, 40, -100, 185, 0, 230);

    //Ears
  fill(ZamasuFaceColor2);
  quad(146.5, 40, 280, -20, 160, 135, 113, 145);
  quad(-146.5, 40, -280, -20, -160, 135, -113, 145);

    // eye shapes
  fill("white");
  quad(24, 85, 54, 51, 120, 53, 90, 83);
  quad(-24, 85, -54, 51, -120, 53, -90, 83);

    //eyebrows
  fill(ZamasuHairColor1);
  quad(30, 55, 70, 25, 120, 34, 72, 28);
  quad(-30, 55, -70, 25, -120, 34, -72, 28);


    //eyeballs
  fill(eyecolor1);
  ellipse(60, 68, 30, 30);
  ellipse(-60, 68, 30, 30);


    //pupils
  fill(eyecolor2);
  ellipse(59, 69, 6, 6);
  ellipse(-59, 69, 6, 6);

    //nose
  fill(ZamasuFaceColor2);
  triangle(5, 100, 20, 130, 0, 145);
  triangle(5, 130, -13, 130, 0, 145);


    //mouth
  triangle(-20, 165, -20, 168, -30, 162);
  quad(-20, 165, 20, 165, 20, 170, -20, 168);
  triangle(20, 165, 20, 170, 40, 158);

    //hair
  stroke(ZamasuHairColor1);
  fill(ZamasuHairColor1);
  quad(0, -32, 40, -110, 38, -220, -20, -168);
  quad(-20, -168, 38, -220, -98, -240, -68, -190);
  triangle(-98, -240, -68, -190, -170, -190);


  quad(0, -160, -62, -195, -150, -140, -198, -40);

  triangle(0, -32, 40, -110, -50, -80);
  quad(0, -90, -18, -148, -150, -69, -90, -2);
  quad(-150, -69, -90, -2, -140, 120, -180, 100);
  triangle(-140, 120, -180, 100, -145, 190);

    //Potara Earing
  noStroke();
  fill(ZamasuPotEaringColor1);
  ellipse(135, 152, 10, 10);
  fill(ZamasuPotEaringColor3);
  ellipse(135, 170, 30, 30);
  fill(ZamasuPotEaringColor1);
  ellipse(135, 140, 17, 17);

  pop();

  // move to position2, rotate, draw "head" ellipse
  push();
  translate(3*960/4, 500/2);
  // Head Shape
  stroke("black");
  rect(-100, -100, 250, 235, 20);

  // Eyes
  rect(-100,-10,80,60); 
  rect(70,-10,80,60); 

  // Mouth
  rect(-20,-10,90,145); 

  // Mandibles
  ellipse()

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
