var canvasWidth = 960;
var canvasHeight = 500;
var slider1;
var faceSelector;
var slids;
var dolly;
var patterned;
var cartoon;
var curRandomSeed;
var button;
var macScale;
var ghosts = [null, null, null];
var ghost1X = -9999;
var ghost1Y  = -99999;
var ghost2X = -99999;
var ghost2Y = -999999;
var ghost3X= -99999;
var ghost3Y= -999999;

function setup () {
// create the drawing canvas, save the canvas element
var main_canvas = createCanvas(canvasWidth, canvasHeight);
main_canvas.parent('canvasContainer');
//randomization
curRandomSeed = int(focusedRandom(0, 100));
randButton = createButton('randomize');
randButton.mousePressed(changeRandomSeed);
randButton.parent('selector1Container');

  // create scale slider
  slider1 = createSlider(0, 100, 0);
  slider1.parent('slider1Container');
  
//create the other objects
slids = new SliderValues();
slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
dolly = new RagDoll(canvasWidth/3,canvasHeight,slids);
cartoon = new CartoonFace(canvasWidth/3,canvasHeight,slids);
patterned = new PatternFace(canvasWidth/3,canvasHeight,slids);

  // rotation in degrees
  angleMode(DEGREES);
  //the scaling to deal with the difference between personal and lab computers
  macScale = map(slider1.value(),0,100,1,6);
}

//changes the randomiser and sends the new numbers to the slider object
function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
}

// global variables for colors
var bg_color1 = [156, 159, 213];
var bg_color2 = [244, 249, 200];
var bg_color3 = [70, 70, 120];

var fg_color1 = [249, 231, 239];
var fg_color2 = [175, 212, 175];
var fg_color3 = [206, 207, 180];

//draws a rag doll face according to the positions of the sliders
//most of the actual drawing is done within the RagDoll object
function drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value) {
	//make each face different
  slids.randomSliders(focusedRandom(0,100,2,33), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100, 3, 20),focusedRandom(0,100),focusedRandom(0,100,2,60),focusedRandom(0,100));
  push();
//instructs the doll object to draw itself onto a graphics object
var doll = dolly.drawFace();
translate(x, y);
 //draws the graphics object onto the main canvas in the desired position
 rotate(tilt_value);
 image(doll,0-w/2,0-h/2,w,h);
 pop();
}

//draws a cartoon face according to the positions of the sliders
//most of the actual drawing is done within the CartoonFace object
function drawFace2(x, y, w, h, hair_value, eye_value, blink_value) {
	//make each face different
  slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100,4,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
  rectMode(CENTER);
  push();
  var toon = cartoon.drawFace();
  translate(x, y);
//draws the graphics object onto the main canvas in the desired position
 image(toon,0-w/2,0-h/2,w,h);
 pop();
 rectMode(CORNER);
 resetMatrix();
}

//draws a patterned face according to the positions of the sliders
//most of the actual drawing is done within the PatternFace object
function drawFace3(x, y, w, h, width_value, eye_value, mouth_value) {
  slids.randomSliders(focusedRandom(0,100), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100));
  push();
//instructs the patternFace object to draw itself onto a graphics object
var pat = patterned.drawFace();
rectMode(CENTER);
translate(x, y);
//draws the graphics object onto the main canvas in the desired position
image(pat,w ,h);
image(pat,0-w/2,0-h/2,w,h);
rectMode(CORNER);
pop();
}

function draw () {

//puts dolls in the ghost array
 slids.randomSliders(focusedRandom(0,100,2,80), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100, 3, 20),focusedRandom(0,100),focusedRandom(0,100,2,60),focusedRandom(0,100));
  
//instructs the doll object to draw itself onto a graphics object
  var doll = dolly.drawFace();
  ghosts[2] =  doll;





    //the scaling to deal with the difference between personal and lab computers
    macScale = map(slider1.value(),0,100,1,6);
    resetFocusedRandom(curRandomSeed);
    noStroke();

    var s1 = slider1.value();

//which face gets drawn
var faceType = focusedRandom(1,10);
var w = (canvasWidth / 7)*macScale;
  var h = (canvasHeight / 2.4)*macScale;

   
      var y = (h/macScale)/2 + (h/macScale)*i;
      var x = (w/macScale)/2 + (w/macScale)*j;
      tilt_value = focusedRandom(10, 50);
      eye_value = int(focusedRandom(1, 3));
      mouth_value = focusedRandom(30, 140);


if(false){
  background(fg_color1);
  
    }
    else{
      background(bg_color1);
      drawFace3(canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight, 0, 0, 0);

      var w = (canvasWidth / 8)*macScale;
      var h = (canvasHeight / 2.7)*macScale;
      var sizing = 8;

//creates a pile of doll heads
rectMode(CENTER);
rect(canvasWidth/3, canvasHeight/3, w*2, h*1.5);
  drawFace2(canvasWidth/3, canvasHeight/3, w*2, h*2, tilt_value, eye_value, mouth_value);
     rectMode(CENTER);
      rect(canvasWidth/3+canvasWidth/3, canvasHeight/3, w*2, h*1.5);

       drawFace2(canvasWidth/3+canvasWidth/3, canvasHeight/3, w*2, h*2, tilt_value, eye_value, mouth_value);
       rectMode(CENTER);
      rect(canvasWidth, canvasHeight/3, w*2, h*1.5);
       drawFace2(canvasWidth, canvasHeight/3, w*2, h*2, tilt_value, eye_value, mouth_value);
       rectMode(CENTER);
      rect(0, canvasHeight/3, w*2, h*1.5);
       drawFace2(0, canvasHeight/3, w*2, h*2, tilt_value, eye_value, mouth_value);
      for(var i=0; i<5; i++) {
        for(var j=0; j<5; j++) {
          if (i == 1){var q = 20;}
          else{var q = -55;}
          var y = (h/macScale)/2 + (h/macScale)*i;
          var x = (w/macScale)/2 + (w/macScale)*j;
          //gets a random number for dividing width and height by to add extra size
          sizing = (focusedRandom(6,33));

          tilt_value = focusedRandom(-155, 55,2,-40);
          eye_value = int(focusedRandom(1, 3));
          mouth_value = focusedRandom(30, 140);
      //comment to make file different
      if (i<3){
      drawFace1(focusedRandom(canvasWidth/2, canvasWidth, 3, canvasWidth/1.5), focusedRandom(canvasHeight/1.5, canvasHeight-(canvasHeight/7), 2, canvasHeight - (canvasHeight/10)), w+ (w/sizing), h+ (h/sizing), tilt_value, eye_value, mouth_value);
    }
else{
   drawFace1(focusedRandom(canvasWidth/1.9, canvasWidth/1.1, 3, canvasWidth/1.5), focusedRandom(canvasHeight/2, canvasHeight/1.5, 2, canvasHeight/1.7 ), w, h, tilt_value, eye_value, mouth_value);
}
  }
  }
 //sideways face in the middle at the front
  drawFace1(canvasWidth/3, canvasHeight/1.2, w, h, -80, eye_value, mouth_value);
  //upside down face to the left
  drawFace1(canvasWidth/18, canvasHeight/1.2, w+(w/4), h+(h/4), 133, eye_value, mouth_value);
  movingDolls(w,h);

    
  //takes care of the ghosts
if (ghost1Y< -h){
    slids.randomSliders(focusedRandom(0,100,2,80), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100, 3, 20),focusedRandom(0,100),focusedRandom(0,100,2,60),focusedRandom(0,100));
  push();
//instructs the doll object to draw itself onto a graphics object
  var doll = dolly.drawFace();
  ghosts[1] =  doll;
  ghost1Y = canvasHeight;
ghost1X = focusedRandom(33,canvasWidth/2);
}
if (ghost2Y< -h){
    slids.randomSliders(focusedRandom(0,100,2,80), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100, 3, 20),focusedRandom(0,100),focusedRandom(0,100,2,60),focusedRandom(0,100));
  push();
//instructs the doll object to draw itself onto a graphics object
  var doll = dolly.drawFace();
 
  ghost2Y = canvasHeight;
ghost2X = focusedRandom(0,canvasWidth);
}
if (ghost3Y< -h){
    slids.randomSliders(focusedRandom(0,100,2,80), focusedRandom(0,100),focusedRandom(0,100),focusedRandom(0,100, 3, 20),focusedRandom(0,100),focusedRandom(0,100,2,60),focusedRandom(0,100));
  push();
//instructs the doll object to draw itself onto a graphics object
  var doll = dolly.drawFace();
  ghosts[3] =  doll;
  ghost3Y = canvasHeight;
ghost3X = focusedRandom(30,canvasWidth-20);
}
image(ghosts[1],ghost1X, ghost1Y, w, h);
//ellipse(canvasWidth/2, ghost1Y,1000,1000);
ghost1Y-=5;
image(ghosts[2],ghost2X, ghost2Y, w, h);
//ellipse(canvasWidth/2, ghost1Y,1000,1000);
ghost2Y-=3;
image(ghosts[3],ghost3X, ghost3Y, w, h);
//ellipse(canvasWidth/2, ghost1Y,1000,1000);
ghost3Y-=7;
  }
  function movingDolls(w,h){

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



