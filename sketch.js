var canvasWidth = 960,
    canvasHeight = 500;

function setup () {
  // create the drawing canvas,save the canvas element
  var main_canvas = createCanvas(canvasWidth,canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mouseClicked() {
  changeRandomSeed();
}

// global variables for colors
var bg_color = '#F5F5F5',
    cheek_color = '#C74762',
    stroke_color = '#1E1E1E',
    fill_color = '#F5F5F5';

function drawFace1(x, y, w, h, eye_value, ant, c1, c2, c3, eye_size1, eye_size2, eye_size3, rot) {
 
  push();
  translate(x, y);


  
  

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 200.0;

   fill(0, 0, 0, 200);
  beginShape();
  vertex(-140 * scale, 130 * scale);
  vertex(-160 * scale, 80 * scale);
  vertex(120 * scale, 80 * scale);
  vertex(140 * scale, 130 * scale);
  endShape();


  if(rot <= 80){
    rotate(0);
  }
  if(rot > 80 && ant < 90){
    rotate(90);
  }
  if(rot >= 90){
    rotate(180);
  }

  stroke(10);





  fill(c1, c2, c3);
  rect(-100 * scale, -100 * scale, 200 * scale, 200 * scale);

  fill(c1 - 50, c2 - 50, c3 -50);


  beginShape();
  vertex(-120* scale, -120* scale);
  vertex(80* scale, -120* scale);
  vertex(100* scale, -100* scale);
  vertex(-100* scale, -100* scale);
  vertex(-120* scale, -120* scale);
  endShape();

  beginShape();
  vertex(-120* scale, -120* scale);
  vertex(-120* scale, 80* scale);
  vertex(-100* scale, 100* scale);
  vertex(-100* scale, -100* scale);
  vertex(-120* scale, -120* scale);
  endShape();

  fill(c1, c2, c3);




  //antenna


    //antenna1

    

    if(ant <= 35){
    stroke(5);

    beginShape();
    vertex(-15* scale, -110* scale);
    vertex(-7* scale, -165* scale);
    vertex(7* scale, -165* scale);
    vertex(15* scale, -110* scale);
    vertex(-15* scale, -110* scale)
    endShape();

    fill(239, 206, 59);
    ellipse(0* scale, -170* scale, 30* scale, 30* scale)

  }

  //antenna2

  if(ant > 35 && ant < 70){
    stroke(5);

    push();
    stroke(239, 235, 16);
    beginShape();
    noFill();
    vertex(-35* scale, -180* scale);
    vertex(-30* scale, -170* scale);
    vertex(-25* scale, -190* scale);
    vertex(-20* scale, -170* scale);
    vertex(-15* scale, -190* scale);
    vertex(-10* scale, -170* scale);
    vertex(-5* scale, -190* scale);
    vertex(0* scale, -170* scale);
    vertex(5* scale, -190* scale);
    vertex(10* scale, -170* scale);
    vertex(15* scale, -190* scale);
    vertex(20* scale, -170* scale);
    vertex(25* scale, -190* scale);
    vertex(30* scale, -170* scale);
    vertex(35* scale, -180* scale);
    endShape();
    pop();

    beginShape();
    vertex(-15* scale, -110* scale);
    vertex(-7* scale, -135* scale);
    vertex(7* scale, -135* scale);
    vertex(15* scale, -110* scale);
    vertex(-15* scale, -110* scale)
    endShape();

    beginShape();
    vertex(-15* scale, -110* scale);
    vertex(-55* scale, -140* scale);
    vertex(-35* scale, -180* scale);
    vertex(-35* scale, -145* scale);
    vertex(-7* scale, -135* scale);
    endShape();

    beginShape();
    vertex(15* scale, -110* scale);
    vertex(55* scale, -140* scale);
    vertex(35* scale, -180* scale);
    vertex(35* scale, -145* scale);
    vertex(7* scale, -135* scale);
    endShape();

    

  }

  if(ant >= 70 && ant < 90) {
    stroke(5);

    beginShape();
    vertex(-15* scale, -110* scale);
    vertex(-7* scale, -185* scale);
    vertex(7* scale, -185* scale);
    vertex(15* scale, -110* scale);
    vertex(-15* scale, -110* scale)
    endShape();

    beginShape();
    vertex(-9* scale, -165* scale);
    vertex(-47* scale, -205* scale);
    vertex(-27* scale, -245* scale);
    vertex(-27* scale, -210* scale);
    vertex(-7* scale, -185* scale);
    endShape();

    beginShape();
    vertex(9* scale, -165* scale);
    vertex(47* scale, -205* scale);
    vertex(27* scale, -245* scale);
    vertex(27* scale, -210* scale);
    vertex(7* scale, -185* scale);
    endShape();



  }



  //mouth

  fill(255, 255, 255);
  rectMode(CENTER);
    rect(0* scale, 40* scale, 100* scale, 30* scale);
    fill(239, 206, 59);
    rect(-36* scale, 40* scale, 23* scale, 26* scale);
    rect(-12* scale, 40* scale, 23* scale, 26* scale);
    rect(12* scale, 40* scale, 23* scale, 26* scale);
    rect(36* scale, 40* scale, 23* scale, 26* scale);


    //eyes

    //eyes1



    if(eye_value <= 50){

    fill(0, 0, 0);

    ellipse(-35* scale, -35* scale, (30 + eye_size1)* scale, (30 + eye_size1)* scale);
    ellipse(35* scale, -35* scale, (30 + eye_size1)* scale, (30 + eye_size1)* scale);

    fill(255, 255, 255);
    ellipse(-30* scale, -45* scale, (5 + eye_size1)* scale, (5 + eye_size1)* scale);
    ellipse(40* scale, -45* scale, (5 + eye_size1)* scale, (5 + eye_size1)* scale);

  }

    //eyes2

    if(eye_value > 50 && eye_value < 75){

    fill(0, 0, 0);

    ellipse(0* scale, -35* scale, (70 + eye_size2)* scale, (70 + eye_size2)* scale);

    fill(255, 255, 255);

    ellipse(0* scale, -35* scale, (15 + eye_size2)* scale, (15 + eye_size2)* scale);
  }

  //eyes3

  if(eye_value >= 75){

    fill(255, 255, 255);
    ellipse(0* scale, -40* scale, (150 + eye_size3)* scale, (30 + (eye_size3 / 5))* scale);

    fill(0, 0, 0);
    ellipse(0* scale, -40* scale, (140 + eye_size3)* scale, (25 + (eye_size3 / 5))* scale);


  }
  
  pop();

  stroke(5);



  	fill(42, 51, 42);
	beginShape();
	vertex(width, height);
	vertex(860, height);
	vertex(860, 200);
	vertex(width, 200);
	vertex(width, height);
	endShape();

	beginShape();
	vertex(860, 200);
	vertex(800, 100);
	vertex(width, 100);
	vertex(width, 200);
	vertex(860, 200);
	endShape();



}





function draw() {



  noStroke();
  resetFocusedRandom(curRandomSeed);

  // set up background
  fill(bg_color);
  rect(0,0,width,height);

  //background
	push();

	stroke(5);

	fill(151, 163, 151);
    beginShape();
    vertex(800, 230);
    vertex(800, 100);
    vertex(860, 200);
    vertex(860, 240);
    vertex(800, 240);
    endShape();

    fill(42, 51, 42);
    beginShape();
	vertex(860, height);
	vertex(800, 400);
	vertex(800, 380);
	vertex(860, 380);
	vertex(860, height);
	endShape();

	
	fill(98, 103, 112);
	rect(0, 350, width, 30);

	fill(40, 44, 51);
	ellipse(0, 365, 20, 20);
	ellipse(40, 365, 20, 20);
	ellipse(80, 365, 20, 20);
	ellipse(120, 365, 20, 20);
	ellipse(160, 365, 20, 20);
	ellipse(200, 365, 20, 20);
	ellipse(240, 365, 20, 20);
	ellipse(280, 365, 20, 20);
	ellipse(320, 365, 20, 20);
	ellipse(360, 365, 20, 20);
	ellipse(400, 365, 20, 20);
	ellipse(440, 365, 20, 20);
	ellipse(480, 365, 20, 20);
	ellipse(520, 365, 20, 20);
	ellipse(560, 365, 20, 20);
	ellipse(600, 365, 20, 20);
	ellipse(640, 365, 20, 20);
	ellipse(680, 365, 20, 20);
	ellipse(720, 365, 20, 20);
	ellipse(760, 365, 20, 20);
	ellipse(800, 365, 20, 20);
	ellipse(840, 365, 20, 20);
	ellipse(880, 365, 20, 20);
	ellipse(920, 365, 20, 20);
	ellipse(960, 365, 20, 20);

	fill(75, 86, 75);
	rect(0, 230, width, 120);

	line(-20, 230, 20, 350);
	line(20, 230, 60, 350);
	line(60, 230, 100, 350);
	line(100, 230, 140, 350);
	line(140, 230, 180, 350);
	line(180, 230, 220, 350);
	line(220, 230, 260, 350);
	line(260, 230, 300, 350);
	line(300, 230, 340, 350);
	line(340, 230, 380, 350);
	line(380, 230, 420, 350);
	line(420, 230, 460, 350);
	line(460, 230, 500, 350);
	line(500, 230, 540, 350);
	line(540, 230, 580, 350);
	line(580, 230, 620, 350);
	line(620, 230, 660, 350);
	line(660, 230, 700, 350);
	line(700, 230, 740, 350);
	line(740, 230, 780, 350);
	line(780, 230, 820, 350);
	line(820, 230, 860, 350);
	line(860, 230, 900, 350);
	line(900, 230, 940, 350);







	pop();

  var w = canvasWidth / 5,
      h = canvasHeight / 3;

  //for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      // positioning the face
      var y = h/2 + h,
          x = w/2 + w*j;

      // randomising the parameters
        var eye_value = focusedRandom(0, 100);
        var ant = focusedRandom(0, 100);
        var c1 = focusedRandom(153, 168);
        var c2 = focusedRandom(153, 15);
        var c3 = focusedRandom(153, 15);
        var eye_size1 = focusedRandom(-5, 5);
        var eye_size2 = focusedRandom(-10, 10);
        var eye_size3 = focusedRandom(-30, 30);
        var rot = focusedRandom(0, 100);

      // drawing the face
      drawFace1(x,y,w,h, eye_value, ant, c1, c2, c3, eye_size1, eye_size2, eye_size3, rot);
    }
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}