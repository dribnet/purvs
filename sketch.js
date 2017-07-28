var canvasWidth = 960;
var canvasHeight = 500;
var curRandomSeed;
var facePositions = [];


function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));


  // rotation in degrees
  angleMode(DEGREES);

}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}
// global variables for colors

var bg_color = [47, 59, 64];



var faceColor = ["#ebcebb", "#ffd5be", "#f6cfaf", "#CAA288", "#D7A595", "#8c6652"];


var eyelidColor = ["#d7b09d", "#e8bca9", "#e5b69c", "#b78c79", "#c19181", "#775041"];

function drawEyelid(blink_value){

	var lowerLimit;
	if((blink_value*(blink_value/15)) < 50){
		lowerLimit = blink_value*(blink_value/15)
	}
	else(lowerLimit = 50);

	var midLimit;
	if((blink_value*(blink_value/20)) < 40){
		midLimit = blink_value*(blink_value/20)
	}
	else(midLimit = 40);

	beginShape();
	curveVertex(0, 3);
	curveVertex(0, 25);
	curveVertex(25, 6 + midLimit);
	curveVertex(60, 0 + lowerLimit);
	curveVertex(87, 5 + midLimit + (midLimit/10));
	curveVertex(115, 25 + (blink_value/1.5));
	curveVertex(124, 39);
	curveVertex(122, 27);
	curveVertex(112, 6);
	curveVertex(92, -5);
	curveVertex(60, -10);
	curveVertex(25, -8);
	curveVertex(0, 3);
	curveVertex(-15, 17);
	curveVertex(0, 25);
	endShape();
}

function drawLowerLid(lowerEye_value) {

	beginShape();
	curveVertex(106, 60);
	curveVertex(25, 60);
	curveVertex(-20, 15);
	curveVertex(-5, 25);
	curveVertex(36, lowerEye_value);
	curveVertex(106, 40);
	curveVertex(106, 60);
	curveVertex(25, 60);
	curveVertex(0, 25);
	endShape();
}

function drawEyeball(x, lowerEye_value, highlightPosition_x, pupil_value, eyeballOffset_value) {

	//draw White of eye

	fill('#fff');
	beginShape();
	curveVertex(36, 44);
	curveVertex(0, 25);
	curveVertex(25, 6);
	curveVertex(60, 0);
	curveVertex(87, 5);
	curveVertex(111, 24);
	curveVertex(121, 39);
	curveVertex(118, 44);
	curveVertex(106, 42);
	curveVertex(84, 46);
	curveVertex(36, lowerEye_value);
	curveVertex(0, 25);
	curveVertex(25, 6);
	endShape();

	//draw iris
	fill(20, 50, 80);
	ellipse(64 + eyeballOffset_value, 18, 45, 45);
	fill(230, 250, 200, 20);

	for (var i = 38; i > 10; i -= 2){
		ellipse(64 + eyeballOffset_value, 18, i, i);
	}

	// draw pupil
	fill("#000");
	ellipse(64 + eyeballOffset_value, 18, 11*pupil_value, 11*pupil_value);

	//draw highlights
	var j = 15;
	var k = 6;
	for (var i = 15; i < 255; i += 5){
		fill(255, 255, 255, i);
		j -= 0.5;
		k -= 0.2;
		ellipse(64+highlightPosition_x, 18, j, j);
		ellipse(64+highlightPosition_x - (highlightPosition_x/2), 10, k, k);
	}
}

function drawEye (x, y, highlightPosition_x, lowerEye_value, pupil_value, blink_value, eyeballOffset_value, color_value){
	
	push();
	translate(37, 161.3);
	scale(0.5)
	rotate(-2);
	drawEyeball(x, lowerEye_value, highlightPosition_x, pupil_value, eyeballOffset_value);

	//draw shape overlay for eyelid
	for(i = 0; i < 8; i+= 0.1){
		push();
		translate(0, i);

		fill(0, 0, 0, 6);
		drawEyelid(blink_value);
		pop();
	}

	fill(eyelidColor[color_value]);
	drawEyelid(blink_value);
	
	//draw shape overlay for lower eye
	for (var i = 0; i > -3; i-=0.2){
		fill(0, 0, 0, 8);	
		push();
		translate(0, i);
		drawLowerLid(lowerEye_value);
		pop();
	}
	fill(faceColor[color_value]);
	drawLowerLid(lowerEye_value);

	fill("#000");
	pop();
	push();
	pop();
}

function drawFace2_shape(face_width, cheek_value, chin_value, color_value){

		stroke(0, 0, 0);
		fill(0, 0, 0);
		beginShape();
		curveVertex(98, 300);
		curveVertex((face_width/2)-2, 25);
		curveVertex(45, 30);
		curveVertex(5, 110);
		curveVertex(0, 180);
		curveVertex(20 - cheek_value, 250 - cheek_value);
		curveVertex(38, 280);
		curveVertex(108 + chin_value, 335 + chin_value);
		curveVertex(138, 300);
		curveVertex(128, 100);
		curveVertex(123, 20);
		endShape();

		noStroke();
		fill(faceColor[color_value]);
	
		beginShape();
		curveVertex(100, 300);
		curveVertex(face_width/2, 25);
		curveVertex(45, 30);
		curveVertex(5, 110);
		curveVertex(0, 180);
		curveVertex(20 - cheek_value, 250 - cheek_value);
		curveVertex(40, 280);
		curveVertex(110 + chin_value, 335 + chin_value);
		curveVertex(140, 300);
		curveVertex(130, 100);
		curveVertex(125, 20);

		endShape();

	}


function drawEyebrow(browRaise_value, brow_value){
	var brow_scale = 1;
	for (var i = 0; i < 10; i++){
		brow_scale -= 0.01;
		push();
		translate(-5, browRaise_value*5)
		scale(brow_scale, 1);
		fill(0, 0, 0, 30);
		beginShape();
		vertex(27, 156);
		vertex(40, 142);
		vertex(63, 132);
		vertex(105, 130 - brow_value);
		vertex(105, 142 - brow_value);
		vertex(68, 141);
		vertex(47, 144);
		vertex(27, 156);			
		endShape();
		pop();
		}
		drawFrownLines(browRaise_value, brow_value)
		
}

function drawFrownLines(browRaise_value, brow_value){
	if (brow_value < 0){
	var frown_value = 150-browRaise_value;
	} else if (brow_value > 0){
		var frown_value = 60+browRaise_value;
	} else {var frown_value = 0;}


	stroke(0, 0, 0, frown_value);
		push();
		translate(-3, browRaise_value);
		bezier(110, 125-brow_value, 110, 135 - brow_value, 110, 140 - brow_value, 103, 145 - brow_value);
		pop();
}

function createFace(x, y, face_scale, lowerEye_value, l_brow_value, r_brow_value ,l_browRaise_value, r_browRaise_value, pupil_value, blink_value, eyeballOffset_value, cheek_value, chin_value, color_value) {

	push();
	scale(face_scale);
	translate(x, y - 150);

	// draw two face halves
	push();
	translate(-125, 0);
	drawFace2_shape(300, cheek_value, chin_value, color_value);
	drawEye(x, y, -10, lowerEye_value, pupil_value, blink_value, eyeballOffset_value, color_value);
	drawEyebrow(l_browRaise_value, l_brow_value);
	pop();

	push();
	translate(125, 00);
	scale(-1, 1);
	drawFace2_shape(300, cheek_value, chin_value, color_value);
	drawEye(x, y, 10, lowerEye_value, pupil_value, blink_value, -eyeballOffset_value, color_value);
	drawEyebrow(r_browRaise_value, r_brow_value);
	pop();
	pop();
	}

function drawFace(x, y, face_scale) {
	var brow_symmetry = Math.floor(focusedRandom(0, 10));
			var l_brow_value = focusedRandom(-15, 15);
			var l_browRaise_value = focusedRandom(-2, 1.5);
			var pupil_value = Math.floor(focusedRandom(1, 3));
			var blink_value = focusedRandom(0, 24, 3, 8);
			if (blink_value > 15){
				var check = random(1);
				if (check > 0.5){
					blink_value = 0;
				} else{
					blink_value = 24;
				}
			}
			var lowerEye_value = focusedRandom(25, 40);
			var r_browRaise_value = focusedRandom(l_browRaise_value, l_browRaise_value+focusedRandom(-0.3, 1));
			if (brow_symmetry < 8){
				var r_brow_value = l_brow_value+(focusedRandom(-10, 10));
			} else {
				var r_brow_value = l_brow_value;
			}
			var eyeballOffset_value = focusedRandom(-25, 25);
			var cheek_value = focusedRandom(-5, 25, 3, 5);
		
			var chin_value = focusedRandom(-15, 20, 4, 5);

			var color_value = Math.floor(focusedRandom(0, 6));
		
			createFace(230+x, 180+y, face_scale, lowerEye_value, l_brow_value, r_brow_value, l_browRaise_value, r_browRaise_value, pupil_value, blink_value, eyeballOffset_value, cheek_value, chin_value, color_value);
		
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  
}

function generateRandomFaces(face_scale){
	facePositions = [];
	var face_y;
	var face_x;
	
  	for (var i = 0; i < 10; i++){

  	// while (facePositions.length < 1){
  		var overlapping = false;
		 face_y  = focusedRandom(0, (canvasHeight+150)/2);
		 face_x = focusedRandom(0, canvasWidth);
		var face_position = {
			face_x,
			face_y
			}
		for (var j = 0; j < facePositions.length; j++){
			var other = facePositions[j];
			var d = dist(face_position.face_x, face_position.face_y, other.face_x, other.face_y);
			if (d < (250*(face_scale+1))){
				///OVERLAPPING
				overlapping = true;
				break;
			}
		}		

		if (!overlapping){
			facePositions.push(face_position);
		}
		
	}

}

function mouseClicked() {
  changeRandomSeed();
  
generateRandomFaces();
	

///code for face positioning taken from this tutorial: https://www.youtube.com/watch?v=XATr_jdh-44
}

function draw () {

	resetFocusedRandom(curRandomSeed);

	noStroke();




	// draw face
	fill(bg_color);
	rect(0, 0, width, height);

	var face_scale = 0.3;
	generateRandomFaces(face_scale);
	for (var i = 0; i < facePositions.length; i++){
		drawFace(facePositions[i].face_x, facePositions[i].face_y, face_scale);
	}


	fill(150, 150, 150, 90);
	rect(0, 0, width, height);

	var face_scale = 0.5;
	generateRandomFaces(face_scale);
	for (var i = 0; i < facePositions.length; i++){
		drawFace(facePositions[i].face_x, facePositions[i].face_y, face_scale);
	}
	rect(0, 0, width, height);
	var face_scale = 0.7;
	generateRandomFaces(face_scale);
	for (var i = 0; i < facePositions.length; i++){
		drawFace(facePositions[i].face_x, facePositions[i].face_y, face_scale);
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
