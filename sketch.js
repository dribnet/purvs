var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;


function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
    
  curRandomSeed = int(focusedRandom(0, 100));


  // rotation in degrees
  angleMode(DEGREES);
}


// global variables for colors
var bg_color1 = [81,81,81];
var bg_color2 = [193, 193, 193];
var bg_color3 = [66,66,66];

var fg_color1 = [234, 209, 197];
var fg_color2 = [119, 175, 84];
var fg_color22 = [164, 193, 145];
var fg_color3 = [206, 207, 180];

var stroke_color1 = [95, 52, 8];
var stroke_color2 = [210, 219, 189];
var stroke_color3 = [50, 50, 50];

var colorHair = [221, 221, 221];
var num_faces = 22;

function drawFace1(x, y, w, h, brow_value, eye_value, mouth_value) {
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 130.0;

  fill(fg_color1);


//heads rotate
  	random_result = focusedRandom(0, 100);
        if(random_result < 40) {

               rotate(20);

        }
        if(random_result < 20) {

               rotate(-25);

        }

        else {
 		rotate(0);


        }
    
    //head
    noStroke();
     beginShape();
    vertex(-80* scale,0);
    vertex(-50* scale, 70* scale);
    vertex(-40* scale, 80* scale);
    vertex(-10* scale, 100* scale);
     vertex(0, 100* scale);
    vertex(0, -105* scale);
    vertex(-40* scale, -100* scale);
    vertex(-70* scale, -70* scale);
    endShape();
    
    push();
    translate(-0.5,0);
    beginShape();
    vertex(80* scale,0);
    vertex(50* scale, 70* scale);
    vertex(40* scale, 80* scale);
    vertex(10* scale, 100* scale);
    vertex(0, 100* scale);
    vertex(0, -105* scale);
    vertex(40* scale, -100* scale);
    vertex(70* scale, -70* scale);
    endShape();
    pop();
    

    //hair
    fill(94, 57, 10);
    
    noStroke();
     beginShape();
  vertex(-30* scale,-110* scale);
  vertex(0,-110* scale);
  vertex(-2* scale,-70* scale);
  vertex(-85* scale, -10* scale);
    vertex(-70* scale, -70* scale);
  vertex(-50* scale, -100* scale);
   endShape();
    
  push(); 
    translate(0,0);
   beginShape();
  vertex(30* scale,-110* scale);
  vertex(0,-110* scale);
  vertex(2* scale,-70* scale);
  vertex(85* scale, -10* scale);
    vertex(70* scale, -70* scale);
  vertex(50* scale, -100* scale);
   endShape();
    pop();


    //hair buns
       beginShape();
    vertex(-90* scale,-80* scale);
    vertex(-80* scale, -90* scale);
    vertex(-65* scale, -60* scale);
    vertex (-65* scale,20* scale);
    vertex (-80* scale,40* scale);
    vertex(-90* scale, 30* scale);
    vertex(-110* scale,-60* scale);
    vertex(-95* scale,-80* scale);
        endShape();
    
    push();
    translate(0,0);
    beginShape();
    vertex(90* scale,-80* scale);
    vertex(80* scale, -90* scale);
    vertex(65* scale, -60* scale);
    vertex (65* scale,20* scale);
    vertex (80* scale,40* scale);
    vertex(90* scale, 30* scale);
    vertex(110* scale,-60* scale);
    vertex(95* scale,-80* scale);
  endShape();
pop();

//lowered eyes and higher mouth
  	random_result = focusedRandom(0, 100);
        if(random_result < 40) {
				push();
               translate(0,10);

                 stroke(0);
    line(-20* scale,brow_value * scale,-45* scale,-30* scale);
    push();
    translate(0,0);
    line(20* scale,brow_value * scale,40* scale,-30* scale);
    pop();

                 // eyes
                 noStroke();
  if (eye_value === 1) {
    fill(255);
    ellipse(-30 * scale, -10 * scale, 20 * scale, 20 * scale);
    ellipse( 30 * scale, -10 * scale, 20 * scale, 20 * scale);
      fill(0);
    ellipse(-30 * scale, -10 * scale, 5 * scale, 5 * scale);
    ellipse( 30 * scale, -10 * scale, 5 * scale, 5 * scale);
  }

  if (eye_value >= 2) {
    fill(255);
    ellipse(-30 * scale, -10 * scale, 30 * scale, 30 * scale);
    ellipse( 30 * scale, -10 * scale, 30 * scale, 30 * scale);
     fill(0);
    ellipse(-30 * scale, -10 * scale, 10 * scale, 10 * scale);
    ellipse( 30 * scale, -10 * scale, 10 * scale, 10 * scale);
  }

   translate(0,-20);
   fill(bg_color1); 
  stroke(0);    
    rectMode(CENTER);
     push();
     noFill();
      rotate(180);
      translate(0,34);
    arc(0, -70, mouth_value, 20, 20, 160);

      pop();


pop();

        }
        

        else {

        	  stroke(0);
    line(-20* scale,brow_value * scale,-45* scale,-30* scale);
    push();
    translate(0,0);
    line(20* scale,brow_value * scale,40* scale,-30* scale);
    pop();

 		  // eyes
 		  noStroke();
  if (eye_value === 1) {

    fill(255);
    ellipse(-30 * scale, -10 * scale, 20 * scale, 20 * scale);
    ellipse( 30 * scale, -10 * scale, 20 * scale, 20 * scale);
      fill(0);
    ellipse(-30 * scale, -10 * scale, 5 * scale, 5 * scale);
    ellipse( 30 * scale, -10 * scale, 5 * scale, 5 * scale);
  }

  if (eye_value >= 2) {
    fill(255);
    ellipse(-30 * scale, -10 * scale, 30 * scale, 30 * scale);
    ellipse( 30 * scale, -10 * scale, 30 * scale, 30 * scale);
     fill(0);
    ellipse(-30 * scale, -10 * scale, 10 * scale, 10 * scale);
    ellipse( 30 * scale, -10 * scale, 10 * scale, 10 * scale);
  }
  fill(bg_color1); 
  stroke(0);    
    rectMode(CENTER);
     push();
     noFill();
      rotate(180);
      translate(0,34);
     arc(0, -70, mouth_value, 20, 20, 160);

      pop();



        }



  pop();
    
pop();

}


function drawFace2(x, y, w, h, brow_value_yoda, eye_value_yoda,  mouth_value_yoda) {
  rectMode(CENTER);
  push();
  translate(x, y);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 140.0;


   random_result = focusedRandom(0, 100);
        if(random_result < 60) {

               fill(fg_color22);

        }
        else {
 
    			  fill(fg_color2);
               stroke(92, 140, 63);


        }

    //head
    noStroke();
     beginShape();
    vertex(-80* scale,-30* scale);
    vertex(-80* scale, 40* scale);
    vertex(-50* scale, 80* scale);
    vertex(0, 90* scale);
    vertex(0, -100* scale);
    vertex(-40* scale, -90* scale);
    vertex(-70* scale, -70* scale);
    endShape();
    
    push();
    translate(-0.5,0);
    beginShape();
    vertex(80* scale,-30* scale);
    vertex(80* scale, 40* scale);
    vertex(50* scale, 80* scale);
    vertex(0, 90* scale);
    vertex(0, -100* scale);
    vertex(40* scale, -90* scale);
    vertex(70* scale, -70* scale);
    endShape();
    pop();
    
    //ears
   // fill(fg_color2);
    push();
    translate(20,0);
    beginShape();
    vertex(-100* scale,-30* scale);
    vertex(-140* scale, -25* scale); 
    vertex(-190* scale, -40* scale);
    vertex(-165* scale, -10* scale);
    vertex(-140* scale, 10* scale);
    vertex(-100* scale, 20* scale);
    endShape();
    
    beginShape();
    translate(-40,0);
    vertex(100* scale,-30* scale);
    vertex(140* scale, -25* scale); 
    vertex(190* scale, -40* scale);
    vertex(165* scale, -10* scale);
    vertex(140* scale, 10* scale);
    vertex(100* scale, 20* scale);
    endShape();
    pop();


    
    //eyes
      noFill();
      stroke(92, 140, 63);
      strokeWeight(1);
      
      //brow
      arc(-15, -10, brow_value_yoda, brow_value_yoda, 220, 320);
      arc(15, -10, brow_value_yoda, brow_value_yoda, 220, 320);
      
      arc(-15, -4, 20, 20, 220, 320);
      arc(15, -4, 20, 20, 220, 320);
      
      arc(-15, 0, 30, 20, 220, 320);
      arc(15, 0, 30, 20, 220, 320);
      push();
      rotate(180);
      translate(0,34);
      arc(-15, -18, 30, 20, 220, 320); 
      arc(15, -18, 30, 20, 220, 320);
      
      arc(-15, -21, 20, 20, 220, 320);
      arc(15, -21, 20, 20, 220, 320);
      pop();
     
    noStroke();  

    fill(61,61,61);


    ellipse(-eye_value_yoda  * scale, -18 * scale, 10 * scale, 10 * scale);
    ellipse( eye_value_yoda * scale, -18 * scale, 10 * scale, 10 * scale);


    

  // mouth
  stroke(61,61,61);    
    rectMode(CENTER);
     push();
    noFill();
      rotate(180);
      translate(0,34);
      arc(0, -30, mouth_value_yoda, 40, 220, 320); 

      pop();

//hair
    stroke(221, 221, 221);
    point (-70* scale,-40* scale);
    point (-50* scale,-60* scale);
    point (-60* scale,-60* scale);
    point (-80* scale,-20* scale);
    point (-75* scale,-50* scale);
    push();
    translate(0,0);
    point (70* scale,-40* scale);
    point (65* scale,-65* scale);
    point (60* scale,-60* scale);
    point (80* scale,-20* scale);
    point (75* scale,-50* scale);
    pop();
    noStroke();
  
  rectMode(CORNER);
  resetMatrix();
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

  // draw 1st face
  background (61,61,61);

  var w = canvasWidth / 8;
  var h = canvasHeight / 4;

  var layout_width = 4;
  var layout_height = 10;
    
  var max_shift = layout_width * w;
  for(var i=0; i<4; i++) {
    for(var j=0; j<7; j++) {
      var y = h/2 + h*i;
      var x = w/2 + w*j;  

      // shift even rows over by half a face
      if(i%2 == 0) {
        x = x + w/3;
      }
        
        if(j%2 == 0) {
        y = y + h/9;
      }
        
        layout_width =  layout_width +0.5;
        layout_height = layout_height -0.7;
        
      // also random jitter
      x = x + layout_width + focusedRandom(-max_shift, max_shift, 10);
      y = y + layout_height + focusedRandom(-max_shift, max_shift, 5);


     //Leia
      brow_value = focusedRandom(-30, -40);
      eye_value = int(focusedRandom(1, 3));
      mouth_value = focusedRandom(10, 50);

      //Yoda
       brow_value_yoda = focusedRandom(15, 25);
       eye_value_yoda = int(focusedRandom(25, 40));
       mouth_value_yoda = focusedRandom(20, 70);

  
         random_result = focusedRandom(0, 100);
        if(random_result < 7) {

             drawFace2(x, y, w, h, brow_value_yoda, eye_value_yoda, mouth_value_yoda); 

        }
        else {
             drawFace1(x, y, w, h, brow_value, eye_value, mouth_value);  

        }
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
