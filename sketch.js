var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;

//background colour
var bg_color1 = [238, 238, 238];

//arrays of random values used for drawing the face shape/hair of the monster face
var randomHue = [];
var randomSaturation = [];
var randomBrightness = [];
var randomLength = [];

//co-ordinates array an associated pointer
var coOrdsArray = [];
var coOrdsArrayPointer = [];
var coOrdsCount = 0;

//count the monsters and robots
var robotCount = 0;
var monsterCount = 0;

function setup () {
	// create the drawing canvas, save the canvas element
	var main_canvas = createCanvas(canvasWidth, canvasHeight);
	main_canvas.parent('canvasContainer');
	noLoop();
	curRandomSeed = int(focusedRandom(0, 100));

	//set up random button
	randButton = createButton('randomize');
	randButton.mousePressed(changeRandomSeed);
	randButton.parent('selector1Container');

	//setup arrays required for random hue, saturation, brightness and length values used for the monster face
	for(var i=0; i<720; i++){
		randomHue[i] = random(0, 350);
		randomSaturation[i] = random(25, 75);
		randomBrightness[i] = random(50, 100);
		randomLength[i] = random(0, 120);
	}
  
	//set up co-ordinates array
	var w = canvasWidth / 12;
	var h = canvasHeight / 6;
	for(var i=0; i<12; i++) {
		for(var j=0; j<6; j++) {
			var x = w/2 + w*i;
			var y = h/2 + h*j;
			var coOrd = { 'x': x, 'y': y }
			coOrdsArray.push(coOrd);
			coOrdsArrayPointer.push(coOrdsCount);
			coOrdsCount++;
		}
	}

	// rotation in degrees
	angleMode(DEGREES);
}

/*
 * listen for mouse click
 * left click calls the changeRandomSeed function
 * right click creates a new robot
 * center click creates a new monster
 */
function mousePressed() {
	var face = '';
	if (mouseButton == LEFT) {
		changeRandomSeed();
	}
	if (mouseButton == RIGHT) {
		face = 'robot';
	}
    if (mouseButton == CENTER) {
		face = 'monster';
	}
	if(face){
		drawFace(mouseX, mouseY, face);
	}
}

function resetCoOrdsArrayPointer(){
	coOrdsArrayPointer = [];
	for(var i=0; i<coOrdsCount; i++) {
		coOrdsArrayPointer.push(i);
	}
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  robotCount = 0;
  monsterCount = 0;
  resetCoOrdsArrayPointer();
  redraw();
}

function startResetTimer(){
	var lastSwapTime = millis();
	window.setInterval(
		function(){
			if(millis() > (lastSwapTime + 25000)) {
				changeRandomSeed();
			}
		}, 
		5000
	);
}


function drawMonsterFace(x, y, num_of_eyes, eye_size, hue, zigzag, size_adjuster, tilt_value) {
  //positions of the four eyes
  var eyePositions = {
    0: {
      'x': 0,
      'y': 0
    },
    1: {
      'x': -30,
      'y': 0
    },
    2: {
      'x': 35,
      'y': -120
    },
    3: {
      'x': -95,
      'y': -80
    },

  }
  if(num_of_eyes == 2 || num_of_eyes == 4){
    eyePositions[0] = {'x': 25,'y': -15}
  }
  //used to keep the face in the centre if its space
  var xAdjuster = 107;
  push();
  translate(x-xAdjuster * size_adjuster, y);
  rotate(tilt_value);
  //small adjustment for rotation
  translate(0, -tilt_value);
  colorMode(HSB)
  scale(size_adjuster);

  //eye necks for first and forth faces - needs to drawn before the face
  strokeWeight(7);
  stroke(hue,80,40);
  if(num_of_eyes > 2){
    line(xAdjuster, 0, xAdjuster + eyePositions[2]['x'], eyePositions[2]['y']);
    line(xAdjuster, 0, xAdjuster + eyePositions[3]['x'], eyePositions[3]['y']);
  }

  noStroke();
  //face
  for(var i=0; i<720; i++){
      //create a random fill colour
      if(i % 10 == 0){
          fill(randomHue[i], randomSaturation[i], randomBrightness[i]);
      }
      else {
          fill(hue, randomSaturation[i], randomBrightness[i]);
      }
      push();
      translate(110, 10);
      var degree = map(i, 0, 720, 0, 360);
      rotate(i);
      var j = 0;
      while(j < (randomLength[i])) {
        var yPos = j % zigzag;
        if(yPos > (zigzag/2)){
          yPos = -yPos + (zigzag/2);
        }
        ellipse(j, yPos, 2, 2);
        j++;
      }
      pop();
  }

  //eyes

  for(var i=0; i<num_of_eyes; i++){
    var arrayPointer = i;
    if(num_of_eyes == 3 && i == 1){
        arrayPointer = 3;
    }
    strokeWeight(7);
    stroke(hue,80,40);
    fill(hue,80,40);
    ellipse((xAdjuster+eyePositions[arrayPointer]['x']), eyePositions[arrayPointer]['y'], eye_size+2, eye_size+2);
    stroke(hue, 40, 80);
    strokeWeight(3);
    fill(0,0,100);
    ellipse(xAdjuster+eyePositions[arrayPointer]['x'], eyePositions[arrayPointer]['y'], eye_size, eye_size);
    strokeWeight(0);
    fill(hue,80,40);
    ellipse(xAdjuster+eyePositions[arrayPointer]['x'], eyePositions[arrayPointer]['y'], eye_size/2, eye_size/2 );
    fill(0,0,100);
    ellipse(xAdjuster+eyePositions[arrayPointer]['x'] + eye_size/6, eyePositions[arrayPointer]['y'], eye_size/8, eye_size/8 );
  }

  translate(-10, 20);
  rotate(-12);
  strokeWeight(5);
  stroke(hue,80,40);
  //mouth
  fill(0,100,0);
  beginShape();
  vertex(70, 45);
  vertex(120, 50);
  vertex(170, 35);
  vertex(180, 60);
  vertex(165, 90);
  vertex(120, 85);
  vertex(80, 100);
  vertex(65, 80);
  vertex(60, 70);
  endShape(CLOSE);

  noStroke();
  //teeth
  fill(0,0,100);
  //top-left
  beginShape();
  vertex(90, 50);
  vertex(110, 52);
  vertex(100, 65);
  endShape(CLOSE);
  //top-right
  beginShape();
  vertex(140, 47);
  vertex(160, 41);
  vertex(147, 71);
  endShape(CLOSE);
  //bottom-left
  beginShape();
  vertex(90, 92);
  vertex(110, 85);
  vertex(97, 74);
  endShape(CLOSE);
  //bottom-right
  beginShape();
  vertex(133, 84);
  vertex(155, 86);
  vertex(141, 74);
  endShape(CLOSE);

  pop();
	monsterCount++;
}

function drawRobotFace(x, y, num_antennas, face_height, hue, face_shape, mouth_style, eye_distance, tilt_value, size_adjuster) {
  push();
  rectMode(CENTER);
  translate(x, y);
  rotate(tilt_value);
  colorMode(HSB);
  scale(size_adjuster);
  stroke(hue, 50, 90);
  fill(hue, 90, 50);
  var minimizer = 0.5;

  //antenna
  var yVariation = ((300 + face_height) * minimizer) /2;
  var xVariation = (300 * minimizer) /2;
  if(num_antennas == 1 || num_antennas == 3){
      triangle(-20, -20, 0, -50 - yVariation, 20, -20);
      ellipse(0, 10 - yVariation, 40, 40);
      ellipse(0, -50 - yVariation, 15, 15);
  }
  if(num_antennas == 2 || num_antennas == 4){
      triangle(-10, -10, -70, -45 - yVariation, 10, -10);
      ellipse(-70, -45 - yVariation, 10, 10);
      triangle(-10, -10, 70, -45 - yVariation, 10, -10);
      ellipse(70, -45 - yVariation, 10, 10);
  }
  if(num_antennas == 3 || num_antennas == 4){
       //left antenna
      stroke(hue, 90, 50);
      fill(hue, 50, 90);
      strokeWeight(0);
      rect(-xVariation, -40, 130, 5);
      noFill();
      strokeWeight(4);
      ellipse(-xVariation - 40, -40, 12, 50);
      ellipse(-xVariation - 60, -40, 8, 30);

      //right antenna
      stroke(hue, 90, 50);
      fill(hue, 50, 90);
      strokeWeight(0);
      rect(xVariation, -40, 130, 5, 20, 20);
      noFill();
      strokeWeight(4);
      ellipse(xVariation + 40, -40, 12, 50);
      ellipse(xVariation + 60, -40, 8, 30);
  }

  stroke(hue, 50, 90);
  strokeWeight(1);
  fill(hue, 90, 50);

  //head
  var bottomCorners = face_shape - 50;
  bottomCorners = bottomCorners > 0 ? bottomCorners : 0;
  if(face_shape <= 100) {
     rect(0, 0, 300 * minimizer, (300 + face_height) * minimizer, face_shape, face_shape, bottomCorners, bottomCorners);
  }
  else {
      bottomCorners = bottomCorners - ((face_shape - 100) * 2);
      bottomCorners = bottomCorners > 0 ? bottomCorners : 0;
      if(face_shape >= 150){
          quad(xVariation - 5, yVariation*0.25, xVariation  + ((face_shape - 150) / 10), yVariation*0.25, xVariation + (face_shape - 150), yVariation - 5, xVariation - 5, yVariation - 5);
          quad(-xVariation - 1, yVariation*0.25, -xVariation - 1 - ((face_shape - 150) / 10), yVariation*0.25, -xVariation - (face_shape - 150), yVariation - 5, -xVariation + 1, yVariation - 5);
      }
       rect(0, 0, 300 * minimizer, (300 + face_height) * minimizer, face_shape, face_shape, bottomCorners, bottomCorners);
  }

  //eyes
  var i=40;
  var fillObj = {
      40: [0, 0, 100],
      16: [0, 0, 0],
      8: [hue, 50, 90]
  }
  var xPos=(25 + eye_distance), yPos=-40;
  //eyes holder
  rect(0, yPos, 110 + (eye_distance*2), 60, 45, 45, 45, 45);
  fill(0);
  rect(0, yPos, 100 + (eye_distance*2), 50, 45, 45, 45, 45);
  stroke(0);

  while(i>=8){
      if(i == 40 || i == 16){
          fill(fillObj[i][0], fillObj[i][1],fillObj[i][2]);
          //left eye
          ellipse(-xPos, yPos, i, i);
          //right_eye
          ellipse(xPos, yPos, i, i);
      }
      if(i == 8){
          fill(fillObj[i][0], fillObj[i][1],fillObj[i][2]);
          //left eye
          rect(-xPos, yPos, i, i);
          //right_eye
          rect(xPos, yPos, i, i);
      }
      i=i-8;
  }

  // mouth
  noFill();
  stroke(hue, 30, 90);
  strokeWeight(2);
  var i=40, j=50;
  if(mouth_style <= 20){
       i=35, j=55;
  }
  while(i<=j){
     line(-mouth_style, i, mouth_style, i);
      if(mouth_style < 30){
          line(-50, i, -35, i);
          line(50, i, 35, i);
      }
      if(mouth_style < 20){
          line(-30, i, -mouth_style - 5, i);
          line(30, i, mouth_style + 5, i);
      }
      i = i + 5;
  }

  colorMode(RGB);
  rectMode(CORNER);
  pop();
  robotCount++;
}


function draw () {
	resetFocusedRandom(curRandomSeed);
	noStroke();
	background(bg_color1);
	
	for(var i=0; i<coOrdsArray.length; i++) {
		var pointer = random(coOrdsArrayPointer);
		var index = coOrdsArrayPointer.indexOf(pointer); 
		if (index > -1) {
			coOrdsArrayPointer.splice(index, 1);
		}
		//this is used to prevent processing from waiting for all faces to be drawn before displaying them
		setTimeout(
			function(x, y){
				return function() { drawFace(x, y) };
			}(coOrdsArray[pointer]['x'], coOrdsArray[pointer]['y']),
			0
		);	
	}
	
	startResetTimer();
}

/*
 * JSON object consisting of six hue ranges
 * used to ensure each robot has a unique hue
 * the third element of each array is the midpoint of the range
 * which is used to set the mean value for the focusedRandom function
 */
var robotHueRanges = {
    1 : [-20, 20, 0],
    2 : [21, 60, 40],
    3 : [61, 100, 80],
    4 : [101, 140, 120],
    5 : [141, 180, 160],
    6 : [181, 220, 200],
    7 : [221, 260, 240],
    8 : [261, 300, 280],
    9 : [301, 340, 320]
}

var robotHuePointer = 0;

/**
 * determines whether to draw a monster or robot face
 * there will be a maximum of six robots and each robot will have a unique colour
 * @param {Number} x        - x position where the face will be drawn
 * @param {Number} y    	- y position where the face will be drawn
 */
function drawFace (x, y, selectedFace = false) {
	if(robotHuePointer > 8){
		robotHuePointer = 0;
	}
	var face = random(['monster', 'robot']);
	if(selectedFace){
		face = selectedFace;
	}
	if(face == "monster"){
		//number of eyes
		var num_of_eyes = getRandomNumberForDiscreteSetting('eyes');
		var hue = focusedRandom(120, 330);
		//the amount zig zig present in the pattern should lean towards a smaller value
		var zigzag = focusedRandom(1, 20, 10, 3);
		var size_adjuster = focusedRandom(0.2, 0.5, 2, 0.2);
		//the smaller the monster is the bigger its eyes should be
		var eye_size = focusedRandom(20, 80, 100, 140 - (size_adjuster * 200));
		var tilt_value = focusedRandom(-15, 45);
		drawMonsterFace(x, y, num_of_eyes, eye_size, hue, zigzag, size_adjuster, tilt_value);
	}
	else if(face == "robot"){
		robotHuePointer++;
		//number of antennas
		var num_of_antennas = getRandomNumberForDiscreteSetting('antennas');
		//the face height should be closer to the center of the range
		var face_height = focusedRandom(0, 200, 8, 80);
		//the hue should be focused toward the center of this robots hue range
		var hue = focusedRandom(robotHueRanges[robotHuePointer][0], robotHueRanges[robotHuePointer][1], 10, robotHueRanges[robotHuePointer][2]);
		//the actual range of values for face_shape is 0-200 but I want the value for face shape to be either close to 0 or 200
		//so I have focused the random value around a mean of 200 between a range of 100 and 300
		var face_shape = focusedRandom(100, 300, 10, 200);
		//and if the value ends up being greater than 200
		if(face_shape > 200){
			//make it closer to zero
			face_shape = face_shape - 200;
		}
		var mouth_style = focusedRandom(50, 10);
		var eye_distance = focusedRandom(50, 0);
		var tilt_value = focusedRandom(30, -30);
		var size_adjuster = focusedRandom(0.2, 0.5, 2, 0.2);
		drawRobotFace(x, y, num_of_antennas, face_height, hue, face_shape, mouth_style, eye_distance, tilt_value, size_adjuster);
	}
}

/**
 * This function determines what value will be used for the discrete setting of each face (eyes or antennas)
 * @param  {String} type    - the type of discrete setting, possible values are 'eyes' or 'antennas'
 * @return {Number} 		- the value to use as the discrete setting
 */
function getRandomNumberForDiscreteSetting(type = 'eyes') {
  //the probabilities for the two possible types
  var probs = {
    'eyes' : [50, 60, 75],
    'antennas' : [10, 25, 75]
  }
  var random_result = focusedRandom(0, 100);
  if(random_result < probs[type][0]) {
    return 1;
  }
  else if(random_result < probs[type][1]) {
    return 2;
  }
  else if(random_result < probs[type][2]) {
    return 3;
  }
  else {
    return 4;
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
