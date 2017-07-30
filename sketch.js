var canvasWidth = 960*2;
var canvasHeight = 500*2;


function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

 // randButton = createButton('randomize');
  //randButton.mousePressed(changeRandomSeed);
  //randButton.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

// global variables for colors
var bg_color1 = [225, 206, 187,102];
var bg_color2 = [47, 59, 64,102];
var bg_color3 = [70, 70, 120,102];

var fg_color1 = [151, 102, 52];
var fg_color2 = [56, 91, 194];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];




var redc = [121,58,87,focusedRandom(0,255,102)];
var bluec = [77,51,57,focusedRandom(0,255,102)];
var greenc = [140,135,62,focusedRandom(0,255,102)];
var yellowc = [209,197,165,focusedRandom(0,255,102)];
var purplec = [163,138,95,focusedRandom(0,255,102)];

var array = [redc, bluec, greenc, yellowc, purplec];

var a = (focusedRandom(0,1) * 255);
//print(a + "");
var back1 = [121,58,87,focusedRandom(0,255,102)];


function drawFace1(x, y, w, h,eye_value, mouth_value, face_sharpness,nose_curve,hair_curve) {
  push();
  translate(x, y);
  rotate(0);

 
//print(a);
	
  // For the face, as I'm focusing on not eye detail but sharpness, I am going to have the face be from side-on.
  // In this section, the face sharpness will also be edited to get setup for the other features.
  // At this stage I am thinking about using arcs for the chin but I don't know how it will react exactly yet.
  fill(bluec);

  
  if(face_sharpness == 1){
  	rectMode(CENTER);
  	ellipse(0, 0, 300 , 400 );
  	fill(bluec);
  	rectMode(CORNER);
  rect(-145,-20,165,218);

  }
  if(face_sharpness == 2){
  	ellipse(0,0,300,400);
  	fill(bluec);
  	quad(0,200,-100,200,-140,140,-115,120);

  }

  if(face_sharpness == 3){
  	ellipse(0,0,300,400);
  }
  // eyes
    fill(bg_color1);
    ellipse(-50 , -80 , 50 , 30 );
    //ellipse( 50 * scale, -80 * scale, 50 * scale, 30 * scale);

    fill(fg_color1);
    //ellipse(-60 * scale, -80 * scale, 20 * scale, 20 * scale);
    //ellipse( 40 * scale, -80 * scale, 20 * scale, 20 * scale);
  
	
  //draw nose section
	
  // This section will be where the bridge will be the arc parameter, with the base being flat.
  strokeWeight(5);
  stroke(bg_color1);
  line(-90,50,-140,50);
  //noFill();

  //stroke(noStroke);
  // mouth(this has been edited so it is a line of a side view)
  fill(bg_color1);
  //ellipse(0 * scale, 70 * scale, 150 * scale, mouth_value * scale);
  if(nose_curve == 1){
  line(-90,-50,-140,50);
	}


if(nose_curve == 2){
line(-140,50,-110,10);
line(-110,10,-90,-50);

}

if(nose_curve == 3){
line(-140,50,-125,40);
line(-125,40,-105,10);
line(-105,10,-95,-20);
line(-95,-20,-90,-50);

}
  strokeWeight(1);
  //stroke(bg_color1);
	   //ERROR HERE RN
	
  //draw hair section
  push();
  rotate(-30);
  fill(colorHair);
  stroke(colorHair);
  if(hair_curve == 1){
  	
  	line(70,-150,120,100);
  	line(90,-150,140,100);
  	line(110,-150,160,100);

  }
  if(hair_curve == 2){

  	bezier(70,-150,90,-175,105,25,120,100);
  	bezier(90,-150,110,-175,125,25,140,100);
  	bezier(110,-150,130,-175,145,25,160,100);


  }

  pop();
  // For this section, there will be 3 different curves that occur at setting 1,2 and 3.
  // For the inital setup of it, I want the hair to be straight with an arc at the end.
  // With each increased arc, the hair should have more arcs, probably 2 so that the hair is set back on straight course for the next arc.
  
  
  pop();
}

function drawFace2(x, y, w, h,face_definition,face_contrast,eye_detail) {
  rectMode(CENTER);
  push();
  translate(x, y);

  stroke(stroke_color3);
  fill(fg_color3);
  //ellipse(0, 0, 300 * scale, 400 * scale);

if(face_definition == 1	){
 rect(0,20,150,250);
 var i = -10;
  while(i<15){
  	ellipse(70,i*10,10,10);
  	ellipse(-70,i*10,10,10);
  	i++;
  }

  var w = -6;
	while(w<8){
  	ellipse(w*10,-100,10,10);
  	ellipse(w*10,140,10,10);
  	w++;
  	}
  }


  if(face_definition == 2){
  	triangle(-100,-100,100,0,-100,100);
	

	//line ellipses
	var q = -10;
  	while(q<11){
  	
  	ellipse(-100,q*10,10,10);
  	q++;
  }

//x is -100 to 100
//y is -100 to 0

  var e = 0;
  	while(e<21){
  	
  	ellipse(-100+(e*10),-100+(5*e),10,10);
  	e++;
  }


  var z = 0;
  while(z<21){
  	
  	ellipse(100-(z*10),(5*z),10,10);
  	z++;
  }

  }


  // eyes. first check for blinking
 
  
    fill(bg_color2);
    ellipse(-30, -40, 50 ,eye_detail) ;


 

  // mouth
	var k = -50;
	while (k < 30){
		ellipse(10 + k,0,10,10);
		k=k+face_contrast;
		}




  // TODO: paramaterize hair


  resetMatrix();

 
  rectMode(CORNER);

  resetMatrix();

}

function drawFace3(x, y, w, h, amount_of_colours, amount_of_polys, amount_of_features) {
  noStroke();
 //randomSeed(129);
  push();
  //rectMode(CENTER);
  translate(x, y);
  // rotate(width_value);

if (amount_of_polys == 1){
rectMode(CENTER);
fill(back1);
rect(0 , 0, width/5, height/3);

rectMode(CORNER);
}

if(amount_of_polys == 2){
	fill(purplec);
triangle((0-(width/10)),(0-(height/6))  ,(0-(width/10)),(0+(height/6))  ,(0+(width/10)),(0-(height/6)));
fill(redc);
triangle((0+(width/10)),(0+(height/6))  ,(0-(width/10)),(0+(height/6))  ,(0+(width/10)),(0-(height/6)));
}

if(amount_of_polys == 3){
	fill(bluec);
triangle((0-(width/10)),(0-(height/6))  ,(0-(width/10)),(0+(height/6)), 0,(0-(height/6)) );
fill(greenc);
triangle(0,(0-(height/6)), (0-(width/10)),(0+(height/6)),(0+(width/10)),(0+(height/6))  );
fill(yellowc);
triangle((0+(width/10)),(0+(height/6)) ,0,(0-(height/6)),(0+(width/10)),(0-(height/6))  );
}

if(amount_of_polys == 4){
	fill(yellowc);
triangle( (0-(width/10)),(0-(height/6)) , (0-(width/10)),(0+(height/6)), 0,0);
fill(greenc);
triangle(0,0, (0-(width/10)),(0-(height/6)) , (0+(width/10)),(0-(height/6)));
fill(redc);
triangle(0,0, (0+(width/10)),(0-(height/6)) , (0+(width/10)),(0+(height/6)));
fill(bluec);
triangle(0,0, (0+(width/10)),(0+(height/6)), (0-(width/10)),(0+(height/6)));
}

  

  if(amount_of_colours == 1){
  var ran = Math.floor(focusedRandom(1,5));
  var x_colour = array[ran];
  fill(x_colour);
  triangle(-100, -100, 150 ,  60 ,-100,150);
}
 else if(amount_of_colours == 2){
  var ran1 = Math.floor(focusedRandom(1,5));
  var x_colour1 = array[ran1];
  var ran2 = Math.floor(focusedRandom(1,5));
  var x_colour2 = array[ran2];
  fill(x_colour1);
  triangle(-100,  -100, 100 ,  150, 130,-80 );
  fill(x_colour2);
  triangle(-100,-100,-100,150, 160,-20);
}
else if(amount_of_colours == 3){
  var ran3 = Math.floor(focusedRandom(1,5));
  var x_colour3 = array[ran3];
  var ran4 = Math.floor(focusedRandom(1,5));
  var x_colour4 = array[ran4];
  var ran5 = Math.floor(focusedRandom(1,5));
  var x_colour5 = array[ran5];
  fill(x_colour3);
  //rect(-100, -100, 200/3 , random(0,1) *250 );
  triangle(-100, -100, 120 , 100, -120,160);
  fill(x_colour4);
  triangle(150,-100,-100,-140,50,80);
  //rect(-100 + 200/3,-100,200/3,250);
  fill(x_colour5);
  triangle(100,-100,-100, -50, 80,110);
  //rect(-100 + 400/3,-100,200/3,random(0,1) *250);
}
else if(amount_of_colours == 4){
  var ran6 = Math.floor(focusedRandom(1,5));
  var x_colour6 = array[ran6];
  var ran7 = Math.floor(focusedRandom(1,5));
  var x_colour7 = array[ran7];
  var ran8 = Math.floor(focusedRandom(1,5));
  var x_colour8 = array[ran8];
  var ran9 = Math.floor(focusedRandom(1,5));
  var x_colour9 = array[ran9];

  fill(x_colour6);
  triangle(-100,-80,-120,170,10,40);
  fill(x_colour7);
  triangle(-130,-140,100,-100,0,70);
  fill(x_colour8);
  triangle(-100,150,0,5,100,150);
  fill(x_colour9);
  triangle(0,55,100,150,120,-100);
}
else if(amount_of_colours == 5){
  var ran6 = Math.floor(focusedRandom(1,5));
  var x_colour6 = array[ran6];
  var ran7 = Math.floor(focusedRandom(1,5));
  var x_colour7 = array[ran7];
  var ran8 = Math.floor(focusedRandom(1,5));
  var x_colour8 = array[ran8];
  var ran1 = Math.floor(focusedRandom(1,5));
  var x_colour1 = array[ran1];
  var ran2 = Math.floor(focusedRandom(1,5));
  var x_colour2 = array[ran2];

 fill(x_colour6);
 triangle(100,100,150,-100,0,0);
 fill(x_colour7);
 triangle(10,30,-100, -150,30,-100);
 fill(x_colour8);
 triangle(-120,50,-50,-60,70, 100);
 fill(x_colour1);
 triangle(-40,150,-150,70,140,-80);
 fill(x_colour2);
 triangle(150,20,-50,-100, -140,0);
}


if(amount_of_features >= 1){
// eyes
    push();
    translate(focusedRandom(-20,30),0);
    //rotate(focusedRandom(-30,0));
    fill(yellowc);	
  	triangle(-50,-40,-30,-10,-10, -40);
  	fill(redc);
  	triangle(-30,-40,-40,-25,-20,-25);
  	pop();
}

if(amount_of_features >= 2){
//nose
	push();
	translate(focusedRandom(-20,30),0);
	rotate(focusedRandom(-10,10));
  	fill(redc);
  	triangle(-60,50,-30,50,-30,0);
  	fill(purplec);
  	triangle(-30,50,-45,50,-30,25);
  	pop();
}

if(amount_of_features >= 3){
// mouth
  push();
  translate(focusedRandom(-20,30),0);
  rotate(focusedRandom(-30,0));
  fill(greenc);
  //rect(-63 , 70, 75 , 50);
  triangle(-63,70,30,70,-55,125);
  fill(redc);
  triangle(-55,125,30,70,-59,100);
  pop();
}

if(amount_of_features >=4){
//nose2
push();
rotate(223);
fill(purplec);
triangle(0,50,73,50,0,90);
fill(bluec);
triangle(0,50,0,70,36,50);
pop();
}

if(amount_of_features >=5){
	//eye2

fill(bluec);
push();
translate(focusedRandom(0	,30),0);
rotate(180);
triangle(-20,-40,-10,-10,10,-40);
fill(redc);
triangle(-7	,-40,0,-26,-15,-26);
pop();
}

if(amount_of_features >=6){
fill(yellowc);
push();
rotate(-180);
triangle(-63,70,30,70,-55,125)
pop();

}
  
  rectMode(CORNER);
  pop();
}

var lastSwapTime = 0;
var millisPerSwap = 5000;

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
   if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }
  resetFocusedRandom(curRandomSeed);
  noStroke();
      background(bg_color1);
    

  // bg_color[0] = s1;

  // use same size / y_pos for all faces


  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=-5; i<20; i++) {	
    for(var j=-5; j<20; j++) {
      var y = h/2 + ((2*h)/3)*i;
      var x = w/2 + ((2*w)/3)*j;

      //eye_value = getRandomNumberOfEyes();
     // tilt_value = focusedRandom(-70, 90, 8);
      //mouth_value = focusedRandom(0, 50, 4, 1);
      //var amount_of_colours = Math.floor(map(s1,0,100,1,5));
      var amount_of_colours = Math.floor(focusedRandom(1,6));
	  //var amount_of_polys = Math.floor(map(s2,0,100,1,4));
	  var amount_of_polys = Math.floor(focusedRandom(1,5));
	  //var amount_of_features = Math.floor(map(	face_xs3,0,100,1,6));
	  var amount_of_features = focusedRandom(1,6);

	  if(amount_of_polys == 5){amount_of_polys == 4;}
	  if(amount_of_colours == 6){amount_of_colours == 5;}
      //drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value);
      //drawFace3(x, y, w, h, amount_of_colours,amount_of_polys,amount_of_features);
      push();
      translate(0,focusedRandom(-100,100));
      drawFace3(x, y, w, h, amount_of_colours,0,amount_of_features);
      pop();
      rotate(focusedRandom(0,1));
      //rotate(10);
    }
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
