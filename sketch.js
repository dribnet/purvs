var canvasWidth = 960;
var halfWidth = canvasWidth/2;
// the center x coordinate of each of the individual graphics objects the faces will be drawn on
var centerX = halfWidth/2;
//the same for y
var centerY = canvasHeight/2;
var canvasHeight = 500;
var black = "#000000";
var calvin_skin = "#f7bba1";
var calvin_line = 3;
var missy_skin_1 = "#efc1b2";
var missy_skin_2 =  "#efc1b2";
var missy_lips = "#efc1b2";
var missy_hair_1 = "#805408";
var missy_hair_2 = "#805408";
var missy_hair_3 = "#490b0c";
var white = "#ffffff";
var missy_eyes = "#9194d4";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
calvin = createGraphics(canvasWidth/2, canvasHeight);
missy = createGraphics(canvasWidth/2, canvasHeight);
  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color = "#555555";
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#ffffff";


function draw () {
  // background color
 background(200,200,222);
  // stroke color
  stroke(stroke_color)
  pop();
  drawMissy();
drawCalvin();
stroke(0,0,0);
strokeWeight(5); 
line((canvasWidth/2)-40, 0, canvasWidth/2, canvasHeight);
line((canvasWidth/2)-20, 0, (canvasWidth/2)+20, canvasHeight);


}

function drawCalvin(){
	push();
	calvin.strokeWeight(calvin_line); 
	var calvin_hair = "#f4b613";
	calvin.fill(calvin_skin);
	calvin.noStroke();
	calvin.push();
	calvin.translate(centerX/2,100);
	
	drawCalvinHead();

	calvin.fill(calvin_hair);
	drawCalvinHair();
	drawCalvinFace();

	calvin.pop();
	
 	image(calvin,-width/8,-height/10,canvasWidth*1.5, canvasHeight*3);
 	pop();
}

function drawCalvinFace(){
	calvin.noFill();
	calvin.stroke(black);
	
//draw calvin's nose and ears

//nose
	calvin.ellipse(-6,15,15,12);
	//Calvin's left ear
	calvin.fill(calvin_skin);
	calvin.ellipse(49,6,12,16);
	//remove part of the ellipses for nose and ear
	calvin.noStroke();
	calvin.ellipse(45,7,15,12);
	calvin.ellipse(-0, 15,15.12);

	calvin.fill(calvin_skin);
	
	calvin.stroke(black);
calvin.fill(255,255,255);
	calvin.ellipse(-18,1,8,12);
	calvin.ellipse(10,-2,8,12);
	//draw the mouth
	calvin.fill(black);
	calvin.beginShape();
	calvin.vertex(-30,30);
	calvin.vertex(-5,55);
	calvin.vertex(30,25);
	calvin.vertex(0,29);
	calvin.endShape();

}
function drawCalvinHead(){
noStroke();
calvin.ellipse(0,15,100,100);
calvin.fill(bg_color);
calvin.beginShape();
calvin.vertex(-55,-13);
calvin.vertex(-47, 71);
calvin.vertex(-10, 71);
calvin.vertex(-44,-13);
calvin.endShape();
calvin.fill(calvin_skin);
calvin.stroke(black);
calvin.beginShape();
calvin.vertex(-44,-13);
calvin.vertex(-37,40);
calvin.vertex(-15,65);
calvin,vertex(0,68);
;calvin.vertex(25,60);
calvin.vertex(35,55)
calvin.vertex(45,37);
calvin.endShape();
//draw the shoulders
calvin.noFill();
	calvin.line(35,55,65, 65);
	calvin.line(-25,55,-55,60);

}
function drawCalvinHair() {

	calvin.stroke(black);
	

	calvin.beginShape();
	calvin.vertex(-44,-13);
	calvin.vertex(-47,-15);
	calvin.vertex(-42,-18);
	calvin.vertex(-45,-20);
	//spike 1
	calvin.vertex(-40,-22);
	calvin.vertex(-55, -28);
	// spike 2
	calvin.vertex(-30,-30);
	calvin.vertex(-60,-55);
	calvin.vertex(-25, -45)
	calvin.vertex(-10,-38);
	//spike 3
	calvin.vertex(-35, -65);
	calvin.vertex(10,-50);
	calvin.vertex(25,-35);
	//spike 4
	calvin.vertex(20,-45);
	calvin.vertex(35,-30);
	//spike 5
	calvin.vertex(38,-40);
	calvin.vertex(43,-25);
	//bix
	calvin.vertex(55,-25);
	calvin.vertex(55,-15);
	calvin.vertex(43,-13);
	calvin.endShape();
	calvin.noStroke();
	calvin.rectMode(CENTER);
	calvin.rect(-41,-2,12,17);
	calvin.rect(-40,-8,5,10);

//give a curved fringe line
calvin.noStroke();
calvin.fill(calvin_skin);
calvin.ellipse(0,-10,70,35);
}
function drawMissy() {
	missy.ellipseMode(CENTER);
	
	missy.push();
	missy.translate(centerX/2,0);

	
drawMissyBody()
drawMissyHair()
drawMissyHead()

 drawMissyFace()
	missy.pop();


	
image(missy,canvasWidth/2-(canvasWidth/8),-canvasWidth/10,canvasWidth*1.5, canvasHeight*3);
}
function drawMissyBody(){}
function drawMissyHead(){
	missy.noStroke();
	missy.fill(missy_skin_1);
	//main thin oval
	//missy.ellipse(0,144,50,94);
	missy.ellipse(0,146,50,91);
	//jaw
	missy.ellipse(0,165,54,40);
//forehead
missy.ellipse(0,125,60,50);
//filler
missy.ellipse(0,135,57,40);
//cheeks
missy.bezier(20,170,25,165,32,160,29,120);
missy.bezier(-20,170,-25,165,-32,160,-29,120);
//forhead wings under hair
missy.ellipse(10,107,30,30);
missy.ellipse(-10,110,25,25);

}
function drawMissyHair(){
	missy.fill(missy_hair_3);
	missy.ellipse(0,95,80,45);
	missy.ellipse(10,115,80,55);
	missy.ellipse(-10,120,75,45);
	missy.ellipse(15,80,50,40);
	missy.ellipse(-20,80,57,44);
}
function drawMissyFace(){
	//eyebrows
	missy.stroke(missy_hair_2);
	missy.noFill();
	missy.bezier(-20,125,-25,110,-5,125,-2,130);
missy.bezier(20,122,25,115,7,120,4,127);
//eyes
missy.stroke(black);
missy.fill(white);
missy.bezier(22,130,20,115,7,130,9,130);
missy.bezier(-22,130,-20,115,-7,130,-9,130);
missy.bezier(22,130,20,115,7,130,9,130);
missy.bezier(-22,130,-20,115,-7,130,-9,130);
missy.fill(missy_eyes);
missy.ellipse(17,129,4,4);
missy.ellipse(-17,129,4,4);

//lips
missy.fill(155,0,0);
//missy.line(0,165,15,165);
missy.bezier(0,163,0,158,15,164,15,162);
missy.bezier(0,163,0,158,-15,164,-15,162);
missy.bezier(-10,164,-5,170,5,170,10,164);

//nose
//missy.ellipse(0,140,10,10);
missy.noFill();
missy.bezier(0,133, -10, 143, -15, 153, 0, 153);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}