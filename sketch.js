var canvasWidth = 960*2;
var canvasHeight = 500*2;
var slider1, slider2, slider3, slider4, slider5, button1;
var faceSelector;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

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

var colorHair = [20, 20, 0];



var redc = [178 ,34 ,34,focusedRandom(0,255,102)];
var bluec = [30 ,144 ,255,focusedRandom(0,255,200)];
var greenc = [50 ,205, 50,focusedRandom(0,255,102)];
var yellowc = [255 ,255, 0,focusedRandom(0,255,189)];
var purplec = [147 ,112 ,219,focusedRandom(0,255,255)];

var a = (focusedRandom(0,1) * 255);
//print(a + "");
var back1 = [focusedRandom(0,1) *255 ,120, 82];


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
 randomSeed(129);
  push();
  //rectMode(CENTER);
  translate(x, y);
  // rotate(width_value);

if (amount_of_polys == 1){
rectMode(CENTER);
fill(back1);
rect(0 , 0, width/3, height);

rectMode(CORNER);
}

if(amount_of_polys == 2){
	fill(purplec);
triangle((0-(width/6)),(0-(height/2))  ,(0-(width/6)),(0+(height/2))  ,(0+(width/6)),(0-(height/2)));
fill(redc);
triangle((0+(width/6)),(0+(height/2))  ,(0-(width/6)),(0+(height/2))  ,(0+(width/6)),(0-(height/2)));
}

if(amount_of_polys == 3){
	fill(bluec);
triangle((0-(width/6)),(0-(height/2))  ,(0-(width/6)),(0+(height/2)), 0,(0-(height/2)) );
fill(greenc);
triangle(0,(0-(height/2)), (0-(width/6)),(0+(height/2)),(0+(width/6)),(0+(height/2))  );
fill(yellowc);
triangle((0+(width/6)),(0+(height/2)) ,0,(0-(height/2)),(0+(width/6)),(0-(height/2))  );
}

if(amount_of_polys == 4){
	fill(yellowc);
triangle( (0-(width/6)),(0-(height/2)) , (0-(width/6)),(0+(height/2)), 0,0);
fill(greenc);
triangle(0,0, (0-(width/6)),(0-(height/2)) , (0+(width/6)),(0-(height/2)));
fill(redc);
triangle(0,0, (0+(width/6)),(0-(height/2)) , (0+(width/6)),(0+(height/2)));
fill(bluec);
triangle(0,0, (0+(width/6)),(0+(height/2)), (0-(width/6)),(0+(height/2)));
}

  

  if(amount_of_colours == 1){
  fill(redc);
  triangle(-100, -100, 150 , random(0,1) * 60 ,-100,150);
}
 else if(amount_of_colours == 2){
  fill(bluec);
  triangle(-100, random(0,1) * -100, 100 , random(0,1) * 150, 130,-80 );
  fill(yellowc);
  triangle(-100,-100,-100,150, 160,-20);
}
else if(amount_of_colours == 3){
  fill(yellowc);
  //rect(-100, -100, 200/3 , random(0,1) *250 );
  triangle(-100, -100, 120 , random(0,1) *100, -120,160);
  fill(redc);
  triangle(150,-100,-100,-140,50,80);
  //rect(-100 + 200/3,-100,200/3,250);
  fill(bluec);
  triangle(100,-100,-100,random(0,1) * -50, 80,110);
  //rect(-100 + 400/3,-100,200/3,random(0,1) *250);
}
else if(amount_of_colours == 4){
  fill(bluec);
  triangle(-100,-80,-120,170,10,40);
  fill(greenc);
  triangle(-130,-140,100,-100,0,70);
  fill(redc);
  triangle(-100,150,0,5,100,150);
  fill(yellowc);
  triangle(0,55,100,150,120,-100);
}
else if(amount_of_colours == 5){
 fill(redc);
 triangle(100,100,150,-100,0,0);
 fill(bluec);
 triangle(10,30,-100,random(0,1) * -150,30,-100);
 fill(greenc);
 triangle(-120,50,-50,-60,70,random(0,1) * 100);
 fill(yellowc);
 triangle(-40,150,-150,70,140,-80);
 fill(purplec);
 triangle(150,20,-50,-100,random(0,1) * -140,0);
}


if(amount_of_features >= 1){
// eyes
    fill(yellowc);	
  	triangle(-50,-40,-30,-10,-10,random(0,1) * -40);

}

if(amount_of_features >= 2){
//nose
  	fill(redc);
  	triangle(-60,50,-30,random(0,1) * 50,-30,0);
}

if(amount_of_features >= 3){
// mouth
  fill(greenc);
  //rect(-63 , 70, 75 , 50);
  triangle(-63,70,random(0,1) * 30,70,-55,125);
}

if(amount_of_features >=4){
push();
rotate(223);
fill(purplec);
triangle(0,50,73,50,0,random(0,1) * 90);
pop();
}

if(amount_of_features >=5){
fill(bluec);

push();
rotate(180*random(0,1));
triangle(-20,-40,-10,-10,10,random(0,1) * 	-40);
pop();
}

if(amount_of_features >=6){
fill(yellowc);
push();
rotate(-180*random(0,1));
triangle(-63,70,random(0,1) * 30,70,-55,125)
pop();

}
  
  rectMode(CORNER);
  pop();
}

function draw () {
	resetFocusedRandom(curRandomSeed);
  noStroke();
      background(bg_color1);
    

  // bg_color[0] = s1;

  // use same size / y_pos for all faces
  var face_w = canvasWidth / 4;
  var face_h = face_w;
  var face_y = height / 2;
  var face_x = width / 2;

  var w = canvasWidth / 5;
  var h = canvasHeight / 3;
  for(var i=0; i<3; i++) {
    for(var j=0; j<5; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;
      //eye_value = getRandomNumberOfEyes();
     // tilt_value = focusedRandom(-70, 90, 8);
      //mouth_value = focusedRandom(0, 50, 4, 1);
      //var amount_of_colours = Math.floor(map(s1,0,100,1,5));
      var amount_of_colours = Math.floor(focusedRandom(1,5));
	  //var amount_of_polys = Math.floor(map(s2,0,100,1,4));
	  var amount_of_polys = Math.floor(focusedRandom(1,4,));
	  //var amount_of_features = Math.floor(map(	face_xs3,0,100,1,6));
	  var amount_of_features = focusedRandom(1,6);
      //drawFace1(x, y, w, h, tilt_value, eye_value, mouth_value);
      //drawFace3(x, y, w, h, amount_of_colours,amount_of_polys,amount_of_features);
      drawFace3(x, y, w, h, amount_of_colours,0,amount_of_features);
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
